package main

import (
	"bytes"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"regexp"
	"strings"
	"sync"
)

const (
	sass_cmd     = `yarn --silent Sass --load-path=node_modules --no-source-map --style=compressed %[1]s %[2]s`
	prettier_cmd = `yarn prettier --write %[1]s %[2]s`
)

// Panics on non-nil errors.
func check(desc string, err error) {
	if err == nil {
		// No-op
		return
	}
	errf := fmt.Errorf("%s: %s", desc, err)
	panic(errf)
}

// Ex: microsoft.word -> microsoft
func basename(pathstr string) string {
	base := path.Base(pathstr)
	return base[:len(base)-len(path.Ext(base))]
}

func glob(pathstr string, pattern *regexp.Regexp) ([]string, error) {
	matches, err := filepath.Glob(path.Join(path.Clean(pathstr+""), "*"))
	if err != nil {
		return nil, err
	}
	submatches := []string{}
	for _, m := range matches {
		if !pattern.MatchString(m) || strings.Contains(m, "TODO") {
			// No-op
			continue
		}
		submatches = append(submatches, m)
	}
	return submatches, nil
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

func Sass(inFile, outFile string) (inBytes int64, outBytes int64, err error) {
	inInfo, err := os.Stat(inFile)
	if err != nil {
		return 0, 0, err
	}
	inBytes = inInfo.Size()
	sass_stdout, sass_stderr, _ := execCmd(fmt.Sprintf(sass_cmd, inFile, outFile))
	if sass_stderr != "" {
		err := errors.New(sass_stderr)
		return 0, 0, err
	}
	fmt.Print(sass_stdout)
	prettier_stdout, prettier_stderr, _ := execCmd(fmt.Sprintf(prettier_cmd, inFile, outFile))
	if prettier_stderr != "" {
		err := errors.New(prettier_stderr)
		return 0, 0, err
	}
	fmt.Print(prettier_stdout)
	outInfo, err := os.Stat(outFile)
	if err != nil {
		return 0, 0, err
	}
	outBytes = outInfo.Size()
	return inBytes, outBytes, nil
}

func main() {
	if len(os.Args) < 2 {
		panic("no args; try go run ... src/stylesheets")
	}

	matches, err := glob(os.Args[1], regexp.MustCompile(`\.s?css$`))
	if err == nil && len(matches) == 0 {
		err = errors.New("no matches")
	}
	check("glob", err)
	wg := &sync.WaitGroup{}
	for _, m := range matches {
		wg.Add(1)
		go func(m string) {
			defer wg.Done()
			inFile := m
			outFile := "build/stylesheets/" + basename(m) + ".css"
			inBytes, outBytes, err := Sass(inFile, outFile)
			check("Sass", err)
			fmt.Printf("✅ %s (%dkB) -> %s (%dkB)\n", inFile, inBytes/1e3, outFile, outBytes/1e3)
		}(m)
	}
	wg.Wait()
}
