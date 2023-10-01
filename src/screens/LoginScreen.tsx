import LoginForm from "../components/ui/Login/LoginForm"
import useDocumentTitle from "../hooks/useDocumentTitle";

const LoginScreen = () => {
  useDocumentTitle('Seller Login|Shorpe!', false);
  const formStyle = {
    display: "flex",
    justifyContent:"center"
  };

  return (
    <div style={formStyle}>
    <LoginForm/>
    </div>
  )
}

export default LoginScreen