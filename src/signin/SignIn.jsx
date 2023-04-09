import './SignIn.css'
const SignIn = () => {

    const submit = () =>{
        alert("successfully signed in")
    }
   
  return (
    <div className='hero'>
        <div className='form'>
            <h1 style={{margin:'3px'}}>SignIn Please</h1>
            <input className='inputbox' type="text" name="email"  id="" placeholder='Email Address'/>
            <input className='inputbox' type="password" name="password"  id="" placeholder='Password' />
            <button onClick={submit}className='btn sign'>SignIn</button>
            <p>OR</p>
            <button onClick={submit} className="btn foogle">Google</button>
            <button onClick={submit} className="btn github">Github</button>
        </div>
    </div>
  )
}

export default SignIn