import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatProvider from "../Components/ChatBody";
import MessageInput from "../Components/MessageInput";
import SignOut from "../Components/SignOut";

type ChatPageProps = {
    socket: any;
}

const ChatPage: React.FC<ChatPageProps> = ({ socket }) => {

    return(
        <Container>
            <Row>
                <Col className="pt-4">
                <SignOut socket={socket} />
                </Col>
            </Row>
        <Container>
            <ChatProvider socket={socket} />
        </Container>
            <MessageInput socket={socket} />
        </Container>
    );
};

export default ChatPage;