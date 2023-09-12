import {React,useState} from 'react'
import './Modal.css';

const Modal = () => {

    const [modal,setModal]=useState(false)

    function toggleModal(){
        setModal(!modal)
    }
  return (
    <>
      <button className='btn-modal' onClick={toggleModal}>Open</button>
      {modal &&(
        <div className='modal'>
        <div onClick={toggleModal} className='overlay'></div>
        <div className='modal-content'>
            <h2>Hello Modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ea enim earum fugit veritatis beatae quibusdam doloribus numquam eos omnis? Ipsa ullam accusamus minus atque ipsam, molestias exercitationem, commodi officia debitis voluptatum ratione voluptatem odio nisi facere eius earum quia libero velit laborum doloribus? Nemo totam iure ratione reiciendis quam.</p>
            <button onClick={toggleModal} className='close-modal'>Close</button>   
        </div>
      </div>
      )}
      
    </>
  )
}

export default Modal
