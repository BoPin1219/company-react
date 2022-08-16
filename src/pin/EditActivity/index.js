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

    useEffect(() => {
        if (sid) {
            const item = async (sid) => {
                const data = await getProductItem(sid)
                console.log(data)
                const { card_area } = data
                const { address } = data
                const { phone } = data
                const { fax } = data
                const { time } = data
                const { card_info } = data
                const { card_info1 } = data
                const { card_a } = data
                const { card_b } = data
                const { card_c } = data
                const { card_d } = data
                const { card_e } = data
                const { Map_b } = data
                const { company_infoImg } = data

                // const type = _.find(typeOptions, { value: typeValue })
                // const unit = _.find(unitOptions, { value: unitValue })
                // const supplier = _.find(supplierOptions, {
                //     value: supplierValue,
                // })
                // const status = _.find(statusOptions, { value: statusValue })

                const newValue = {
                    card_area,
                    address,
                    phone,
                    fax,
                    time,
                    card_info,
                    card_info1,
                    card_a,
                    card_b,
                    card_c,
                    card_d,
                    card_e,
                    Map_b,
                    company_infoImg,
                }
                setValue(newValue)
                // setAddHashTag(hashtag)
            }
            item(sid)
        }
    }, [sid])

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
                // console.log(pictures, result)
                pictures = result.data.map((v) => v.name)
            }
            const newValue = {
                ...value,
            }
            const data = { ...newValue, photo: pictures }
            // const time = startDate.toJSON().slice(0, 19).replace('T', ' ')
            // console.log(time) //2015-07-23 11:26:00
            const time = format(startDate, 'yyyy-MM-dd kk:mm:ss')

            if (sid) {
                const sidData = { ...data, sid: sid, time }
                changeData(sidData)
                    .then((result) => {
                        console.log('Success:', result)
                        onUpdate(sidData)
                        onClose()
                    })
                    .catch((error) => {
                        console.error('Error:', error)
                    })
            } else {
                const addData = { ...data, time }
                submitData(addData)
                    .then((result) => {
                        console.log('Success:', result)
                        onClose()
                    })
                    .catch((error) => {
                        console.error('Error:', error)
                    })
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div className={styles.body}>
                <div className={clsx('container', styles.content)}>
                    <div className={styles.empty}></div>
                    {/* <div className={styles.close} onClick={onClose}>
                        <GrClose color="#fff" />
                    </div> */}
                    <div className={styles.container}>
                        <form className={styles.form} name="form">
                            <div className={styles.title}>
                                {isNew ? '新增商品' : '修改商品'}
                            </div>
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
                                            placeholder="請輸入商品名稱"
                                            value={value.card_area}
                                            onChange={(e) =>
                                                handleChange(
                                                    'name',
                                                    e.target.value
                                                )
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
                                            placeholder="請輸入商品名稱"
                                            value={value.address}
                                            onChange={(e) =>
                                                handleChange(
                                                    'name',
                                                    e.target.value
                                                )
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
                                            placeholder="請輸入商品名稱"
                                            value={value.phone}
                                            onChange={(e) =>
                                                handleChange(
                                                    'name',
                                                    e.target.value
                                                )
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
                                            placeholder="請輸入商品名稱"
                                            value={value.fax}
                                            onChange={(e) =>
                                                handleChange(
                                                    'name',
                                                    e.target.value
                                                )
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
                                            placeholder="請輸入商品名稱"
                                            value={value.time}
                                            onChange={(e) =>
                                                handleChange(
                                                    'name',
                                                    e.target.value
                                                )
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
                                            handleChange(
                                                'details',
                                                e.target.value
                                            )
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
                                            handleChange(
                                                'details',
                                                e.target.value
                                            )
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
                                            handleChange(
                                                'details',
                                                e.target.value
                                            )
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
                                            handleChange(
                                                'details',
                                                e.target.value
                                            )
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
                                            handleChange(
                                                'details',
                                                e.target.value
                                            )
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
                                            handleChange(
                                                'details',
                                                e.target.value
                                            )
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
                                            handleChange(
                                                'details',
                                                e.target.value
                                            )
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
                                            handleChange(
                                                'details',
                                                e.target.value
                                            )
                                        }
                                        className={styles.textarea}
                                    ></textarea>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        活動照片：
                                    </label>
                                    <div className={styles.photos}>
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
                                    onClick={handleSubmit}
                                >
                                    <div className={styles.button}>活動</div>
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
