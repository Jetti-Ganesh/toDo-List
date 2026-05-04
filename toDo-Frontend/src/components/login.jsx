import { useFormik } from "formik";
import "./login.css";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../services/loginApi";

export default function Login() {
    const [loginFn] = useLoginMutation();
    function abc(values)
    {
         loginFn(values).then((res)=>
                {
                    console.log(res);
                });
    }
    let loginForm = useFormik(
        {
            initialValues:
            {
                username: "",
                password: ""
            },
            onSubmit: (values) => {
               abc(values);
            }
        }
    );

    return (
        <>
            <div className="login-page">
                <div><h3>Login page</h3></div>
                <form onSubmit={loginForm.handleSubmit}>

                    <input type="text" id="name" placeholder="Enter Your Name.." {...loginForm.getFieldProps("username")}></input>

                    <input type="password" id="pass" placeholder="Enter Password" {...loginForm.getFieldProps("password")}></input>

                    <button>Login</button>
                </form>
                <Link to="/register" id="route">New To Here!!Click Me..</Link>
            </div>
        </>
    );
}