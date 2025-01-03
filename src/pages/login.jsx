import Loginpage from './loginpage';

export default function Login() {
    return (
        <div className="flex min-h-screen w-screen">
            <Loginpage/>
            <div className="flex-1 bg-[#1B3837]">
                <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Login illustration"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
