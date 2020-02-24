import React, { useState, useEffect } from 'react'
import './productionHouse.css'
import SearchBar from '../../component/search/search'
import product from '../../images/product.svg'
import item from '../../images/small-item.png'
import AllProductionTable from '../../component/productTable/allProductTable'
import PHHeader from '../../component/headers/pHHeader'
import { withRouter } from 'react-router-dom'
function ProductionHouse(props) {


    console.log("props", props)
    var [table, setTable] = useState("")
    var tableData = [
        {
            orderNo: "#232JODJSDKN2",
            itemNo: "#232JODJSDKN2",
            image: item,
            description: "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
            color: "Royal",
            qty: "L X 4",
            printType: "DTG Print",
            deliveryMethod: "Rush Shipping",
            deliveryTime: '23 - June - 2019',
            productionStatus: "Running"
        },
        {
            orderNo: "#232JODJSDKN2",
            itemNo: "#232JODJSDKN2",
            image: item,
            description: "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
            color: "Royal",
            qty: "L X 4",
            printType: "DTG Print",
            deliveryMethod: "Pick Order",
            deliveryTime: '23 - June - 2019',
            productionStatus: "Running"
        }

    ]

    const handleOpeningPage = (path) => {
        props.history.push({ pathname: path })
    }


    useEffect(() => {
        setTable("allProd")
    }, [])

    const handleTableSwitch = (tableType) => {
        setTable(tableType)
    }
    return (
        <div className="container">
            <div className="row m-0 mt-4">
                <div className='col-md-7 title'>
                    <PHHeader />
                </div>
                <div className='col-md-2'>
                    <button className="btn catBtn">Categories<i className="ml-4 fa fa-caret-down"></i></button>
                </div>
                <div className='col-md-3'>
                    <SearchBar />
                </div>
            </div>


            <div className="row m-0 main-content-heads">
                <div className="col-md-7 table-switch">
                    <span className={`${table === "allProd" ? 'on' : ''} pl-2 pb-3`} onClick={() => { handleTableSwitch("allProd") }}>All Productions</span>
                    <span className={`${table === 'await' ? 'on' : ''} pl-2 pb-3`} onClick={() => { handleTableSwitch("await") }}>Awaiting Production</span>
                    <span className={`${table === 'completed' ? 'on' : ''} pl-2 pb-3`} onClick={() => { handleTableSwitch("completed") }}>Completed</span>
                </div>
                <div className="col-md-5">
                    <button className="btn btn-outline-secondary print-btn mr-4">Print worksheet</button>
                    <select className="mark-select">
                        <option>Mark as Complete</option>
                    </select>
                    <button className="btn save-btn ml-4">Save</button>
                </div>
            </div>



            <div className="row mx-0" style={{ marginTop: "0.5rem" }}>
                <div className="col-12">
                    <AllProductionTable data={tableData} openPage={handleOpeningPage} />
                </div>
            </div>
        </div>
    )
}


export default withRouter(ProductionHouse)