const Navbar = () => {
    return (
        <div className="col-sm-9">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                    <li><a href="index.html" className="active">Home</a></li>
                    <li className="dropdown"><a href="contactus">Shop<i className="fa fa-angle-down"></i></a>
                        <ul role="menu" className="sub-menu">
                            <li><a href="shop.html">Products</a></li>
                            <li><a href="product-details.html">Product Details</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="login.html">Login</a></li>
                        </ul>
                    </li>
                    <li className="dropdown"><a href="contactus">Blog<i className="fa fa-angle-down"></i></a>
                        <ul role="menu" className="sub-menu">
                            <li><a href="blog.html">Blog List</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                    </li>
                    <li><a href="404.html">404</a></li>
                    <li><a href="contact-us.html">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;