import {LoginForm} from "./components/login-form";
import {RegisterForm} from "./components/register-form";

export default function AuthPage({searchParams}: { searchParams: { type?: string } }) {
    const type = searchParams.type === "register" ? "register" : "login";

    return (
        <div className="container">
            {type === "register" ? <RegisterForm/> : <LoginForm/>}
        </div>
    );
}
