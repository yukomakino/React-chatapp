import React from "react";

const SignUp = () => {
    return (
        <>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email" 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password" 
                    />
                </div>
                <button type="subumit">Sign Up</button>
            </form>
        </>
    );
};

export default SignUp;