import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../order-table/orderlist.css'
import './order-form.css'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const OrderUpdate = () => {
    const [age, setAge] = useState("Pending");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='order-form-container'>
                <h3>UPDATE ORDER</h3>
                <form onSubmit={submitHandler} className='order-form'>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Items</th>
                                <th scope="col">SHIPPING ADDRESS</th>
                                <th scope='col'>Date</th>
                                <th scope="col">Total(₹)</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Items">
                                    <Link to='/'>
                                        <div className="items">
                                            <div className="items__title">lorem ipsum dolor sit amet</div>
                                        </div>
                                    </Link>
                                    <div className="items">
                                        <div className="items__title">lorem ipsum dolor sit amet</div>
                                    </div>
                                </td>
                                <td data-label="Address">Manikulath(H) Parappanpoyil(PO)</td>
                                <td data-label="Date">2023-07-08</td>
                                <td data-label="Total(₹)">899</td>
                                <td data-label="Status">
                                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                        <InputLabel id="demo-select-small-label">Pick</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Pending"}>Pending</MenuItem>
                                            <MenuItem value={"Packed"}>Packed</MenuItem>
                                            <MenuItem value={"Delivered"}>Delivered</MenuItem>
                                            <MenuItem value={"Cancelled"}>Cancel</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='btn-div'>
                        <button type="submit" className='btn'>Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default OrderUpdate