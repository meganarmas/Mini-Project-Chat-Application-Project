import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

type ChatProviderProps = {
    socket: any;
};

type Message = {
    text: string;
    userId: string;
}

const ChatProvider: React.FC<ChatProviderProps> = ({ socket }) => {
    const [messages, setMessages] = useState([] as any);
    const userID = sessionStorage.getItem("username");

    useEffect(() => {
        socket.on("message", (message: Message) => {
            setMessages([...messages, message]);
        });
    }, [socket, messages, userID]);

    return (
        <Container
        style={{
            marginTop: "40px", 
            background: "red",
            padding: "25px",
            borderRadius: "10px",
        }}
        >
            {messages.map((message: Message, index: any) => (
                <Card key={index} className="mb-3">
                    <Card.Body>
                        <Card.Text style={{color: message.userId === userID ? 'pink' : 'green', float: messages.userId === userID ? 'right' : 'left'}}>{message.text}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default ChatProvider;