import './login_register.css'
import { useNavigate } from 'react-router-dom'

function LoginRegister() {
    const navigate = useNavigate()

    function Login(obj) {
        if (obj.success) {
            alert('恭喜註冊成功')
            navigate('/company/home', { replace: true })
        } else {
            alert('請填寫正確資料')
        }
    }

    const checkForm = async (event) => {
        event.preventDefault()
        const data = {
            company_email: document.form1.company_email.value,
            company_password: document.form1.company_password.value,
        }

        const r = await fetch('http://localhost:3600/company/register', {
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
            <div className="mybody">
                <div
                    className="modal modal-signin position-static d-block  py-2  "
                    tabIndex="-1"
                    role="dialog"
                    id="modalSignin"
                >
                    <div className="modal-dialog " role="document">
                        <div className="modal-content shadow bg-light bg-opacity-50 ">
                            <div className="btn-group ">
                                <button
                                    className="btn btn ytbtncolor2"
                                    type="button"
                                    onClick={() => {
                                        navigate('/company/login', {
                                            replace: true,
                                        })
                                    }}
                                >
                                    廠商登入
                                </button>
                                <button className="btn btn " type="button">
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
                                                name="from1"
                                                method="post"
                                                onSubmit={checkForm}
                                            >
                                                廠商名稱：
                                            </label>
                                            <input
                                                type=""
                                                className="form-control bg-light bg-opacity-50"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail2"
                                                className="form-label"
                                            >
                                                負責人：
                                            </label>
                                            <input
                                                type=""
                                                className="form-control bg-light bg-opacity-50"
                                                id="exampleInputEmail2"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail3"
                                                className="form-label"
                                            >
                                                身分證字號：
                                            </label>
                                            <input
                                                type=""
                                                className="form-control bg-light bg-opacity-50"
                                                id="exampleInputEmail3"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail4"
                                                className="form-label"
                                            >
                                                手機號碼：
                                            </label>
                                            <input
                                                type=""
                                                className="form-control bg-light bg-opacity-50"
                                                id="exampleInputEmail4"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail5"
                                                className="form-label"
                                            >
                                                Email address：
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control bg-light bg-opacity-50"
                                                id="exampleInputEmail5"
                                                aria-describedby="emailHelp"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputPassword6"
                                                className="form-label "
                                            >
                                                Password：
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control bg-light bg-opacity-50"
                                                id="exampleInputPassword6"
                                            />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button
                                                className="btn btn btncolor btn-block"
                                                type="submit"
                                            >
                                                送出
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

export default LoginRegister