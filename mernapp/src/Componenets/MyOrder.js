import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../Componenets/Footer';
import Navbar from '../Componenets/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem('userEmail'));
    try {
      const response = await fetch(`http://localhost:5600/api/myorderData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: localStorage.getItem('userEmail') })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setOrderData(data);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <div className='row'>
          {orderData.length > 0 ? orderData.map(data => {
            return (
              data.orderData ?
                data.orderData.order_data.slice(0).reverse().map((item, idx) => {
                  return (
                    <div key={idx}>
                      {item.map((arrayData, index) => {
                        return (
                          <div key={index}>
                            {arrayData.Order_date ? (
                              <div className='m-auto mt-5'>
                                <hr />
                                {data = arrayData.Order_date}
                              </div>
                            ) : (
                              <div className='col-12 col-md-6 col-lg-3'>
                                <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                  <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                  <div className="card-body">
                                    <h5 className="card-title">{arrayData.name}</h5>
                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                      <span className='m-1'>{arrayData.qty}</span>
                                      <span className='m-1'>{arrayData.size}</span>
                                      <span className='m-1'>{data}</span>
                                      <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                        ₹{arrayData.price}/-
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                }) : ""
            );
          }) : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
}