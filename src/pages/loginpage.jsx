export default function Loginpage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1B3837] to-[#2C5654]">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg mx-4 transform transition-all hover:scale-[1.01]">
                <h1 className="text-3xl font-bold text-center mb-2 text-[#1B3837]">Welcome Back!</h1>
                <p className="text-gray-600 text-sm text-center mb-8">Enter your credentials to access your account</p>
                
                <div className="space-y-6 mb-8">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3837]/20 focus:border-[#1B3837] transition-all"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3837]/20 focus:border-[#1B3837] transition-all"
                            placeholder="Enter your password"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                        <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-[#1B3837] focus:ring-[#1B3837]" />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-[#1B3837] hover:underline">Forgot password?</a>
                </div>

                <button className="w-full bg-[#1B3837] text-white font-medium py-3 rounded-lg hover:bg-[#2C5654] transform transition-all active:scale-[0.98] mb-4">
                    Sign In
                </button>

                <div className="text-center mb-8">
                    <span className="text-gray-600">Don't have an account? </span>
                    <a href="/signup" className="text-[#1B3837] hover:underline font-medium">Sign Up</a>
                </div>

                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                        <span className="text-gray-700 font-medium">Continue with Google</span>
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
                        <span className="text-gray-700 font-medium">Continue with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
