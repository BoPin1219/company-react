import _ from 'lodash'
import styles from './AddProduct.module.css'
import clsx from 'clsx'
import React, { useRef, useEffect, useState } from 'react'
import Select from 'react-select'
import ProductHashTag from '../ProductHashTag'
import { HASHTAG, UNIT, TYPE, SUPPLIER } from '../../config/variables'
import FileUploadSample from '../FileUploadSample'
import { submitData, uploadImages, changeData } from '../../api/root'
import { getProductItem } from '../../api/product'
import { GrClose } from 'react-icons/gr'

const statusOptions = [
    { value: 1, label: '上架中' },
    { value: 0, label: '下架' },
]

const unitOptions = Object.keys(UNIT).map((key) => ({
    value: Number(key),
    label: UNIT[key],
}))
const typeOptions = Object.keys(TYPE).map((key) => ({
    value: Number(key),
    label: TYPE[key],
}))

const supplierOptions = Object.keys(SUPPLIER).map((key) => ({
    value: Number(key),
    label: SUPPLIER[key],
}))

const customStyles = {
    control: () => ({
        width: '100%',
        height: 30,
        border: '1px solid #333333',
        display: 'flex',
        borderRadius: 2,
        marginBottom: 10,
        cursor: 'pointer',
    }),
    singleValue: (provided, state) => {
        return { ...provided, fontSize: 16 }
    },
    menu: (provided, state) => ({ ...provided, width: '100%', fontSize: 16 }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'grey' : 'transparent',
        ':active': {
            backgroundColor: 'lightgrey',
        },
    }),
    placeholder: (provided, state) => ({ ...provided, fontSize: 16 }),
}

