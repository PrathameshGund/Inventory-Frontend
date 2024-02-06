import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Searchbar.css';
function FormExample() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      
      <Form inline>
        <Row className='top'>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;