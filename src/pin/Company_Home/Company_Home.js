import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CompanyHome() {
    const [companyHome, setCompanyHome] = useState([
        {
            farm_type: '',
            farm_name: '',
            farm_tax_id: '',
            company_name: '',
            company_id_number: '',
            company_phone: '',
            farm_tel: '',
            farm_fax: '',
            farm_address: '',
            company_email: '',
            company_password: '',
            creat_at: '',
            company_id: '',
        },
    ])

    const loginUser = JSON.parse(localStorage.getItem('comAuth'))

    const getCompanyHome = async () => {
        const response = await axios.get('http://localhost:3600/company/home', {
            headers: { loginUser: loginUser.company_id },
        })
        setCompanyHome(response.data)
    }

    useEffect(() => {
        getCompanyHome()
    }, [])

    const sendData = (event) => {
        event.preventDefault()
        const data = {
            farm_type: document.form1.farm_type.value,
            farm_name: document.form1.farm_name.value,
            farm_tax_id: document.form1.farm_tax_id.value,
            company_name: document.form1.company_name.value,
            company_id_number: document.form1.company_id_number.value,
            company_phone: document.form1.company_phone.value,
            farm_tel: document.form1.farm_tel.value,
            farm_fax: document.form1.farm_fax.value,
            farm_address: document.form1.farm_address.value,
            company_email: document.form1.company_email.value,
            company_password: document.form1.company_password.value,
            company_id: document.form1.company_id.value,
        }

        fetch('http://localhost:3600/company/home', {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((r) => r.json())
            .then((obj) => {
                console.log(obj)
                if (obj.success) {
                    alert('更改成功')
                }
            })
    }

    // const firm_info = JSON.parse(localStorage.getItem('companyAuth'))

    // const [category, setCategory] = useState(firm_info.farm_type)
    // const [farmName, setFarmName] = useState(firm_info.farm_name)
    // const [bossName, setBossName] = useState(firm_info.company_name)
    // const [farmTax, setFarmTax] = useState(firm_info.farm_tax_id)
    // const [bossID, setBossID] = useState(firm_info.company_id_number)
    // const [companyTel, setCompanyTel] = useState(firm_info.farm_tel)
    // const [farmFax, setFarmFax] = useState(firm_info.farm_fax)
    // const [bossMobile, setBossMobile] = useState(firm_info.company_phone)
    // const [address, setAddress] = useState(firm_info.farm_address)
    // const [companyEmail, setCompanyEmail] = useState(firm_info.company_email)
    // const [companyPassword, setCompanyPassword] = useState(
    //     firm_info.company_password
    // )
    return (
        <>
            {console.log(companyHome)}
            <div className="container pt-3 ">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            {/* <span className="text-primary">Your cart</span> */}
                            {/* <span className="badge bg-primary rounded-pill">3</span> */}
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">註冊日期</h6>
                                </div>
                                <span className="text-muted"></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">上架商品總數</h6>
                                </div>
                                <span className="text-muted">24件</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">上架活動總數</h6>
                                </div>
                                <span className="text-muted">5</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">廠商基本資料</h4>
                        <form
                            className="needs-validation"
                            name="form1"
                            onSubmit={sendData}
                            noValidate
                        >
                            <input
                                type="hidden"
                                name="company_id"
                                defaultValue={companyHome[0].company_id}
                            />
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="" className="form-label">
                                        類別：
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_type"
                                        name="farm_type"
                                        required
                                        defaultValue={companyHome[0].farm_type}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label
                                        htmlFor="farm_name"
                                        className="form-label"
                                    >
                                        公司名稱：
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_name"
                                        name="farm_name"
                                        placeholder=""
                                        required
                                        defaultValue={companyHome[0].farm_name}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label
                                        htmlFor="company_name"
                                        className="form-label"
                                    >
                                        負責人名稱：
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company_name"
                                        name="company_name"
                                        disabled
                                        placeholder=""
                                        required
                                        defaultValue={
                                            companyHome[0].company_name
                                        }
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="" className="form-label">
                                        統一編號
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_tax_id"
                                        name="farm_tax_id"
                                        disabled
                                        defaultValue={
                                            companyHome[0].farm_tax_id
                                        }
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="" className="form-label">
                                        負責人身分證字號：
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company_id_number"
                                        name="company_id_number"
                                        disabled
                                        defaultValue={
                                            companyHome[0].company_id_number
                                        }
                                    />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label
                                        htmlFor="farm_tel"
                                        className="form-label"
                                    >
                                        公司電話：
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_tel"
                                        name="farm_tel"
                                        defaultValue={companyHome[0].farm_tel}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label
                                        htmlFor="company_phone"
                                        className="form-label"
                                    >
                                        手機號碼：
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company_phone"
                                        name="company_phone"
                                        pattern="09\d{8}"
                                        defaultValue={
                                            companyHome[0].company_phone
                                        }
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label
                                        htmlFor="farm_fax"
                                        className="form-label"
                                    >
                                        傳真號碼：
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_fax"
                                        name="farm_fax"
                                        defaultValue={companyHome[0].farm_fax}
                                    />
                                </div>
                                <div className="col-12">
                                    <label
                                        htmlFor="address"
                                        className="form-label"
                                    >
                                        公司地址：
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_address"
                                        name="farm_address"
                                        defaultValue={
                                            companyHome[0].farm_address
                                        }
                                    />
                                </div>
                                <hr className="my-4" />
                                <h4 className="mb-3">使用者帳號密碼</h4>
                                <div className="col-6">
                                    <label
                                        htmlFor="company_email"
                                        className="form-label"
                                    >
                                        Email
                                        <span className="text-muted">
                                            (帳號)
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="company_email"
                                        name="company_email"
                                        placeholder="abc@gmail.com"
                                        defaultValue={
                                            companyHome[0].company_email
                                        }
                                    />
                                </div>
                                <div className="col-6">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                        <span className="text-muted">
                                            (密碼)
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="company_password"
                                        placeholder=""
                                        defaultValue={
                                            companyHome[0].company_password
                                        }
                                    />
                                </div>
                                <hr className="my-4" />
                                <button
                                    className="w-25  btn btn-primary ustify-content-md-end"
                                    type="submit"
                                >
                                    修改資料
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyHome
