import './company_login.css'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import AuthContext from '../component/authContext'

import React from 'react'

function CompanyLogin() {
    const { setAuth } = useContext(AuthContext)
    const navigate = useNavigate()

    function Login(obj) {
        if (obj.success) {
            localStorage.setItem('auth', JSON.stringify(obj.data))
            setAuth({ ...obj.data, authorized: true })
            alert('歡迎登入')
            navigate('/member/data', { replace: true })
        } else {
            alert('帳號/密碼錯誤')
        }
    }

    const checkForm = async (event) => {
        event.preventDefault()
        const data = {
            email: document.form1.email.value,
            password: document.form1.password.value,
        }

        const r = await fetch('http://localhost:3600/member/login', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const obj = await r.json()
        console.log(obj)
        Login(obj)
    }
    return (
        <>
            <div className="companybodybg">
                <div
                    className="modal modal-signin position-static d-block  py-2  "
                    tabndex="-1"
                    role="dialog"
                    id="modalSignin"
                >
                    <div className="modal-dialog " role="document">
                        <div className="modal-content shadow bg-light bg-opacity-50 ">
                            <div className="btn-group ">
                                <button
                                    className="btn btn ytbtncolor1"
                                    type="button"
                                >
                                    廠商登入
                                </button>
                                <button
                                    className="btn btn btn-dark ytbtncolor2"
                                    type="button"
                                    onClick={() => {
                                        navigate('/company/register', {
                                            replace: true,
                                        })
                                    }}
                                >
                                    廠商註冊
                                </button>
                            </div>
                            <div className="modal-header p-4 pb-4 border-bottom-0">
                                <div className="modal-body p-5 pt-0">
                                    <form>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail1"
                                                className="form-label"
                                            >
                                                Email address：
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control bg-light bg-opacity-50"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputPassword1"
                                                className="form-label "
                                            >
                                                Password：
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control bg-light bg-opacity-50"
                                                id="exampleInputPassword1"
                                            />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="exampleCheck1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleCheck1"
                                            >
                                                記住帳號
                                            </label>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                登入
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyLogin
