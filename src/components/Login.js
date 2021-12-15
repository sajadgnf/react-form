import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import styles from "./SignUp.module.css"
import { validate } from "./validate";
import { notify } from "./toast";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    const changeHandler = event => setData({ ...data, [event.target.name]: event.target.value })

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    useEffect(() => {
        setErrors(validate(data, "login"))
    }, [data, touched])

    const submitHnadler = event => {
        event.preventDefault()

        if (!Object.keys(errors).length) {
            notify("You Loged in successfully", "success")
        } else {
            notify("invalid data", "error")
            setTouched({
                email: true,
                password: true,
            })
        }

    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHnadler}>
                <h1>Log in</h1>
                <div className={styles.field}>
                    <label>Email</label>
                    <input
                        className={errors.email && touched.email ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                    <label>Password</label>
                    <input
                        className={errors.password && touched.password ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.buttons}>
                    <Link to="/signUp">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer theme="colored" />
        </div>
    )
}

export default Login