import './login_register.css'
import { useNavigate } from 'react-router-dom'

function LoginRegister() {
    const navigate = useNavigate()

    function Login(obj) {
        if (obj.success) {
            alert('恭喜註冊成功')
            navigate('/company/companyhome', { replace: true })
        } else {
            alert('請填寫正確資料')
        }
    }

    const checkForm = async (event) => {
        event.preventDefault()
        const data = {
            farm_name: document.form1.farm_name.value,
            company_name: document.form1.company_name.value,
            company_id_number: document.form1.company_id_number.value,
            company_phone: document.form1.company_phone.value,
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
                                    <form
                                        name="form1"
                                        method="post"
                                        onSubmit={checkForm}
                                    >
                                        <div className="mb-3">
                                            <label
                                                htmlFor="farm_name"
                                                className="form-label"
                                            >
                                                廠商名稱：
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-light bg-opacity-50"
                                                id="farm_name"
                                                name="farm_name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="company_name"
                                                className="form-label"
                                            >
                                                負責人：
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-light bg-opacity-50"
                                                id="company_name"
                                                name="company_name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="company_id_number"
                                                className="form-label"
                                            >
                                                身分證字號：
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-light bg-opacity-50"
                                                id="company_id_number"
                                                name="company_id_number"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="company_phone"
                                                className="form-label"
                                            >
                                                手機號碼：
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-light bg-opacity-50"
                                                id="company_phone"
                                                name="company_phone"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="company_email"
                                                className="form-label"
                                            >
                                                Email address：
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control bg-light bg-opacity-50"
                                                id="company_email"
                                                name="company_email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="company_password"
                                                className="form-label "
                                            >
                                                Password：
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control bg-light bg-opacity-50"
                                                id="company_password"
                                                name="company_password"
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
