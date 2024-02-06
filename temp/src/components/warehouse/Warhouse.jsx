import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Warhouse.css'
function Usertable() {
  const [data, setdata] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/finddata')
      .then(res => {
        console.log(res.data);
        setdata(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [deleteSuccess]); // Add deleteSuccess to dependency array

  function handleDelete(Pname) {
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
  }

  return (
    <div className='Table'>
      {deleteSuccess && <p>Item deleted successfully!</p>}
      <Table className='Tb'>
        <thead>
          <tr>

            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={a.Pname}>
              <td>{a.Pname}</td>
              <td>{a.price}</td>
              <td>{a.quantity}</td>
              <td>{a.total}</td>
              <td><Button className='updatebutton' >Update</Button>{' '}</td>
              <td>
                <Button className='deletebutton' onClick={() => handleDelete(a.Pname)}>Delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Usertable;
