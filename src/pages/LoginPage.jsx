import React from 'react';
import styled from 'styled-components'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'



const LoginPageStyles = styled.aside `

header{
     text-align:center;
     margin-bottom: 3rem;
 }

max-width: 380px;
margin:6rem auto 0;

h1{
    font-size:2.5rem;
    font-weight: 700;
}

`
    const LoginPage = (props) => {
        return (
            <LoginPageStyles>
                <header><h1>Login Page</h1></header>
                <FormInput type="text" label="email"/>
                <FormInput type="text" label="password"/>
                <Button label="Login" uiStyle="login" />
            </LoginPageStyles>
    );
}

export default LoginPage;

/* 
fu App() {
   const  data = {}
}

fu LoginPage(props) {
    data
}


fu HomePage(props) {
    const data = {}
}
 */


