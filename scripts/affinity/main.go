package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

// this script parses app and informs on home page the number of certain stats
func main() {
	err := run()
	if err != nil {
		fmt.Println("Failed to run:", err)
		os.Exit(1)
	}
}

func run() error {
	path := "../app/sql/custom_npc.sql"
	data, err := os.ReadFile(path)
	if err != nil {
		return err
	}

	latestCustomItemID := 0
	latestCustomNPCNamedID := 0
	lines := strings.Split(string(data), "\n")
	for lineNumber, line := range lines {
		if strings.Contains(line, "SET @NewRareItemID = ") {
			endIndex := strings.Index(line, ";")

			chunk := line[21:endIndex]
			latestCustomItemID, err = strconv.Atoi(chunk)
			if err != nil {
				return fmt.Errorf("convert rareitem line %d: %w", lineNumber, err)
			}
		}
		if strings.Contains(line, "SET @NewNpcID = ") {
			endIndex := strings.Index(line, ";")

			chunk := line[16:endIndex]
			latestCustomNPCNamedID, err = strconv.Atoi(chunk)
			if err != nil {
				return fmt.Errorf("convert newnpc line %d: %w", lineNumber, err)
			}
		}
	}

	if latestCustomItemID > 0 {
		latestCustomItemID -= 150000
	}
	if latestCustomNPCNamedID > 0 {
		latestCustomNPCNamedID -= 800000
	}

	data, err = os.ReadFile("content/_index.en.md")
	if err != nil {
		return err
	}

	out := ""
	lines = strings.Split(string(data), "\n")
	for _, line := range lines {
		if strings.Contains(line, "- Explore and") {
			fmt.Println("found", line)
			line = fmt.Sprintf("- Explore and discover new treasures in content you knew before. Adds over %d custom NPC nameds, as well as more than %d custom items", latestCustomNPCNamedID, latestCustomItemID)
		}
		out = out + line + "\n"
	}
	out = strings.TrimSpace(out)

	err = os.WriteFile("content/_index.en.md", []byte(out), 0644)
	if err != nil {
		return err
	}

	return nil
}
