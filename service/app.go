package main

import (
	"fmt"
	"log"
	"time"

	"github.com/ohayao/mvc"
)

func main() {
	mvc.Router.RegisterAction("get", []string{"/"}, func(c *mvc.HTTPContext) {
		c.Text(200, "It's "+time.Now().Format("2006/01/02 15:04:05"))
	})
	fmt.Printf("Service run [localhost:8090] at %s\n", time.Now().Format("2006/01/02 15:04:05"))
	log.Fatal(mvc.Run(8090))
}
