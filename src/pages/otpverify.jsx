export default function OTPVerify() {
    return (
        <div className="flex min-h-screen w-screen">
            <div className="flex items-center justify-center bg-gradient-to-br from-[#1B3837] to-[#2C5654]">
                <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg mx-4 transform transition-all hover:scale-[1.01]">
                    <h1 className="text-3xl font-bold text-center mb-2 text-[#1B3837]">Verify Your Email</h1>
                    <p className="text-gray-600 text-sm text-center mb-8">Please enter the verification code sent to your email</p>
                    
                    <div className="space-y-6 mb-8">
                        <div className="flex justify-center gap-2">
                            <input 
                                type="text" 
                                maxLength="1"
                                pattern="[0-9]"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                className="w-14 h-14 text-center text-2xl font-bold border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3837]/20 focus:border-[#1B3837] transition-all"
                                onKeyUp={(e) => {
                                    if (e.target.value && e.target.nextElementSibling) {
                                        e.target.nextElementSibling.focus();
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !e.target.value && e.target.previousElementSibling) {
                                        e.target.previousElementSibling.focus();
                                    }
                                }}
                            />
                            <input 
                                type="text"
                                maxLength="1"
                                pattern="[0-9]"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                className="w-14 h-14 text-center text-2xl font-bold border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3837]/20 focus:border-[#1B3837] transition-all"
                                onKeyUp={(e) => {
                                    if (e.target.value && e.target.nextElementSibling) {
                                        e.target.nextElementSibling.focus();
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !e.target.value && e.target.previousElementSibling) {
                                        e.target.previousElementSibling.focus();
                                    }
                                }}
                            />
                            <input 
                                type="text"
                                maxLength="1"
                                pattern="[0-9]"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                className="w-14 h-14 text-center text-2xl font-bold border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3837]/20 focus:border-[#1B3837] transition-all"
                                onKeyUp={(e) => {
                                    if (e.target.value && e.target.nextElementSibling) {
                                        e.target.nextElementSibling.focus();
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !e.target.value && e.target.previousElementSibling) {
                                        e.target.previousElementSibling.focus();
                                    }
                                }}
                            />
                            <input 
                                type="text"
                                maxLength="1"
                                pattern="[0-9]"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                className="w-14 h-14 text-center text-2xl font-bold border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3837]/20 focus:border-[#1B3837] transition-all"
                                onKeyUp={(e) => {
                                    if (e.target.value && e.target.nextElementSibling) {
                                        e.target.nextElementSibling.focus();
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !e.target.value && e.target.previousElementSibling) {
                                        e.target.previousElementSibling.focus();
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <button className="w-full bg-[#1B3837] text-white font-medium py-3 rounded-lg hover:bg-[#2C5654] transform transition-all active:scale-[0.98] mb-4">
                        Verify Code
                    </button>

                    <div className="text-center">
                        <p className="text-gray-600 text-sm mb-2">Didn't receive the code?</p>
                        <button className="text-[#1B3837] text-sm font-medium hover:underline">
                            Resend Code
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-[#1B3837]">
                <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="OTP Verification illustration"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
