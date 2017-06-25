package client

import (
	"encoding/json"
	"github.com/gorilla/websocket"
	"my/myChatServer/src/manager"
)

type Client struct {
	id string
	socket *websocket.Conn
	send   chan []byte
	manager manager.Manager

}
//var manager = Manager{
//	broadcast:  make(chan []byte),
//	register:   make(chan *Client),
//	unregister: make(chan *Client),
//	clients:    make(map[*Client]bool),
//}

func (c *Client) read() {
	defer func() {
		c.manager.unregister <- c
		c.socket.Close()
	}()

	for {
		_, message, err := c.socket.ReadMessage()
		if err != nil {
			c.manager.unregister <- c
			c.socket.Close()
			break
		}
		jsonMessage, _ := json.Marshal(&Message{Sender: c.id, Content: string(message)})
		c.manager.broadcast <- jsonMessage
	}
}
func (c *Client) write() {
	defer func() {
		c.socket.Close()
	}()

	for {
		select {
		case message, ok := <-c.send:
			if !ok {
				c.socket.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			c.socket.WriteMessage(websocket.TextMessage, message)
		}
	}
}