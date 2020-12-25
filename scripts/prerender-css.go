package main

import (
	"bytes"
	"errors"
	"fmt"
	"log"
	"os"
	"os/exec"
	"path"
	"strings"

	"golang.org/x/sync/errgroup"
)

// Ex: ms.word -> ms
func basename(pathstr string) string {
	base := path.Base(pathstr)
	return base[:len(base)-len(path.Ext(base))]
}

func execCmd(cmdStr string) (stdout, stderr string, err error) {
	cmdArgs := strings.Split(cmdStr, " ")
	cmd := exec.Command(cmdArgs[0], cmdArgs[1:]...)
	var stdoutBuf bytes.Buffer
	cmd.Stdout = &stdoutBuf
	var stderBuf bytes.Buffer
	cmd.Stderr = &stderBuf
	return stdoutBuf.String(), stderBuf.String(), cmd.Run()
}

func Sass(inFile, outFile string) (err error) {
	cmdStr := `yarn --silent sass --load-path=node_modules --no-source-map --style=compressed %[1]s %[2]s`
	stdout, stderr, _ := execCmd(fmt.Sprintf(cmdStr, inFile, outFile))
	if stderr != "" {
		err := errors.New(stderr)
		return err
	}
	fmt.Print(stdout)
	return nil
}

func Prettier(inFile, outFile string) error {
	cmdStr := `yarn --silent prettier --write %[1]s %[2]s`
	stdout, stderr, _ := execCmd(fmt.Sprintf(cmdStr, inFile, outFile))
	if stderr != "" {
		err := errors.New(stderr)
		return err
	}
	fmt.Print(stdout)
	return nil
}

// Script for concurrently generating CSS from `.scss` sources.
// This script is written in Go because concurrency is easier to reason about in Go.
//
// Ex: go run scripts/prerender-css.go src/stylesheets/*.scss
func main() {
	if len(os.Args) < 2 {
		log.Fatal("no args; try go run ... src/stylesheets/*")
	}
	cmdArgs := os.Args[1:]
	g := new(errgroup.Group)
	for _, arg := range cmdArgs {
		arg := arg
		g.Go(func() error {
			inFile := arg
			outFile := fmt.Sprintf("build/stylesheets/%s.css", basename(arg))
			err1 := Sass(inFile, outFile)
			if err1 != nil {
				return err1
			}
			err2 := Prettier(inFile, outFile)
			if err2 != nil {
				return err2
			}
			return nil
		})
	}
	err := g.Wait()
	if err != nil {
		log.Fatal(err)
	}
}
