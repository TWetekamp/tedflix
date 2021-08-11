import Greeting from "../../components/usernameForm/greeting";
import UsernameForm from "../../components/usernameForm/usernameForm";

const Home = () => {
    return (
        <>
            <p>I am the Home Page</p>
            <Greeting />
            <UsernameForm />
        </>
    )     
};

export default Home;