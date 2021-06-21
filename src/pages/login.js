import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FireBaseContext from '../context/firebase';


const Login = () => {
    const history = useHistory()
    const { firebase } = useContext(FireBaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, [])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="Iphone with Instagram App"/>
            </div>
            <div className="flex flex-col w-2/5">
                <p>fORM</p>
            </div>
        </div>
    )
}

export default Login;