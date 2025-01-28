import React,{useState} from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Modal from "react-modal";
import Faq from './Faq';


const Footer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  return (
    <div>
        <div className="footer">
            <footer>
                <div className="foot1">
                    <h1>MetaData</h1>
                    <p>MetaData is not just a platform—it's a community where potential meets opportunity.</p>
                    <div className="f-icons">
                        <a href=""><FaFacebookF className='f-i'/></a>
                        <a href=""><FaInstagram className='f-i'/></a>
                        <a href=""><FaTwitter className='f-i'/></a>
                    </div>
                </div>
                <div className="foot2">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Data Set</a></li>
                        <li onClick={toggleModal} className='faq-l'>FAQ</li>
                    </ul>

                </div>
                <div className="foot2">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="">Real Estate</a></li>
                        <li><a href="">Real Estate</a></li>
                        <li><a href="">Real Estate</a></li>
                    </ul>
                </div>

                <div className="foot2 cont">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href=""><FaPhoneAlt className='ff-i'/>091-333-723-90</a></li>
                        <li><a href=""><MdEmail className='ff-i'/>meta@gmail.com</a></li>
                        <li><FaMapMarkerAlt className='ff-i'/>Port Harcourt, Nigeria</li>
                    </ul>
                </div>
            </footer>
        </div>


        <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Example Modal"
                className={`bg-transparnt`}
                style={{ 
                overlay: {
                    position: "fixed",
                    top: "0",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "hsla(0, 0%, 0%, .8)",
                    zIndex:100000,
                    
                },
                }}
            >
                <div className='modal1'>
                    <Faq toggleModal={toggleModal}/>

                </div>
                
            </Modal>


    </div>
  )
}

export default Footer