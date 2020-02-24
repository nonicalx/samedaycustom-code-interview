import React from 'react'
import PHHeader from '../../component/headers/pHHeader'
import rightArrow from '../../images/right-arrow.svg'
import blackCart from '../../images/shopping-cart-black.svg'
import './singleProduct.css'
import catalog7 from '../../images/catalog7.png'
import catalog8 from '../../images/catalog8.png'
import blackDesign from '../../images/black-design.png'
import STable from '../../component/productTable/singleTable'
export default function SingleProduct() {
    return (
        <div className="container">
            <div className="row mx-0 mt-4">
                <div className="col-md-1 d-flex align-items-center justify-content-center">
                    <span className="back-bg mr-2"><img src={rightArrow} alt="go back" /></span>Back
                </div>
                <div className="col-md-11 bordered">
                    <PHHeader />
                </div>
            </div>

            <div className="row m-0 mt-5">
                <div className="col-12">
                    <b>Order: #ADJ2322434D</b>
                </div>
            </div>

            <div className="row m-0 mt-3">
                <div className="col-md-8 blue-colored strip-12">
                    Account Setup > Delivery Method
                </div>
                <div className="col-md-4">
                    <span className="blue-colored"> Production Status </span><b style={{ color: "#1E8406", fontSize: 20 }}>Running 2 of 4</b>
                </div>
            </div>


            <section className="strip mt-3 d-flex align-items-center">
                <div className="row">
                    <div className="col-md-2">
                        <div className="d-flex">
                            <img src={blackCart} alt="cart" /> <div><span><b>Order Value</b></span>
                                <div className="blue-colored strip-15">$4000</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="strip-border">
                            <div><b>Order Date</b></div>
                            <div className="blue-colored  strip-15 mt-1">25 - June - 2017</div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="strip-border">
                            <div><b>Delivery Method</b></div>
                            <div className="mt-1 strip-12 blue-colored">Pickup Order</div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="strip-border">
                            <div><b>Rush Option</b></div>
                            <div className="mt-1 strip-12 blue-colored">Rush</div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="strip-border">
                            <div><b>Status</b></div>
                            <div className="mt-1 strip-12 blue-colored">Pending</div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="strip-border">
                            <div><b>Request By</b></div>
                            <div className="strip-12 mt-1"><span className="blue-colored">25 - June - 2017</span><br /><span>Time Left</span> <b className="green-colored">10:00:00</b></div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="strip-border">
                            <div><b>Shipped or<br /> Picked Date</b></div>
                            <div className="blue-colored strip-15 mt-1">25 - June - 2017</div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="wall mt-5">
                <div className="row mx-0 mt-4 underline">
                    <div className="col-md-6 padding-off">
                        <span className="on pb-3 ml-0">Product Details</span>
                        <span className="pl-3" style={{ height: 22, borderLeft: "1px solid lightgray" }}>History/Notes</span>
                    </div>
                    <div className="col-md-6">
                        <span style={{ color: "#1E8406" }} className="ml-3">Worksheet</span><i className="fa fa-caret-down ml-2" style={{ color: "#7E7E7E" }}></i>
                        <button className="save-btn btn ml-2 px-4">Print</button>
                        <button className="btn btn-outline-secondary mx-4">Add Note</button>
                        <button className="btn catBtn">Categories<i className="ml-4 fa fa-caret-down"></i></button>
                    </div>
                </div>


                <div className="row mx-0 gray-strip">
                    <div className="col-md-12">
                        <span><b>Product</b></span>
                        <button className="btn btn-outline-primary" style={{ marginLeft: "78%" }}>Download Artwork</button>
                    </div>
                </div>

                <div className="img-grid">
                    <div className="each-img">
                        <img src={catalog8} />
                        <div><b>Front</b></div>
                    </div>
                    <div className="each-img">
                        <img src={blackDesign} />
                        <div><b>Back</b></div>
                    </div>
                    <div className="each-img">
                        <img src={catalog7} />
                        <div><b>Side</b></div>
                    </div>
                    <div className="each-img">
                        <img src={blackDesign} />
                        <div><b>Side</b></div>
                    </div>
                </div>


                <div className="mt-3">
                    <STable />
                </div>
            </section>
        </div>
    )
}
