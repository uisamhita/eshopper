import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";

const HeaderBottom = () => {
    return (
        <div>
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <Navbar />
                        <HeaderSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;