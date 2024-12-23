package server

import (
	"HackathonNPCI/internal/controllers"
	"HackathonNPCI/internal/database"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/supertokens/supertokens-golang/recipe/session"
	"github.com/supertokens/supertokens-golang/recipe/session/sessmodels"
	"github.com/supertokens/supertokens-golang/supertokens"
)

func (s *Server) RegisterRoutes() {

	// s.Use(func(c *gin.Context) {
	// 	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	// 	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	// 	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
	// 	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

	// 	if c.Request.Method == "OPTIONS" {
	// 		c.AbortWithStatus(http.StatusOK)
	// 		return
	// 	}

	// 	c.Next()
	// })

	// CORS
	s.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000", "https://ecell.bhaskaraa45.me", "https://hackathon.bhaskaraa45.me", os.Getenv("FRONTEND_URL")},
		AllowMethods: []string{"GET", "POST", "DELETE", "PUT", "OPTIONS"},
		AllowHeaders: append([]string{"Content-Type", "Authorization"},
			supertokens.GetAllCORSHeaders()...),
		AllowCredentials: true,
	}))

	s.Use(func(c *gin.Context) {
		supertokens.Middleware(http.HandlerFunc(
			func(rw http.ResponseWriter, r *http.Request) {
				c.Next()
			})).ServeHTTP(c.Writer, c.Request)
		c.Abort()
	})

	s.GET("/", s.HelloWorldHandler)
	s.GET("/health", verifySession(nil), s.healthHandler)
	s.GET("/date", controllers.HandleDate)
	s.GET("/team", verifySession(nil), controllers.HandleGetTeam)
	s.POST("/team", verifySession(nil), controllers.HandleTeamRegister)
	s.POST("/promote", verifySession(nil), controllers.HandleRoundPromotion) //ADMIN ROUTE
	s.GET("/question", verifySession(nil), controllers.HandleGetQuestion)
	s.POST("/question", verifySession(nil), controllers.HandleSubmussions)
	s.GET("/me", verifySession(nil), controllers.HandleGetUser)
	s.GET("/exists", verifySession(nil), controllers.HandleUserExists)
	s.GET("/session-info", verifySession(nil), controllers.HandleSessionUser)
	s.GET("/leaderboard", verifySession(nil), controllers.HandleGetLeaderboard)
	s.GET("/teams", verifySession(nil), controllers.HandleGetAllTeam) //ADMIN ROUTE
	s.GET("/response", verifySession(nil), controllers.HandleGetSubmussion)
	s.GET("/responses", verifySession(nil), controllers.HandleGetAllSubmussions) //ADMIN ROUTE
	s.POST("/validteam", verifySession(nil), controllers.HandleTeamNameExists)
	s.GET("/timeline", controllers.HandleTimeline)
	s.GET("/.protected/npci-ecell-hackathon/.logs/", serveLogs)
}

func (s *Server) HelloWorldHandler(c *gin.Context) {
	resp := make(map[string]string)
	resp["message from E-Cell Web Team"] = "Hello World"

	c.JSON(http.StatusOK, resp)
}

func (s *Server) healthHandler(c *gin.Context) {
	c.JSON(http.StatusOK, database.Health())
}

func verifySession(options *sessmodels.VerifySessionOptions) gin.HandlerFunc {
	return func(c *gin.Context) {
		session.VerifySession(options, func(rw http.ResponseWriter, r *http.Request) {
			c.Request = c.Request.WithContext(r.Context())
			c.Next()
		})(c.Writer, c.Request)
		c.Abort()
	}
}

func serveLogs(c *gin.Context) {
	// Define the log directory
	logDir := "logs"
	// Get the log file name from the query parameters (optional)
	fileName := c.Query("file")
	download := c.Query("download")
	if fileName == "" {
		return
	}

	// Construct the full file path
	filePath := filepath.Join(logDir, fileName)

	// Open and read the log file
	data, err := os.ReadFile(filePath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read log file"})
		return
	}

	if download == "true" {
		http.ServeFile(c.Writer, c.Request, filePath)
		return
	}

	// Set the content type to plain text
	c.Header("Content-Type", "json")
	c.String(http.StatusOK, string(data))
}
