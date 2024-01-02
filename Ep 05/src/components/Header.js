import { LOGO_URL } from "../utils/constant";

const Header = () => {
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
            </ul>
        </div>

    </div>
    );
};


export default Header;
