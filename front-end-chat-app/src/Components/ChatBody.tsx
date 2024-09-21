import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

type ChatProviderProps = {
    socket: any;
};

type Message = {
    text: string;
    userId: string;
    timestamp: string;
    id: string;
}

const ChatProvider: React.FC<ChatProviderProps> = ({ socket }) => {
    const [messages, setMessages] = useState([] as Message[]);
    const userID = sessionStorage.getItem("username");

    useEffect(() => {
        const handleMessage = (message: Message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.on("message", handleMessage);

        return ()=> {
            socket.off("message", handleMessage);
        };
    }, [socket]);

    const handleDelete = (id: string) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
    };

    return (
        <Container
        style={{
            marginTop: "40px", 
            background: "lightgreen",
            padding: "20px",
            borderRadius: "10px",
        }}
        >
            {messages.map((message, index) => (
                <Card key={index} className="mb-2">
                    <Card.Body>
                        <Card.Text style={{color: message.userId === userID ? 'blue' : 'green', float: message.userId === userID ? 'left' : 'right'}}>
                        <strong>{message.userId}: </strong> {message.text}
                        <br />
                       <small></small>
                        </Card.Text>
                        <Button size="sm" onClick={() => handleDelete(message.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default ChatProvider;