import React from 'react'

export default function AllProductTable(props) {
    return (
        <div>
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
                    {
                        props.data.map((d, i) => {
                            return <tr onClick={() => { props.openPage(`/product`) }}>
                                <td style={{ width: "1%" }}><input type="checkbox" /></td>
                                <td className="ids">{d.orderNo}</td>
                                <td className="ids">{d.itemNo}</td>
                                <td className="details">
                                    <div className="d-flex">
                                        <img src={d.image} alt="item in production" />
                                        <p>{d.description}</p>
                                    </div>
                                </td>
                                <td style={{ width: "10%" }}>
                                    <button className="color-btn">{d.color}</button>
                                </td>
                                <td style={{ width: "7%" }}><b>{d.qty}</b></td>
                                <td style={{ width: "10%" }}><b>{d.printType}</b></td>
                                <td style={{ width: "15%" }} className="red-colored" style={{ color: d.deliveryMethod === "Pick Order" ? "#196BD8" : "" }}><b>{d.deliveryMethod}</b></td>
                                <td style={{ width: "18%" }}>{d.deliveryTime}<br /><span>Time Left</span> <b className="green-colored">10:00:00</b></td>
                                <td style={{ width: "5%" }}><b className="text-center green-colored d-block">{d.productionStatus}<div>2 of 5</div></b></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
