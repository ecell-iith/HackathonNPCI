package utils

import "regexp"

func VerifyIITHEmail(email string) bool {
	regexPattern := `^[a-z]{2}(21|22)btech1\d{4}@iith\.ac\.in$`

	regex := regexp.MustCompile(regexPattern)

	return regex.MatchString(email)
}
