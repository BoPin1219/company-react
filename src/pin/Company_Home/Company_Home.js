import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function CompanyHome() {
    const navigate = useNavigate()

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
            created_at: '',
            company_id: '',
        },
    ])
    const [productCount, setProductCount] = useState(0)
    const [activityCount, setActivitytCount] = useState(0)

    const loginUser = JSON.parse(localStorage.getItem('comAuth'))

    const getCompanyHome = async () => {
        const response = await axios.get('http://localhost:3600/company/home', {
            headers: { loginUser: loginUser.company_id },
        })
        setCompanyHome(response.data)
    }
    const getProductData = async () => {
        const result = await axios.get(
            'http://localhost:3600/company/getproductdata',
            {
                headers: { loginUser: loginUser.company_id },
            }
        )
        // console.log(result.data[0].num)
        setProductCount(result.data[0].num)
    }
    const getactivityData = async () => {
        const result = await axios.get(
            'http://localhost:3600/company/getactivitydata',
            {
                headers: { loginUser: loginUser.company_id },
            }
        )
        // console.log(result)
        setActivitytCount(result.data[0].num)
    }

    useEffect(() => {
        getProductData()
    }, [])
    useEffect(() => {
        getactivityData()
    }, [])
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
            // creat_at: document.form1.creat_at.value,
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
                Swal.fire({
                    icon: 'success',
                    title: '????????????',
                    showConfirmButton: true,
                    confirmButtonText: '??????',
                    confirmButtonColor: '#709D40',
                }).then(() => {
                    navigate('/company/companyhome', { replace: true })
                })
            })
    }

    return (
        <>
            {/* {console.log(companyHome[0])} */}
            <div className="container pt-3 ">
                <div className="row">
                    {loginUser.farm_type === '?????????' ? (
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">????????????</h6>
                                    </div>
                                    <span className="text-muted ">
                                        {companyHome[0].creat_at}
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">??????????????????</h6>
                                    </div>
                                    <span className="text-muted">
                                        {productCount}???
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">??????????????????</h6>
                                    </div>
                                    <span className="text-muted">
                                        {activityCount}
                                    </span>
                                </li>
                            </ul>
                            <div className="modal-body p-2  ">
                                <h3 className="fw-bold text-danger ">
                                    ??????????????????
                                </h3>
                                <ul className="d-grid gap-4  list-unstyled">
                                    <li className="d-flex gap-4">
                                        <div>
                                            <h5 className=" text-warning">
                                                ???????????????
                                            </h5>
                                            ????????????????????????????????????????????????????????????????????????????????????????????????
                                            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">????????????</h6>
                                    </div>
                                    <span className="text-muted ">
                                        {companyHome[0].creat_at}
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">??????????????????</h6>
                                    </div>
                                    <span className="text-muted">
                                        {productCount}???
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">??????????????????</h6>
                                    </div>
                                    <span className="text-muted">
                                        {activityCount}
                                    </span>
                                </li>
                            </ul>
                            <div className="modal-body p-2  ">
                                <h3 className="fw-bold text-danger ">
                                    ??????????????????
                                </h3>
                                <ul className="d-grid gap-4  list-unstyled">
                                    <li className="d-flex gap-4">
                                        <div>
                                            <h5 className="">???????????????</h5>
                                            ????????????????????????????????????????????????????????????????????????????????????????????????
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">??????????????????</h4>
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
                                        ?????????
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_type"
                                        name="farm_type"
                                        required
                                        disabled
                                        defaultValue={companyHome[0].farm_type}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label
                                        htmlFor="farm_name"
                                        className="form-label"
                                    >
                                        ???????????????
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_name"
                                        name="farm_name"
                                        placeholder=""
                                        required
                                        disabled
                                        defaultValue={companyHome[0].farm_name}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label
                                        htmlFor="company_name"
                                        className="form-label"
                                    >
                                        ??????????????????
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
                                        ????????????
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
                                        ???????????????????????????
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
                                        ???????????????
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_tel"
                                        name="farm_tel"
                                        disabled
                                        defaultValue={companyHome[0].farm_tel}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label
                                        htmlFor="company_phone"
                                        className="form-label"
                                    >
                                        ???????????????
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company_phone"
                                        name="company_phone"
                                        pattern="09\d{8}"
                                        disabled
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
                                        ???????????????
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_fax"
                                        name="farm_fax"
                                        disabled
                                        defaultValue={companyHome[0].farm_fax}
                                    />
                                </div>
                                <div className="col-12">
                                    <label
                                        htmlFor="address"
                                        className="form-label"
                                    >
                                        ???????????????
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="farm_address"
                                        name="farm_address"
                                        disabled
                                        defaultValue={
                                            companyHome[0].farm_address
                                        }
                                    />
                                </div>
                                <hr className="my-4" />
                                <h4 className="mb-3">?????????????????????</h4>
                                <div className="col-6">
                                    <label
                                        htmlFor="company_email"
                                        className="form-label"
                                    >
                                        Email
                                        <span className="text-muted">
                                            (??????)
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
                                            (??????)
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
                                    ????????????
                                </button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-center align-items-center">
                            <div
                                id="spinners"
                                className="spinner-border text-info"
                                role="status"
                                style={{ display: 'none' }}
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div
                                id="info-bar"
                                className="text-info px-3"
                                role="alert"
                                style={{ display: 'none' }}
                            >
                                ??????????????????
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyHome
