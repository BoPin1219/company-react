import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CompanyNavbar from './pin/company_navbar/company_navbar'
import Company from './pin/app'
import './App.css'
import AuthContextProvider from './pin/component/authContextProvider'

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthContextProvider>
                    <CompanyNavbar />
                    <Routes>
                        <Route path="/company/*" element={<Company />} />
                    </Routes>
                </AuthContextProvider>
            </BrowserRouter>
        </>
    )
}

export default App
