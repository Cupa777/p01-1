import React from 'react';

const handleSubmit = (e: React.FromEvent) => {


}

const Login = () => {
    return (
        <form onSubmit={handleSubmit}>                                     {/*Формы заполнения логина в виде почты и пароля*/}
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email'/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password'/>
            </div>
        </form>

    )
}
export default Login;