function AddProduct({ sid, onClose, onUpdate, isNew }) {
    const inputRef = useRef()
    const [value, setValue] = useState({
        name: null,
        supplier: null,
        type: null,
        unit: null,
        status: null,
        expire: null,
        price: null,
        inventory: null,
        details: null,
        photo: [],
    })
    const [images, setImages] = useState([])

    const [addHashTag, setAddHashTag] = useState({})

    useEffect(() => {
        if (sid) {
            const item = async (sid) => {
                const data = await getProductItem(sid)
                console.log(data)
                const { product_name: name } = data
                const { product_supplier: supplierValue } = data
                const { product_type: typeValue } = data
                const { product_unit: unitValue } = data
                const { product_status: statusValue } = data
                const { product_expire: expire } = data
                const { product_price: price } = data
                const { product_inventory: inventory } = data
                const { product_details: details } = data
                const { product_img: photo } = data
                const { product_hashtag: hashtag } = data

                const type = _.find(typeOptions, { value: typeValue })
                const unit = _.find(unitOptions, { value: unitValue })
                const supplier = _.find(supplierOptions, {
                    value: supplierValue,
                })
                const status = _.find(statusOptions, { value: statusValue })

                const newValue = {
                    name,
                    supplier,
                    type,
                    unit,
                    status,
                    expire,
                    price,
                    inventory,
                    details,
                    photo,
                }
                setValue(newValue)
                setAddHashTag(hashtag)
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

            const hashtag = Object.keys(addHashTag).map((key) => +key)
            const newValue = {
                ...value,
                type: value.type.value,
                unit: +value.unit.value,
                supplier: +value.supplier.value,
                status: +value.status.value,
            }
            console.log(hashtag)
            const data = { ...newValue, hashtag, photo: pictures }

            if (sid) {
                const sidData = { ...data, sid: sid }
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
                submitData(data)
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
                <div className="container">
                    <div className={styles.empty}></div>
                    <div className={styles.close} onClick={onClose}>
                        <GrClose color="#fff" />
                    </div>
                    <div className={styles.container}>
                        <form className={styles.form} name="form">
                            <div className={styles.title}>
                                {isNew ? '新增商品' : '修改商品'}
                            </div>
                            <input type="hidden" name="sid" value="sid" />
                            <div className="row">
                                <div className="col-6">
                                    <label className={styles.label}>
                                        商品名稱：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            name="name"
                                            type="text"
                                            ref={inputRef}
                                            placeholder="請輸入商品名稱"
                                            value={value.name}
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
                                        供應商：
                                    </label>
                                    <Select
                                        styles={customStyles}
                                        value={value.supplier}
                                        onChange={(newValue) =>
                                            handleChange('supplier', newValue)
                                        }
                                        placeholder={'請選擇廠商'}
                                        options={supplierOptions}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label className={styles.label}>
                                        商品類型：
                                    </label>
                                    <Select
                                        styles={customStyles}
                                        value={value.type}
                                        onChange={(newValue) =>
                                            handleChange('type', newValue)
                                        }
                                        placeholder={'請選擇商品類型'}
                                        options={typeOptions}
                                    />
                                </div>
                                <div className="col-3">
                                    <label className={styles.label}>
                                        商品單位：
                                    </label>
                                    <Select
                                        styles={customStyles}
                                        value={value.unit}
                                        onChange={(newValue) =>
                                            handleChange('unit', newValue)
                                        }
                                        placeholder={'請選擇商品單位'}
                                        options={unitOptions}
                                    />
                                </div>
                                <div className="col-3">
                                    <label className={styles.label}>
                                        是否上架：
                                    </label>
                                    <Select
                                        styles={customStyles}
                                        value={value.status}
                                        onChange={(newValue) =>
                                            handleChange('status', newValue)
                                        }
                                        placeholder={'請選擇是否上架'}
                                        options={statusOptions}
                                    />
                                </div>
                                <div className="col-3">
                                    <label className={styles.label}>
                                        產品保鮮期：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            name="expire"
                                            type="number"
                                            style={{ width: '100%' }}
                                            ref={inputRef}
                                            placeholder="請輸入商品保鮮期"
                                            value={value.expire}
                                            onChange={(e) =>
                                                handleChange(
                                                    'expire',
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
                                        商品價格：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            name="price"
                                            type="number"
                                            style={{ width: '100%' }}
                                            ref={inputRef}
                                            placeholder="請輸入商品價格"
                                            value={value.price}
                                            onChange={(e) =>
                                                handleChange(
                                                    'price',
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        商品庫存：
                                    </label>
                                    <div className={styles.text}>
                                        <input
                                            type="number"
                                            ref={inputRef}
                                            style={{ width: '100%' }}
                                            placeholder="請輸入商品庫存"
                                            value={value.inventory}
                                            onChange={(e) =>
                                                handleChange(
                                                    'inventory',
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
                                        產品照片：
                                    </label>
                                    <FileUploadSample
                                        onChange={setImages}
                                        photos={value.photo}
                                    />
                                </div>
                                <div className="col-6">
                                    <label className={styles.label}>
                                        產品標籤：
                                    </label>
                                    <div className={styles.hasgtag_area}>
                                        {Object.keys(HASHTAG).map((key) => {
                                            const value = HASHTAG[key]
                                            return (
                                                <ProductHashTag
                                                    key={key}
                                                    hashTag={value}
                                                    className={clsx({
                                                        [styles.active]:
                                                            addHashTag[key],
                                                    })}
                                                    // checked={checked}
                                                    onClick={() =>
                                                        handleToggleHashTag(key)
                                                    }
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label className={styles.label}>
                                        產品介紹：
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={value.details}
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
                                {/* <div className="col-12">
                <label className={styles.label}>是否預約上架時間：</label>
                <input
                  type="checkbox"
                  value="null"
                  name="immediately"
                  onChange={this.onChangeLike}
                />
                <label for="immediately">立即上架</label>
                <input
                  type="checkbox"
                  value="1"
                  name="reserve"
                  onChange={this.onChangeLike}
                />
                <label for="reserve">預約上架</label>
              </div> */}
                            </div>
                            <div
                                className={clsx(
                                    'row',
                                    'justify-content-center',
                                    'mb-5'
                                )}
                                onClick={handleSubmit}
                            >
                                <div className={styles.button}>
                                    {isNew ? '確定新增商品' : '確定修改商品'}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddProduct