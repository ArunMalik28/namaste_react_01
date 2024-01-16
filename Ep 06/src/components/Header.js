import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {

    // let btnValue = "LogIn";

    const [btnValuePmr, SetBtnValue] = useState("Login");

    useEffect(() => {
        hello();
    });

    function hello() {
        console.log("Hi there!!!");
    };

    return (< div className="header_main_class" >
        <div className="logo_class" >
            <img src={LOGO_URL}></img>
        </div>
        <div className="list_class">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li><button className="hdr-btn" onClick={  
                    () => {

                        btnValuePmr == "LogIn" ? SetBtnValue("LogOut") : SetBtnValue("LogIn");

                        // SetBtnValue("LogOut");
                    }
                }>{ btnValuePmr }</button></li>
            </ul>
        </div>

    </div>
    );
};


export default Header;
