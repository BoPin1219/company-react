import styles from './SearchForSupplier.module.css'
import { GoSearch } from 'react-icons/go'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '../../hooks'

function SearchForSupplier() {
    const inputRef = useRef()
    const query = useQuery()
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = useState()
    const search = query['search']

    const handleChange = (e) => {
        const value = e.target.value
        setValue(value)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const q = {
                ...query,
                page: 1,
                search: value,
            }

            setSearchParams(q)
        }
    }

    function handleIconClicked(e) {
        e.stopPropagation()

        const q = {
            ...query,
            page: 1,
            search: value,
        }

        setSearchParams(q)
    }

    function handleRootClicked() {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    useEffect(() => {
        if (search) {
            setValue(search)
        }
    }, [search])

    return (
        <>
            <div className={styles.search} onClick={handleRootClicked}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="請輸入產品名"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <span onClick={handleIconClicked} className={styles.icon}>
                    <GoSearch size={20} />
                </span>
            </div>
        </>
    )
}

//TODO: span Click

export default SearchForSupplier
