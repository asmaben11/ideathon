export default function Loginpage(){
    return(
    <>
    <div className="bg-background min-h-screen flex items-center justify-center bg-[#1B3837] w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-4">
            <h1 className="text-primary font-programme text-3xl font-bold text-center mb-2">Welcome Back!</h1>
            <h5 className="text-primary/80 font-programme text-sm text-center mb-6">Enter your credentials to access your account</h5>
            
            <div className="space-y-4 mb-6">
                <div>
                    <label htmlFor="email" className="block text-primary font-programme text-sm mb-1">Email Address</label>
                    <input 
                        type="email" 
                        id="email"
                        className="w-full px-3 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-primary font-programme text-sm mb-1">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        className="w-full px-3 py-2 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary"
                        placeholder="Enter your password"
                    />
                </div>
            </div>

            <div className="flex items-center mb-6">
                <input type="checkbox" id="terms" className="mr-2 accent-secondary" />
                <label htmlFor="terms" className="text-primary/80 text-sm">I agree to the terms and policy</label>
            </div>

            <button className="w-full bg-secondary text-white font-programme py-2 rounded-lg hover:bg-secondary/90 transition-colors mb-6">
                Login
            </button>

            <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 border border-primary/20 py-2 rounded-lg hover:bg-background/50 transition-colors">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    <span className="text-primary font-programme">Sign in with Google</span>
                </button>
                
                <button className="w-full flex items-center justify-center gap-2 border border-primary/20 py-2 rounded-lg hover:bg-background/50 transition-colors">
                    <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
                    <span className="text-primary font-programme">Sign in with Facebook</span>
                </button>
            </div>
        </div>
    </div>
    </>
    )
}
