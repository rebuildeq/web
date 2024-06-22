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

	latestCustomAugID := 0
	data, err = os.ReadFile("../app/sql/item_aug.sql")
	if err != nil {
		return err
	}
	lines = strings.Split(string(data), "\n")
	for lineNumber, line := range lines {
		if strings.Contains(line, "SET id=") {
			chunk := line[strings.Index(line, "SET id=")+7:]
			chunk = chunk[0:strings.Index(chunk, ",")]

			latestCustomAugID, err = strconv.Atoi(chunk)
			if err != nil {
				return fmt.Errorf("convert latestCustomAugID line %d: %w", lineNumber, err)
			}
		}
	}

	latestCustomCircleID := 0
	data, err = os.ReadFile("../app/sql/item_circle.sql")
	if err != nil {
		return err
	}
	lines = strings.Split(string(data), "\n")
	for lineNumber, line := range lines {
		if strings.Contains(line, "SET id=") {
			chunk := line[strings.Index(line, "SET id=")+7:]
			chunk = chunk[0:strings.Index(chunk, ",")]

			latestCustomCircleID, err = strconv.Atoi(chunk)
			if err != nil {
				return fmt.Errorf("convert latestCustomCircleID line %d: %w", lineNumber, err)
			}
		}
	}

	if latestCustomCircleID > 0 {
		latestCustomCircleID -= 149000
		fmt.Println("latestCustomCircleID", latestCustomCircleID)
	}

	if latestCustomAugID > 0 {
		latestCustomAugID -= 148000
		fmt.Println("latestCustomAugID", latestCustomAugID)
	}

	if latestCustomItemID > 0 {
		latestCustomItemID -= 150000
		fmt.Println("latestCustomItemID", latestCustomItemID)
	}
	if latestCustomNPCNamedID > 0 {
		latestCustomNPCNamedID -= 800000
		fmt.Println("latestCustomNPCNamedID", latestCustomNPCNamedID)
	}

	totalItem := latestCustomItemID + latestCustomAugID + latestCustomCircleID
	fmt.Println("totalItem", totalItem)

	data, err = os.ReadFile("content/_index.en.md")
	if err != nil {
		return err
	}

	out := ""
	lines = strings.Split(string(data), "\n")
	for _, line := range lines {
		if strings.Contains(line, "- Explore and") {
			fmt.Println("Changing from", line)
			line = fmt.Sprintf("- Explore and discover new treasures in content you knew before. Adds over %d custom NPC nameds, as well as more than %d custom items", latestCustomNPCNamedID, totalItem)
			fmt.Println("Changing to", line)
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
