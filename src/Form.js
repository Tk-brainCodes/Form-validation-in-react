import React from 'react';

const Form = () => {
    return (
        <div className="Form__">
            <form>
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter a username" />
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter a password" />
                <input type="email" name="email" placeholder="Enter your email" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;
