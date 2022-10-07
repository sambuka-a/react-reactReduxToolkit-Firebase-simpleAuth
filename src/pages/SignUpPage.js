import { Link } from 'react-router-dom'
import Signup from '../components/Signup'

const SignUpPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <Signup />
      <p>
        Have an account? <Link to='/login'>Sign in</Link>
      </p>
    </div>
  )
}

export default SignUpPage