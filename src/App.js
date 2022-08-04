import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CompanyNavbar from './pin/company_navbar/company_navbar'
import Company from './pin/app'
import './App.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <CompanyNavbar />
                <Routes>
                    <Route path="/company" element={<Company />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
