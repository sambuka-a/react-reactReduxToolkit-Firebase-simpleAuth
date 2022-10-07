import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from './Form'
import {setUser} from '../store/slices/userSlice'

const Signup = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const handleSignUp = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
              dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
              }));
              navigate('/')
            })
            .catch(console.error)
    }

  return (
    <Form
        title='register'
        handleClick={handleSignUp}
    />
  )
}

export default Signup