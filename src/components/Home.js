import React from 'react';
import { useNavigate} from 'react-router-dom';
// import { DateRange } from 'react-date-range';
import { FaGlobe} from 'react-icons/fa'
import { HiOutlineDocumentPlus,HiChevronRight,HiArrowUp,HiUser} from 'react-icons/hi2'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import "./Home.css"
import Table from "./Table"
// import Data from "./Data"
// import Form from '../pages/Form';

const Home = () => {
    let navigate = useNavigate(); 
const RouteChange = () =>{ 
  navigate("/add-user");
}
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


  return (
    <>
        <select className='select'>
        <option value="option1"> <FaGlobe/> Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        <input type="text" className='input'></input>
        <button className='button__icon'><HiOutlineDocumentPlus/></button>

        <div>
            <card className="main__card">
                <title className='title'>Total New Drivers</title>
                <title className='title__bottom'> <HiUser color="109887" size="20px"/> 340</title>
            </card>
        </div>
        <div>
            <card className="card1">
                <title className='title1'>Active Drivers</title>
                <title className='title__bottom1'> <HiUser color="109887" size="20px"/> 340</title>
            </card>
        </div>
        <div>
            <card className="card2">
                <title className='title1'>In Process</title>
                <title className='title__bottom1'> <HiUser color="109887" size="20px"/> 340</title>
            </card>
        </div>
        <div>
            <card className="card3">
                <title className='title1'>In Active Drivers </title>
                <title className='title__bottom1'> <HiUser color="109887" size="20px"/> 340</title>
            </card>
        </div>
        <div>
            <card className="card4">
                <title className='title1'>Rejected  Drivers</title>
                <title className='title__bottom1'><HiUser color="109887" size="20px"/> 340</title>
            </card>
        </div>
        <div>
            {/* <button className='card__button' onClick={handleShow}> Add New Driver <HiChevronRight/></button> */}
            
            <button className='card__button' onclick={RouteChange}> Add New Driver <HiChevronRight/></button>
                 
{/*                 
                <Modal claaaName="Modal"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Add New Driver</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Send</Button>
                    </Modal.Footer>
                    <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    
                    <Data/>
                </Modal.Body>
                    
                </Modal> */}
        </div>
        <div>
            <card className="card5">
                <title className='title1'>Total New Drivers <HiUser color="109887" size="20px"/></title>
                <title className='title__bottom1'> <h3>30%<HiArrowUp color="109887" size="20px"/> </h3>  340</title>
            </card>
        </div>
        <div>
            <Table/>
        </div>
    </>
  )
}

export default Home