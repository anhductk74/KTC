import styles from './LoginForm.module.css'
import { useState } from 'react'
import { Link  } from 'react-router'
import { ChevronLeft,EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

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

const LoginForm = () => {

    const account = [
        {
            email: 'anhductk74@gmail.com',
            password: '123456',
            image: './images/img1.png'
        },
        {
            email: 'abc@gmail.com',
            password: '1234',
            image: './images/img1.png'
        },
        {
            email: 'ducdh.21it@vku.udn.vn',
            password: '123456',
            image: './images/img1.png'
        }
    ]
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
    
    // const [login, setLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        console.log(email)
    }


    const handleBack = () => {
        setSubmitEmail(false)
    }

    const handleVisiblePassword = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header} >
                <ChevronLeft className={styles.icon_header} onClick={handleBack}/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi!</h1>
                <div className={styles.formGroup}>
                    {/* Login email */}
                    <div className={submitEmail ? styles.account : styles.account + ' ' + styles.hidden}>
                        <img src="./images/img1.jpg" alt="" />
                        <div className={styles.account_info}>
                            <p className={styles.account_name}>anhductk74</p>
                            <p>anhductk74@gmail.com</p>
                        </div>
                    </div>
                    {/* Login */}
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_login}>
                        <div className={!submitEmail ? styles.emailForm : styles.emailForm + ' ' + styles.hidden}>
                            <input type="email" id="email" placeholder='Email' {...register("email")} onChange={handleChange}/>
                            <p className={styles.error_message}>{errors.email?.message}</p>

                        </div>
                        <div className={submitEmail ? styles.passwordForm : styles.passwordForm + ' ' + styles.hidden}>
                            <input type={showPassword ? 'text' : 'password'} id="password" placeholder='Password' {...register("password")} onChange={handleChange}/>
                            <EyeOff onClick={handleVisiblePassword}/>
                        </div>
                            <p className={styles.error_message}>{errors.password?.message}</p>
                        {/* submit */}
                        <button type='submit' className={styles.continueButton} >Continue</button>
                    </form>
                    {/* Login social */}
                    <div className={!submitEmail ? styles.login_social : styles.login_social + ' ' + styles.hidden}>
                        <p className='text-center text-white'>or</p>
                        <button type='submit' className={styles.btn_Login_Social}>
                            <img src="./images/fb.png" alt="facebook" className={styles.icon_btn}/>
                            <p>Continue with Facebook</p>
                        </button>
                        <button type='submit' className={styles.btn_Login_Social}>
                            <img src="./images/google.png" alt="google" className={styles.icon_btn}/>
                            <p>Continue with Google</p>
                        </button>
                        <button type='submit' className={styles.btn_Login_Social}>
                            <img src="./images/apple.png" alt="apple" className={styles.icon_btn}/>
                            <p>Continue with Apple</p>
                        </button>
                        <div className={styles.bottom_text}>
                            <p><span className={styles.span_text}>Don't have an account? </span><Link to='/register'>Sign up</Link></p>
                        </div>
                    </div>
                            <div className={styles.bottom_text}><a href="#">Forgot password?</a></div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm