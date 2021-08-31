import { connect } from "react-redux";

const Greeting = ({ username }) => {
    return <p>Hello { username }! Welcome to TEDFLIX!</p>
};

const mapStateToProps = state => ({
    username: state.username
})
export default connect(mapStateToProps)(Greeting);