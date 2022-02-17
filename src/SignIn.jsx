import React from 'react';

import FormInput from './components/FormInput.jsx'
import CustomButton from './components/CustomButton'
import './scss/styles.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Sign In Form</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='E-Mail' />

                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Senha' />

                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>

            </div>
        );
    }
}

export default SignIn;