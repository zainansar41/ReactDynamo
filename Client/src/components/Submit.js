import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../helper'



export default function Submit() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            userID:''
        },
        validate: false,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            let registerPromise = registerUser(values)
            registerPromise.then(function () { navigate('/') })
        }
    })
    return (
        <div>

            <form action="" onSubmit={formik.handleSubmit}>
                <div className="inputfields">
                    <input {...formik.getFieldProps('email')} type="email" placeholder='abc@gmail.com' />
                    <input {...formik.getFieldProps('username')} type="text" placeholder='enter your name' />
                    <input {...formik.getFieldProps('password')} type="text" placeholder='enter the password' />
                    <input {...formik.getFieldProps('userID')} type="text" placeholder='enter the id' />
                    <button type="submit">Register</button>
                </div>
            </form>
        </div >
    )
}
