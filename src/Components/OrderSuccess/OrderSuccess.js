import { Button, Typography } from '@mui/material';
import image from '../../Assets/order.png';
import Box from '@mui/material/Box';
import './OrderSuccess.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OrderService from '../Service/OrderService';

const OrderSuccess = (props)=>{
    const[orderId, setOrderID] = useState();
    useEffect(()=>{

            OrderService.placeOrder(localStorage.getItem('id')).then((response)=>{
                setOrderID(response.data.data);
                console.log(response.data.addressForDelivery);
            });
            
        
    })
    return(
        <div style={{"marginTop":"100px"}}>
            <img src={image}/>
            <Typography style={{"marginTop":"-100px", "font":"normal normal bold 25px/30px Lato"
        , "color":"#333232"}}>Order Placed sucessfully</Typography>
        <Box style={{"marginTop":"100px", "marginLeft":"40%"}} sx={{"maxWidth":"280px"}}>hurray!!! your order is confirmed the order id is #123456 save the order id for 
            further communication..</Box><br/>
        <table style={{"marginLeft":"30%"}}>
            <tbody>
                <tr>
                    <th>Emails us</th>
                    <th>Contact us</th>
                    <th>Address</th>
                </tr>
                <td className='name' style={{"margin":"20px", "minWidth":"80px"}}>   dineshkumardk101199@gmail.com  </td>
                <td>   8368101909   </td>
                <td>   1002, Voc street, Thiruvallur   </td>
            </tbody>
        </table><br/>
        <Link to='/home'><Button variant='contained' size='large'>Continue Shopping</Button></Link>
        </div>
    );
}
export default OrderSuccess;