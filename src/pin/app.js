import { Routes, Route } from 'react-router-dom'
import React from 'react'

import CompanyLogin from './company_Login/company_login'
import LoginRegister from './company_login_register/login_register'
import CompanyHome from './Company_Home/Company_Home'
import CompanyActivity from './Company_Activity/Company_Activity'

function Company() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<CompanyLogin />} />
                <Route path="/register" element={<LoginRegister />} />
                <Route path="/" element={<CompanyHome />} />
                <Route path="/activity" element={<CompanyActivity />} />
                <Route path="/product" element={<></>} />
            </Routes>
        </>
    )
}

export default Company
