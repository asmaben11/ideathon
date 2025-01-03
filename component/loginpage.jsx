export default function Loginpage(){
    return(
    <>
    <div>
        <h1 >welcome back</h1>
        <h5>Enter your Credentials to access your account</h5>
        <div>
            <label htmlFor="Emaila dress"></label>
        <input type="text" placeholder="enter your email"/>

        <label htmlFor="password"></label>
        <input type="password" placeholder="create a password"/>
        </div>
        <div>
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">I agree to the terms and policy</label>
        </div>
        <button>login</button>
        <div> 
            <img src="" alt="" />
            <h1>sign in with google</h1>
        </div>
        <div>
            <img src="" alt="" />
            <h1>sign in with apple</h1>
        </div>
        <h3>you have an account ? sign in</h3>
            </div>
            <div>
                <img src="image.png" alt="" />
            </div>
        </>
    )
}

