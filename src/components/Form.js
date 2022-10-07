import {useState}  from 'react'

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
        <input
            type='email'
            value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type='password'
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
        />
        <button
            onClick={() => handleClick(email, password)}
        >
            {title}
        </button>
    </div>
  )
}

export default Form