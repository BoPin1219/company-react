import styles from './ManageList.module.css'
import { useState, useEffect } from 'react'
import ProductTableSelect from '../../component/ProductTableSelect'
import ProductTable from '../../component/ProductTable'
import { getSupplierProduct } from '../../api/product'
import { useQuery } from '../../hooks'
import Pagination from '../../component/Pagination'
import Modal from 'react-modal'
import AddProduct from '../../component/AddProduct'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 0,
        padding: 0,
        backgroundColor: 'transparent',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
    },
}
Modal.setAppElement('#root')
function ManageList() {
    let subtitle
    const [data, setData] = useState({})
    const query = useQuery()
    const page = query['page'] || 1
    const search = query['search']
    const member_info = JSON.parse(localStorage.getItem('comAuth'))
    const supplier = member_info.company_id
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00'
    }

    function closeModal() {
        setIsOpen(false)
    }

    const getProduct = async (supplier, page, search) => {
        const data = await getSupplierProduct(supplier, page, search)
        if (data && data.rows) {
            console.log(data)
            setData(data)
        }
    }

    const handleAddProduct = () => {}

    useEffect(() => {
        getProduct(supplier, page, search)
    }, [supplier, page, search])

    //TODO:search完 清url
    return (
        <>
            <div className={styles.page}>
                <div className="container">
                    <div className="row justify-content-between align-items-baseline mb-4">
                        <div className={styles.name}>商品管理</div>
                        <div
                            className={styles.addProduct}
                            onClick={() => openModal()}
                        >
                            新增商品
                        </div>
                    </div>
                </div>
                <ProductTableSelect data={data} />
                <ProductTable
                    data={data}
                    onDeleted={getProduct}
                    onUpdate={getProduct}
                />
                <div className="container">
                    <div className={styles.pagination}>
                        {data && data.totalPage ? (
                            <Pagination
                                page={data.page}
                                totalPage={data.totalPage}
                            />
                        ) : null}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <AddProduct onClose={closeModal} isNew={true} />
            </Modal>
        </>
    )
}

export default ManageList
