import { useState } from 'react';

export default function OTPVerify() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = () => {
        const otpString = otp.join('');
        // Here you would typically make an API call to verify the OTP
        console.log('Verifying OTP:', otpString);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-slate-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">Enter Verification Code</h2>
                <p className="text-slate-500 text-center mb-8">
                    We have sent a verification code to your email
                </p>
                
                <div className="flex justify-center gap-3 mb-8">
                    {otp.map((data, index) => {
                        return (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                className="w-14 h-14 border-2 border-slate-200 rounded-lg text-center text-xl font-semibold text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                            />
                        );
                    })}
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-[#1B3837] w-full text-white py-3 rounded-lg font-semibold hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                >
                    Next
                </button>

                <p className="text-sm text-slate-500 text-center mt-4">
                    Didn't receive the code? {" "}
                    <button className="text-blue-500 hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-200 rounded transition-all duration-200">
                        Resend
                    </button>
                </p>
            </div>
        </div>
    );
}
