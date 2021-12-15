import React, { useState, useEffect } from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import styles from "./SignUp.module.css"
import { validate } from "./validate"
import { notify } from "./toast"
import { Link } from "react-router-dom"
const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})


    useEffect(() => {
        setErrors(validate(data, "signUp"))
    }, [data, touched])


    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault()
        if (!Object.keys(errors).length) {
            notify("You signed up Successfully", "success")
        } else {
            notify("Invalid Data", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <h1>Sign Up</h1>
                <div className={styles.field}>
                    <label>Name</label>
                    <input
                        className={(errors.name && touched.name ? styles.uncompleted : styles.formInput)}
                        type="text"
                        name="name"
                        value={data.name}
                        onFocus={focusHandler}
                        onChange={changeHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                    <label>Email</label>
                    <input
                        className={(errors.email && touched.email ? styles.uncompleted : styles.formInput)}
                        type="text"
                        name="email"
                        value={data.email}
                        onFocus={focusHandler}
                        onChange={changeHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password ? styles.uncompleted : styles.formInput)}
                        type="text"
                        name="password"
                        value={data.password}
                        onFocus={focusHandler}
                        onChange={changeHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.field}>
                    <label>Confirm Password</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword ? styles.uncompleted : styles.formInput)}
                        type="text"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onFocus={focusHandler}
                        onChange={changeHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.field}>
                    <div className={styles.checkboxContainer}>
                        <label>I accept terms of privacy policy</label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onFocus={focusHandler}
                            onChange={changeHandler} />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.buttons}>
                    <Link to="/logIn">Login</Link>
                    <button type="submit">Sign Up</button>
                </div>
            </form >

            <ToastContainer theme="colored" />
        </div >
    )
}

export default SignUp