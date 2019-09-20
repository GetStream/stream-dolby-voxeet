import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, Formik } from 'formik';
import Button from 'components/Button';
import Input from 'components/Input';

import validationSchema from './validationSchema';

const Root = styled.form`
    margin-top: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & button {
        margin-top: 16px;
    }
`;

class LoginForm extends Component {
    get initialValues() {
        return {
            username: '',
        };
    }

    renderForm = (form) => {
        const { conferenceAlias } = this.props;
        return (
            <Root onSubmit={form.handleSubmit}>
                <Field name='username' component={Input} placeholder='Username' />
                <Button label={conferenceAlias ? 'Join Call' : 'Start a Call'} type='submit' />
            </Root>
        );
    };

    render() {
        const { onSubmit } = this.props;
        return (
            <Formik
                children={this.renderForm}
                initialValues={this.initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            />
        );
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
