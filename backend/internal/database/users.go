package database

import "fmt"

type User struct {
	Id      int    `json:"id"`
	Name    string `json:"name"`
	Email   string `json:"email_id"`
	TeamId  int    `json:"team_id"`
	IsAdmin bool   `json:"isAdmin"`
}

func GetUserByEmail(email string) (User, error) {
	var data User
	tx, err := db.Begin()
	if err != nil {
		return data, err
	}

	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
			panic(r)
		}
	}()
	query := `SELECT id, name, email_id, team_id, isAdmin FROM users WHERE email_id = $1`
	err = tx.QueryRow(query, email).Scan(&data.Id, &data.Name, &data.Email, &data.TeamId, &data.IsAdmin)
	if err != nil {
		tx.Rollback()
		return data, fmt.Errorf("could not get user: %v", err)
	}
	if err = tx.Commit(); err != nil {
		return data, fmt.Errorf("could not commit transaction: %v", err)
	}

	return data, nil
}

func UserExists(email string) (bool, bool) {
	tx, err := db.Begin()
	if err != nil {
		return false, false
	}

	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
			panic(r)
		} else if err != nil {
			tx.Rollback()
		} else {
			tx.Commit()
		}
	}()

	query := `SELECT EXISTS (SELECT 1 FROM users WHERE email_id = $1 ), isAdmin FROM users WHERE email_id = $1`
	var exists bool
	var isAdmin bool
	err = tx.QueryRow(query, email).Scan(&exists, &isAdmin)
	if err != nil {
		return false, false
	}

	return exists, isAdmin
}
