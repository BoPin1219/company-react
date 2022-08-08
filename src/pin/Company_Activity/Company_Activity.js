import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './company_activity.css'

function CompanyActivity() {
    const [companyActivity, setCompanyActivity] = useState([
        {
            activity_img: '',
            activity_info: '',
            created_at: '',
        },
    ])
    const loginUser = JSON.parse(localStorage.getItem('comAuth'))

    const getCompanyActivity = async () => {
        const response = await axios.get(
            'http://localhost:3600/company/activity',
            {
                headers: { loginUser: loginUser.company_id },
            }
        )
        setCompanyActivity(response.data)
    }
    useEffect(() => {
        getCompanyActivity()
    }, [])

    return (
        <div className="activityT">
            <div className="container ">
                <div className="row justify-content-between align-items-baseline mb-4">
                    <div className="activityT_name">商品管理</div>
                    <div className="addactivity">新增商品</div>
                </div>
                <form name="form1">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250  position-relative">
                        <div className="col-auto d-none d-lg-block">
                            <img
                                src="./imgs/2-26-600x500.jpg"
                                width="300"
                                height="213"
                                alt=""
                            />
                        </div>
                        <div className="col p-2 d-flex flex-column position-static ">
                            <div className="align-self-end">
                                <BiEdit
                                    size={18}
                                    style={{
                                        margin: '0 3px',
                                        cursor: 'pointer',
                                    }}
                                />

                                <RiDeleteBin6Line
                                    size={18}
                                    style={{
                                        margin: '0 3px',
                                        cursor: 'pointer',
                                    }}
                                />
                            </div>
                            <h3 className="mb-0">採果/情人谷觀光一日體驗趣</h3>
                            <hr />
                            <p className="mb-auto" name="activity_info"></p>
                            <strong className="d-inline-block  text-success col align-self-end">
                                2022/07/28止
                            </strong>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CompanyActivity
