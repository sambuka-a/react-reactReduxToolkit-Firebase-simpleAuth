import {useDispatch} from 'react-redux'
import { useAuth } from '../hooks/use-auth' 
import { removeUser } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const {isAuth, email} = useAuth()

  return isAuth ? (
    <div>Wellcome
      <button
          onClick={(() => dispatch(removeUser()))}
        >log out from {email}
      </button>
    </div>
  ) : (
    //<p>dsdsdsad</p>
    navigate('/login')
  )
}

export default HomePage