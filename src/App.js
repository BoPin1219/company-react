import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CompanyActivity from './pin/company_navbar/Company_navbar'
import Footer from './pin/company_footer/Footer'
import CompanyLogin from './pin/Company_Login/index'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <CompanyActivity />
        <Routes>
          <Route path="/" element={<CompanyLogin />} />
          <Route path="/" element={<></>} />
          <Route path="/" element={<></>} />
          <Route path="/" element={<></>} />
          <Route path="/" element={<></>} />
          <Route path="/" element={<></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
