import React from 'react'
import './productionHouse.css'
import SearchBar from '../../component/search/search'
import product from '../../images/product.svg'
import item from '../../images/small-item.png'
export default function orders(props) {
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
                <div className="col-md-7">
                    <span>All Production</span>
                    <span>Awaiting Production</span>
                    <span>Completed</span>
                </div>
                <div className="col-md-5">
                    <button className="btn">Print worksheet</button>
                    <select>
                        <option>Mark as Complete</option>
                    </select>
                    <button>Save</button>
                </div>
            </div>



            <div className="row m-0">
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
                                <th>Delivery Time</th>
                                <th>Production Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td className="ids">#232JODJSDKN2</td>
                                <td className="ids">#232JODJSDKN2</td>
                                <td className="details">
                                    <div className="d-flex">
                                        <img src={item} alt="item in production" />
                                        <p>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</p>
                                    </div>
                                </td>
                                <td>
                                    <button>Royal</button>
                                </td>
                                <td>L X 4</td>
                                <td>DTG Print</td>
                                <td>Rush Shipping</td>
                                <td style={{ width: "18%" }}>23 - June - 2019<br />Time Left 10:00:00</td>
                                <td>Running<br />2 of 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
