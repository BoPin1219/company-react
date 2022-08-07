import { Routes, Route } from 'react-router-dom'
import React from 'react'

import CompanyLogin from './company_Login/company_login'
import LoginRegister from './company_login_register/login_register'
import CompanyHome from './company_Home/Company_Home'
import CompanyActivity from './company_Activity/company_activity'

function Company() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<CompanyLogin />} />
                <Route path="/register" element={<LoginRegister />} />
                <Route path="/companyhome" element={<CompanyHome />} />
                <Route path="/activity" element={<CompanyActivity />} />
                <Route path="/product" element={<></>} />
            </Routes>
        </>
    )
}

export default Company
