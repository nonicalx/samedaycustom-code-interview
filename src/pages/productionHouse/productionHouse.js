import React, { useState, useEffect } from 'react'
import './productionHouse.css'
import SearchBar from '../../component/search/search'
import product from '../../images/product.svg'
import item from '../../images/small-item.png'
export default function Orders(props) {
    var [table, setTable] = useState("")



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
                    <img src={product} alt="product house" /> Production House
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
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Order #</th>
                                <th>Item #</th>
                                <th>Details</th>
                                <th>Colors</th>
                                <th>Qty</th>
                                <th>Print Type</th>
                                <th>Delivery Method</th>
                                <th>Delivery<br /> Time</th>
                                <th>Production Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "1%" }}><input type="checkbox" /></td>
                                <td className="ids">#232JODJSDKN2</td>
                                <td className="ids">#232JODJSDKN2</td>
                                <td className="details">
                                    <div className="d-flex">
                                        <img src={item} alt="item in production" />
                                        <p>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</p>
                                    </div>
                                </td>
                                <td style={{ width: "10%" }}>
                                    <button className="color-btn">Royal</button>
                                </td>
                                <td style={{ width: "7%" }}><b>L X 4</b></td>
                                <td style={{ width: "10%" }}><b>DTG Print</b></td>
                                <td style={{ width: "10%" }} className="red-colored"><b>Rush Shipping</b></td>
                                <td style={{ width: "18%" }}>23 - June - 2019<br /><span>Time Left</span> <b className="green-colored">10:00:00</b></td>
                                <td style={{ width: "5%" }}><b className="text-center green-colored d-block">Running<div>2 of 5</div></b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
