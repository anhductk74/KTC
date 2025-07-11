import styles from './Login.module.css'
import { useContext } from 'react'
import AuthContext from '../context'
import { useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import loginService from '../Service/Login'
import { useEffect } from 'react'

const schema = yup
    .object({
        username: yup.string().required(),
        password: yup.string().required(),
    })
    .required()


const Login = () => {
    const { user,setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "tungnt@softech.vn",
            password: "123456789"
        }
    })
    const onSubmit = (data: any) => {
        loginService(data).then(() => {
            setUser(JSON.parse(localStorage.getItem('users') ?? ''))
            console.log("dday la user: "+ user)
            navigate('/home')
        })
    }
    useEffect(() => {
        localStorage.removeItem('users')
        localStorage.removeItem('access_token')
    }, [])

    return (
        <div className='flex justify-center items-center h-screen'>   

        <div className={styles.box}>
            <div className={styles.form}>
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputBox}>
                        <input type="text" required={false} placeholder="Username" {...register("username")}  />
                        <span>Username</span>
                        <i></i>
                    </div>
                    {errors.username && <p>{errors.username.message}</p>}
                    <div className={styles.inputBox}>
                        <input type="password" required={false} placeholder="Password" {...register("password")} />
                        <span>Password</span>
                        <i></i>
                    </div>
                    {errors.password && <p>{errors.password.message}</p>}
                    <div className={styles.links}>
                        <a href="#">Forgot Password</a>
                        <a href="#">Sign up</a>
                    </div>

                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
        </div>

    )
}

export default Login