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

    return <p>Hi login</p>
}

export default Login;