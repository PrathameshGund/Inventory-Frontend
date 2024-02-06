import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';
import "./Warhouse.css"
const ProductTable = () => {
  const [data, setdata] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const [updatedQuantity, setUpdatedQuantity] = useState(0);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    fetchData();
  }, [deleteSuccess]);

  const fetchData = () => {
    axios.get('http://localhost:8000/finddata')
      .then(res => {
        console.log(res.data);
        setdata(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setUpdatedPrice(product.price);
    setUpdatedQuantity(product.quantity);
  };

  const handleUpdate = () => {
    const updatedData = {
      Pname: selectedProduct.Pname,
      price: updatedPrice,
      quantity: updatedQuantity,
      total: calculateTotal(updatedPrice, updatedQuantity),
    };

    axios.put(`http://localhost:8000/updateProduct/${selectedProduct.Pname}`, updatedData)
      .then(res => {
        console.log(res.data);
        fetchData(); // Fetch updated data after successful update
        // Reset selected product and updated values
        setSelectedProduct(null);
        setUpdatedPrice(0);
        setUpdatedQuantity(0);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleDelete = (Pname) => {
    axios.delete(`http://localhost:8000/deleteProduct/${Pname}`)
      .then(res => {
        console.log(res.data);
        // After deleting, update the state to re-render the component
        setdata(prevData => prevData.filter(item => item.Pname !== Pname));
        // Set deleteSuccess to trigger useEffect and fetch updated data
        setDeleteSuccess(prevState => !prevState);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='core'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.Pname}>
              <td>{product.Pname}</td>
              <td> ₹{product.price.toFixed(2)}</td>
              <td>{product.quantity} Nos</td>
              <td> ₹{calculateTotal(product.price, product.quantity).toFixed(2)}</td>
              <td>
                <Button className='updatebutton' onClick={() => handleUpdateClick(product)}>
                  Update
                </Button>
              </td>
              <td>
                <Button className='deletebutton'  onClick={() => handleDelete(product.Pname)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Update form */}
      {selectedProduct && (
        <div>
          <h2>Update Product</h2>
          <Form>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(parseFloat(e.target.value) || 0)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={updatedQuantity}
                onChange={(e) => setUpdatedQuantity(parseInt(e.target.value) || 0)}
              />
            </Form.Group>
            <Button variant="success" onClick={handleUpdate}>
              Update
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
