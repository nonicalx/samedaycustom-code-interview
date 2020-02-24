import React from 'react'
import item from '../../images/small-item.png'
import eye from '../../images/eye.svg'
export default function SingleTable() {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Item #</th>
                        <th>Details</th>
                        <th>Production Type</th>
                        <th>Colors</th>
                        <th>Quantity</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>#232JODDJSDKN2 </td>
                        <td style={{ width: "30%" }}>
                            <div className="d-flex">
                                <img src={eye} alt="view" className="eye" />
                                <img src={item} alt="particular item in production" className="table-img" />
                                <p style={{ marginTop: "1rem" }}>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</p>
                            </div>
                        </td>
                        <td><b style={{ marginTop: "1rem" }} className="red-colored">DTG Print</b></td>
                        <td><button className="color-btn">Royal</button></td>
                        <td>L X 4</td>
                        <td>Paid in full</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
