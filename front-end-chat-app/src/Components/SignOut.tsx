import { Button } from "react-bootstrap";
import { useNavigate, useNavigation } from "react-router-dom";

type SignoutPops = {
    socket: any;
    children?: React.ReactNode;
}

const SignOut: React.FC<SignoutPops> = ({socket, children}) => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        sessionStorage.removeItem('userName')
        socket.emit("signout")
        navigate("/")
    }

    return (
        <Button onClick={handleSignOut}>Log Out<i className="bi bi-box-arrow-in-left"></i></Button>
    );
}

export default SignOut;