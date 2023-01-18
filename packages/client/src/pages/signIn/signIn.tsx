import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../../components/button/button';
import { FormField } from '../../components/formField/formField';

import { useForm, Validations } from '../../hooks/useForm';
import { getValidations } from '../../features/validation';

import styles from './signIn.module.css';
import baseStyles from '../../app/app.module.css';


type FormType = {
    displayName: string,
    password: string
}

export const SignIn = () => {
    const [validations, setValidations] = useState<Validations<FormType>>();
    
    useEffect(() => {
        setValidations(getValidations([
          'displayName',
          'password'
        ]));
    }, []);
  
    const { values, errors, register, watch, isValid } = useForm<FormType>({validations: validations });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(name);
    }

    return (
    <>
        <form className={styles.signIn} onSubmit={handleSubmit}>
            <div className={styles.signInHeader}>
                Login
            </div>

            <div className={styles.signInContent}>
                <FormField label='Name' name="name" type="text" {...register('displayName')}></FormField>
                <FormField label='Password' name="password" type="password" {...register('password')}></FormField>
            </div>

            <div className={styles.signInAction}>
            <div className={styles.actionButton}>
                    <Button type='submit'>Login</Button>
                </div>

                <div className={styles.actionButton}>
                    <Link className={baseStyles.linkButton} to='/'>Back</Link>
                </div>
            </div>
        </form>
    </>
    )
}
