import { useState } from 'react';
import './App.css';
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Example() {
  const [show, setShow] = useState(false)
  const [showChild, setShowChild] = useState(false)

  const handleClose = () => {
    setShow(false)
    setShowChild(true)
  };
  const handleShow = () => setShow(true)
  const handleCloseChild = () => setShowChild(false)
  const handleShowChild = () => setShowChild(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        PURCHASE FUNDS
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>

          <Container>
            <Row>
              <Col>
                <Image src="./imgs/left.png" thumbnail onClick={handleClose} />
              </Col>
              <Col>
                <Image src="./imgs/right.png" thumbnail onClick={handleClose} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      <Modal show={showChild} onHide={handleCloseChild}>

        <Modal.Body >
        <p class="text-center">
          <i class="bi bi-0-circle"style={{fontSize:50}}></i>
          </p>
         <h2 style={{color: "red"}}>Funds take 3 to 7 days to pend</h2> 
         <h4>

         <p class="text-center">
         These funds are transferred via a Gamepass purchase and it will take 3 to 7 days to reach your account!
         </p>
         <p class="text-center">
Additionally, you should use a new gamepass on every purchase for your safety, if you have any existing ones, change the price to a different price to what you are purchasing.
</p>
         </h4>
         <p class="text-center">
          <Button variant="info" onClick={handleCloseChild}>
            Understood
          </Button>
          <Button variant="danger" onClick={handleCloseChild}>
            Cancel
          </Button>
          </p>
        </Modal.Body>


      </Modal>
    </>
  );
}

export default Example;
