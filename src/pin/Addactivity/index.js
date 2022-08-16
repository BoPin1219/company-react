import _ from 'lodash'
import styles from './AddProduct.module.css'
import clsx from 'clsx'
import React, { useRef, useEffect, useState } from 'react'
import Modal from 'react-modal'
import FileUploadSample from '../../component/FileUploadSample'
import { submitData, uploadImages, changeData } from '../../api/root'
import { getProductItem } from '../../api/product'
import { GrClose } from 'react-icons/gr'

import { format } from 'date-fns'

Modal.setAppElement('#root')
function Addactivity({ sid, onClose, onUpdate, isNew }) {
    const company_info_id = localStorage.getItem('comAuth')
        ? JSON.parse(localStorage.getItem('comAuth')).company_id
        : null
    const inputRef = useRef()
    const [value, setValue] = useState({
        card_area: null,
        address: null,
        phone: null,
        fax: null,
        time: null,
        card_info: null,
        card_info1: null,
        card_a: null,
        card_b: null,
        card_c: null,
        card_d: null,
        card_e: null,
        Map_b: null,
        company_infoImg: [],
    })
    const [images, setImages] = useState([])
    const [startDate, setStartDate] = useState(null)

    const [addHashTag, setAddHashTag] = useState({})

    const handleChange = (key, newValue) => {
        setValue((prev) => {
            return { ...prev, [key]: newValue }
        })
    }

    const handleToggleHashTag = (key) => {
        const value = addHashTag[key]
        setAddHashTag((prev) => {
            return { ...prev, [key]: !value }
        })

        console.log('handleToggleHashTag', addHashTag)
    }

    const handleSubmit = async () => {
        try {
            let pictures = value.photo

            if (!images.length && !pictures.length) {
                console.log('no images')
                return
            }

            if (!Object.keys(addHashTag)) {
                console.log('no hashTag')
                return
            }

            if (images.length) {
                const result = await uploadImages(images)

                pictures = result.data.map((v) => v.name)
            }
            const newValue = {
                ...value,
            }
            const data = { ...newValue, photo: pictures }
        } catch (e) {
            console.error(e)
        }
    }

    const getPicNewArray = () => {
        const newPicArray = images.map((v) => {
            return v.name
        })
        return JSON.stringify(newPicArray)
    }

    const inesertNewInfo = () => {
        const packageToSend = {
            card_area: value.card_area,
            company_id: company_info_id,
            card_img: 123,
            company_infoImg: getPicNewArray(),
            address: value.address,
            phone: value.phone,
            fax: value.fax,
            card_city: value.phone,
            card_info: value.card_info,
            card_info1: value.card_info1,
            card_a: value.card_a,
            card_b: value.card_b,
            card_c: value.card_c,
            card_d: value.card_d,
            card_e: value.card_e,
            Map_a: value.Map_b,
            Map_b: value.Map_b,
        }
        // console.log(packageToSend)
        fetch('http://localhost:3600/activity/add', {
            method: 'POST',
            body: JSON.stringify(packageToSend),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((r) => r.json())
            .then((obj) => {
                console.log(obj)
            })
    }

    return (
        <>
            <div className={styles.body}>
                <div className={clsx('container', styles.content)}>
                    <div className={styles.empty}></div>
                    <div className={styles.container}>
                        <form className={styles.form} name="form">
                            <div className="row">
                                <div className="col-6">
                                    <label className={styles.label}>
                                        活動名稱：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            name="name"
                                            type="text"
                                            ref={inputRef}
                                            style={{ width: '100%' }}
                                            placeholder="請輸入活動名稱"
                                            value={value.card_area}
                                            onChange={(e) =>
                                                setValue({
                                                    ...value,
                                                    card_area: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        活動地址：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            name="name"
                                            type="text"
                                            ref={inputRef}
                                            style={{ width: '100%' }}
                                            placeholder="請輸入活動地址"
                                            value={value.address}
                                            onChange={(e) =>
                                                setValue({
                                                    ...value,
                                                    address: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        連絡電話：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            name="name"
                                            type="text"
                                            ref={inputRef}
                                            style={{ width: '100%' }}
                                            placeholder="請輸入連絡電話"
                                            value={value.phone}
                                            onChange={(e) =>
                                                setValue({
                                                    ...value,
                                                    phone: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        傳真：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            name="name"
                                            type="text"
                                            ref={inputRef}
                                            style={{ width: '100%' }}
                                            placeholder="請輸入傳真號碼"
                                            value={value.fax}
                                            onChange={(e) =>
                                                setValue({
                                                    ...value,
                                                    fax: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className={styles.label}>
                                        開放時間：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            name="name"
                                            type="text"
                                            ref={inputRef}
                                            style={{ width: '100%' }}
                                            placeholder="請輸入開放時間"
                                            value={value.time}
                                            onChange={(e) =>
                                                setValue({
                                                    ...value,
                                                    time: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className={styles.label}>
                                        活動介紹：
                                    </label>
                                    <textarea
                                        rows={8}
                                        value={value.card_info}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                card_info: e.target.value,
                                            })
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        活動詳情：
                                    </label>
                                    <textarea
                                        rows={8}
                                        value={value.card_info1}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                card_info1: e.target.value,
                                            })
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label className={styles.label}>
                                        體驗活動：
                                    </label>
                                    <textarea
                                        rows={8}
                                        value={value.card_a}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                card_a: e.target.value,
                                            })
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>

                                <div className="col-6">
                                    <label className={styles.label}>
                                        遊覽景點：
                                    </label>
                                    <textarea
                                        rows={8}
                                        value={value.card_b}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                card_b: e.target.value,
                                            })
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        建議遊程：
                                    </label>
                                    <textarea
                                        rows={8}
                                        value={value.card_c}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                card_c: e.target.value,
                                            })
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        在地美食：
                                    </label>
                                    <textarea
                                        rows={8}
                                        value={value.card_d}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                card_d: e.target.value,
                                            })
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>

                                <div className="col-6">
                                    <label className={styles.label}>
                                        伴手禮與農特產：
                                    </label>
                                    <textarea
                                        rows={8}
                                        value={value.card_e}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                card_e: e.target.value,
                                            })
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        交通建議：
                                    </label>
                                    <textarea
                                        rows={8}
                                        value={value.Map_b}
                                        onChange={(e) =>
                                            setValue({
                                                ...value,
                                                Map_b: e.target.value,
                                            })
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        活動照片：
                                    </label>
                                    <div
                                        className={styles.photos}
                                        onBlur={() => {}}
                                    >
                                        <FileUploadSample
                                            onChange={setImages}
                                            photos={value.company_infoImg}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="d-flex justify-content-center ">
                                <div
                                    className={clsx('mb-5', 'pe-2')}
                                    // onClick={handleSubmit}
                                >
                                    <div
                                        className={styles.button}
                                        onClick={() => {
                                            handleSubmit()
                                            inesertNewInfo()
                                        }}
                                    >
                                        新增活動
                                    </div>
                                </div>
                                <div
                                    className={clsx('mb-5', 'ps-2')}
                                    onClick={handleSubmit}
                                >
                                    <div className={styles.button}>返回</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Addactivity
