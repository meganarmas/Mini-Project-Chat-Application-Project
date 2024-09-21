import { useState } from "react";
import { useNavigate } from "react-router-dom";

type HomePageProps = {
    socket: any;
}

const HomePage: React.FC<HomePageProps> = ({socket}) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault()
        let userName = e.target.username.value
        sessionStorage.setItem('userName', userName)
        navigate("/chat")
    };

    return (
        <form className="home_container" onSubmit={handleSubmit}>
            <h2 className="header">Sign In To Chat</h2>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            minLength={4}
            name="username"
            id="username"
            className="username_input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <button className="home_cta">SIGN IN</button>
        </form>
    );
 }

 export default HomePage;