import React from 'react'
import Delete from '@mui/icons-material/Delete'
import axios from 'axios';
import { useCart, useDispatchCart } from '../Componenets/ContextReducer';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      alert("User email not found. Please log in.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5600/api/orderData`, {
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        dispatch({ type: "DROP" });
        alert("Checkout successful!");
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during checkout. Please try again.");
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price * food.qty, 0);

  return (
    <div>
      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price * food.qty}</td>
                <td>
                  <button type="button" className="btn p-0" onClick={() => dispatch({ type: "REMOVE", index })}>
                    <Delete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
        </div>
      </div>
    </div>
  );
}