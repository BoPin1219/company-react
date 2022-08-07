import React, { useState, useEffect, useRef } from 'react'
import Box from '../Box'
import styles from './FileUploadSample.module.css'
import { getImgUrl } from '../../config/ajax-path'

function FileUploadSample({ onChange, photos }) {
    // 選擇的檔案
    const [selectedFile, setSelectedFile] = useState([])
    // 是否有檔案被挑選
    const [isFilePicked, setIsFilePicked] = useState(false)
    // 預覽圖片
    const [preview, setPreview] = useState([])
    // server上的圖片網址
    const [imgServerUrl, setImgServerUrl] = useState('')

    // 當選擇檔案更動時建立預覽圖
    useEffect(() => {
        if (!selectedFile.length) {
            setPreview([])
            return
        }

        const objectUrls = selectedFile.map((el) => URL.createObjectURL(el))
        setPreview(objectUrls)

        // 當元件unmounted時清除記憶體
        return () => {
            objectUrls.forEach((el) => URL.revokeObjectURL(el))
        }
    }, [selectedFile])

    const changeHandler = (e) => {
        const files = e.target.files
        const values = Object.values(files)

        setIsFilePicked(true)
        setSelectedFile(values)
        setImgServerUrl('')

        onChange(values)
    }

    useEffect(() => {
        setPreview(photos.map((n) => getImgUrl(n)))
    }, [photos])
    // const handleOnClicked = (e) => {
    //   e.preventDefault()
    //   if (!selectedFile.length) return

    //   onClick(selectedFile)
    // uploadImages(selectedFile)
    //   .then((result) => {
    //     console.log('Success:', result)
    //     // setImgServerUrl('http://localhost:3600/uploads/' + result.data.name)
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error)
    //   })
    // }

    return (
        <div>
            <input
                type="file"
                name="photos"
                accept="images/*"
                multiple
                onChange={changeHandler}
            />

            <div>
                <div className={styles.click}>上傳照片</div>
                預覽圖片:
                <div className="d-flex">
                    {preview.map((v, i) => {
                        return (
                            <div className={styles.previewimg} key={i}>
                                <Box>
                                    <img src={v} alt="" />
                                </Box>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* <div>
        <button onClick={handleOnClicked}>送出</button>
      </div>
      <div>
        伺服器圖片網址:
        <a href={imgServerUrl} target="_blank" rel="noreferrer">
          {imgServerUrl}
        </a>
      </div> */}
        </div>
    )
}

export default FileUploadSample
