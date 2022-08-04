import { Routes, Route } from 'react-router-dom'
import React from 'react'

import CompanyLogin from './company_Login/company_login'
import LoginRegister from './company_login_register/login_register'

function company() {
    return (
        <>
            <Routes>
                <Route path="/" element={<CompanyLogin />} />
                <Route path="/register" element={<LoginRegister />} />
            </Routes>
        </>
    )
}

export default company
