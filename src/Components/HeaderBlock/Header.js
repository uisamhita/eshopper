import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import HeaderSearch from "./HeaderSearch";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ShopMenu from "./ShopMenu";

const Header = () => {
    return (
        <div>
            <header id="header">{/*header*/}
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>{/*/header*/}
        </div>
    );
}

export default Header;