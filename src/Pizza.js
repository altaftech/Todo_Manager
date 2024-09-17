import React from 'react';
import MyData from "./pizza.json";
function Pizza() {
    return (<>
        <table border={1}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
            </tr>
            {MyData.map((value, index) => {
                return (<tr>
                    <td>{value.product_id}</td>
                    <td>{value.product_name}</td>
                    <td>{value.product_price}</td>
                    <td><img width={100} src={value.product_image} /></td>
                </tr>)
            })}
        </table>
    </>);
}
export default Pizza;