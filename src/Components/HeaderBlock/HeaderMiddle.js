import Logo from "./Logo";
import ShopMenu from "./ShopMenu";

const HeaderMiddle = () => {
    return (
        <div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <Logo />
                        <div className="btn-group pull-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                    USA
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="contactus">Canada</a></li>
                                    <li><a href="contactus">UK</a></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                    DOLLAR
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="contactus">Canadian Dollar</a></li>
                                    <li><a href="contactus">Pound</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <ShopMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle;