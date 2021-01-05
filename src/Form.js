import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setErrormessage] = useState(null);
    const [passerror, setPassError] = useState(null);

    let x = 'hey';
    console.log(Number.isNaN(x))

    const handleSubmit = () => {
        if(!Password.password  || Password.password.length<6){
          setPassError("password length must be up to 8");
        } else { 
            setPassError(null);
            return false;
        }

        if (name === "") {
            let err = "name cannot be blank";
            setErrormessage(err);
            return true;
        } else {
            setErrormessage(null)
            return false;
        }

    }

    const onChangeFunc = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }
    return (
        <div className="Form__">
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br />

                <input
                    value={name}
                    type="text"
                    onChange={onChangeFunc}
                    name="username"
                    placeholder="Enter a username"
                /><br />

                {error && <strong className="error">{error}</strong>} <br />

                <label>Password:</label><br />

                <input
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Enter a password"
                /><br />

                {passerror && <strong className="error">{passerror}</strong>} <br />

                <label>Email:</label><br />
                <input type="email" name="email" placeholder="Enter your email" /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;
