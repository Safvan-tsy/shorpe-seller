import LoginForm from "../components/ui/Login/LoginForm"

const LoginScreen = () => {
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