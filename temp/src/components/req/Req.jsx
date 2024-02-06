import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Req.css';

const MyForm = () => {
  const formRef = useRef(null);

  const handleButtonClick = () => {
    // Call both functions when the button is clicked
    handleSubmit();
    handleReset();
  };

  const handleReset = () => {
    // Reset the form using the formRef
    if (formRef.current) {
      formRef.current.reset();
    }
    console.log('Form reset!');
  };

  const handleSubmit = () => {
    const productData = {
      Pname: Pname,
      price: price,
      quantity: quantity,
      total:total
    };

    // Sending data to the backend
    axios.post("http://localhost:8000/addProduct", productData)
      .then(response => {
        console.log(response.data);
        // Reset form fields after successful submission
        setPname('');
        setPrice(0);
        setQuantity(0);
        setTotal(0);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const [Pname, setPname] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const calculatedTotal = price * quantity;
    setTotal(calculatedTotal);
  };

  return (
    <div className='arrange'>
    <div className='reqcore'>
      <h1>Add Product Inventory</h1>
      <form ref={formRef}>
        <label>
          Product Name:
          <input type="text" value={Pname} onChange={(e) => setPname(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value) || 0)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 0)} />
        </label>
        
        <br />
        <div style={{alignItems:'center',display:'flex', justifyContent:'center',gap:'10px'}}>
        <button className='reqbutton' type="button" onClick={calculateTotal}>
          Calculate Total
        </button>
        <br />
        <button className='reqbutton' type="button" onClick={handleButtonClick}>
          Submit form
        </button>
        </div>
      </form>
      {total > 0 && (
        <div>
          <h2>Total:</h2>
          <p>{total}</p>
        </div>
      )}
    </div>
        
</div>        

  );
};

export default MyForm;
