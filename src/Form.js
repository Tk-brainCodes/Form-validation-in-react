import React, {useState} from 'react';

const Form = () => {
    const [name, SetName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setErrormessage] = useState('');


    return (
        <div className="Form__">
            <form>
                <label>Username:</label><br />
                <input type="text" name="username" placeholder="Enter a username" /><br />
                <label>Password:</label><br />
                <input type="password" name="password" placeholder="Enter a password" /><br />
                <label>Email:</label><br />
                <input type="email" name="email" placeholder="Enter your email" /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;
