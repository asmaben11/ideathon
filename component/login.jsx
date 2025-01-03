import Loginpage from './loginpage';
import image from '../src/assets/images/image.png';

export default function Login() {
    return (
        <div className="flex min-h-screen w-full">
            <div className="w-1/2">
                <Loginpage/>
            </div>
            
            <div className="w-1/2 bg-background flex items-center justify-center">
                <img 
                    src={image}
                    alt="image"
                    className="w-full h-screen object-cover object-center"
                />
            </div>
        </div>
    )
}
