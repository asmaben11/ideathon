export default function SignUp() {
    return (
        <div className="flex min-h-screen w-screen">
            <div className="flex items-center justify-center bg-gradient-to-br from-[#1B3837] to-[#2C5654]">
                <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg mx-4 transform transition-all hover:scale-[1.01]">
                    <h1 className="text-3xl font-bold text-center mb-2 text-[#1B3837]">Create Account</h1>
                    <p className="text-gray-600 text-sm text-center mb-8">Enter your details to create your account</p>
                    
                    <div className="space-y-6 mb-8">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                            <input 
                                type="text" 
                                id="name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3837]/20 focus:border-[#1B3837] transition-all"
                                placeholder="Enter your full name"
                            />
                        </div>

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
                                placeholder="Create a password"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmPassword"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3837]/20 focus:border-[#1B3837] transition-all"
                                placeholder="Confirm your password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center mb-8">
                        <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-300 text-[#1B3837] focus:ring-[#1B3837]" />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">I agree to the Terms and Privacy Policy</label>
                    </div>
                    <a href="/otp"><button className="w-full bg-[#1B3837] text-white font-medium py-3 rounded-lg hover:bg-[#2C5654] transform transition-all active:scale-[0.98] mb-8">
                        Sign Up
                    </button></a>

                    

                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or sign up with</span>
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
            <div className="flex-1 bg-[#1B3837]">
                <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Sign Up illustration"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
