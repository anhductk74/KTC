import { ChevronLeft,EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router';
import styles from './RegisterForm.module.css'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { useState } from 'react'

const schema = yup
  .object({
    email: yup.string().required('Email is required'),
    password: yup.string().when('$submitEmail', {
        is: true,
        then: (schema) => 
            schema
            .required('Password is required')
            .min(5, 'Password must be more than 4 characters')
            .matches(/[A-Za-z]/, 'Password must contain letters')
            .matches(/[0-9]/, 'Password must contain numbers')
            .matches(/^[\x00-\x7F]*$/, 'Password must not contain Vietnamese characters'),
            otherwise: (schema) => schema.notRequired(),
      }),
  })
  .required()


const RegisterForm = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); // quay lại trang trước
      };

      const [submitEmail, setSubmitEmail] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        context: { submitEmail }
      })
      const onSubmit = () => {
        console.log("alo")
            setSubmitEmail(true)
      }
    return (
        <div className={styles.container}>
            <div className={styles.header} onClick={goBack}>
                <ChevronLeft className={styles.icon_header}/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Sign up!</h1>
                <div className={styles.formGroup}>
                    <div className={styles.titleHeader}>
                        <p>Looks like you don't have an account.</p>
                        <p>Let's create a new account for</p>
                        <p><span>anhductk74@gmail.com</span></p>
                    </div>
                    <div className={styles.emailForm}>
                        <input type="email" id="email" placeholder='Email' {...register('email')} />
                    </div>
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    <div className={styles.passwordForm}>
                        <input type="password" id="password" placeholder='Password' {...register('password')} />
                        <EyeOff />
                    </div>
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                    <div className={styles.titleBottom}>
                        <p>By selecting agree and continue below,</p>
                        <p>I agree to the <span>Terms of Service and Privacy Policy</span></p>
                    </div>
                    <button type='submit' className={styles.continueButton}>Continue</button>
                    
                </div>
            </div>
        </div>
    )
}

export default RegisterForm