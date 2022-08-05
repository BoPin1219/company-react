import React, { useState } from 'react'

function CompanyHome() {
    const firm_info = JSON.parse(localStorage.getItem('companyAuth'))

    const [category, setCategory] = useState(firm_info.farm_type)
    const [farmName, setFarmName] = useState(firm_info.farm_name)
    const [bossName, setBossName] = useState(firm_info.company_name)
    const [farmTax, setFarmTax] = useState(firm_info.farm_tax_id)
    const [bossID, setBossID] = useState(firm_info.company_id_number)
    const [companyTel, setCompanyTel] = useState(firm_info.farm_tel)
    const [bossMobile, setBossMobile] = useState(firm_info.company_phone)
    const [address, setAddress] = useState(firm_info.farm_address)
    const [companyEmail, setCompanyEmail] = useState(firm_info.company_email)
    const [companyPassword, setCompanyPassword] = useState(
        firm_info.company_password
    )
    return (
        <div className="container pt-3 ">
            <div className="row g-5">
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">廠商基本資料</h4>
                    <form className="needs-validation">
                        <div className="row g-3">
                            <div className="col-lg-12">
                                <label htmlFor="" className="form-label">
                                    類別：
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    defaultValue={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label
                                    htmlFor="firstName"
                                    className="form-label"
                                >
                                    公司名稱：
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder=""
                                    defaultValue={farmName}
                                    onChange={(e) => {
                                        setFarmName(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label
                                    htmlFor="lastName"
                                    className="form-label"
                                >
                                    負責人名稱：
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder=""
                                    defaultValue={bossName}
                                    onChange={(e) => {
                                        setBossName(e.target.value)
                                    }}
                                />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="" className="form-label">
                                    統一編號
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    defaultValue={farmTax}
                                    onChange={(e) => {
                                        setFarmTax(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="" className="form-label">
                                    負責人身分證字號：
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    defaultValue={bossID}
                                    onChange={(e) => {
                                        setBossID(e.target.value)
                                    }}
                                />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="" className="form-label">
                                    公司電話：
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    defaultValue={companyTel}
                                    onChange={(e) => {
                                        setCompanyTel(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="" className="form-label">
                                    手機號碼：
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id=""
                                    defaultValue={bossMobile}
                                    onChange={(e) => {
                                        setBossMobile(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="address" className="form-label">
                                    公司地址：
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    disabled
                                    defaultValue={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                />
                            </div>
                            <hr className="my-4" />
                            <h4 className="mb-3">使用者帳號密碼</h4>
                            <div className="col-6">
                                <label htmlFor="email" className="form-label">
                                    Email{' '}
                                    <span className="text-muted">(帳號)</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="abc@gmail.com"
                                    defaultValue={companyEmail}
                                    onChange={(e) => {
                                        setCompanyEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-6">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                    <span className="text-muted">(密碼)</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    placeholder=""
                                    defaultValue={companyPassword}
                                    onChange={(e) => {
                                        setCompanyPassword(e.target.value)
                                    }}
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
                            <span className="text-muted">
                                {firm_info.creat_at}
                            </span>
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
            </div>
        </div>
    )
}
export default CompanyHome
