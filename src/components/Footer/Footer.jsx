import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolor voluptates? Doloremque necessitatibus porro quasi laborum aliquid adipisci suscipit, repellendus delectus soluta unde dignissimos, quae sint magnam nihil doloribus! Libero?
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            New Marine Lines, Churchgate, Mumbai, Maharashtra 400020
                        </div>
                    </div>

                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: +91 4024 456 896
                        </div>
                    </div>

                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: yashcollectionOfficial@gmail.com
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">HeadPhones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speaker</span>
                    <span className="text">Wireless AirPods</span>
                    <span className="text">Home Theater</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Return Policy</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                    Yash-Collection &copy; All Rights Are Reserved 
                    </div>
                    <img src={Payment} alt="img" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
