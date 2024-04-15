import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
        <h1>Login</h1>

        <div>
            <Link to={`/valtio-example`}>valtio</Link>
            <br />
            <Link to={`/redux-example`}>redux</Link>
        </div>
    </>
  )
}

export default Login