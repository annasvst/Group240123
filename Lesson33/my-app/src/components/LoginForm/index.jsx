import { useState } from "react"

export const LoginForm = () => {
  const[user,setUser] = useState({
      email: '',
      password: '',
  });

  function handleSubmit () {
    console.log(user);
  }

  return(
    <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email: </label>
            <input value={user.email} type="email" id="email" name="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
            <label htmlFor="password">Password: </label>
            <input value={user.password} id="password" name="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
            <button type="submit">submit</button>
        </form>
        <p>{user.email}</p>
        <p>{user.password}</p>
    </div>
  );
}