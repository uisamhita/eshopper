const ShopMenu = () => {
    return (
        <div className="shop-menu pull-right">
            <ul className="nav navbar-nav">
                <li><a href="contactus"><i className="fa fa-user"></i> Account</a></li>
                <li><a href="contactus"><i className="fa fa-star"></i> Wishlist</a></li>
                <li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li>
                <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Cart</a></li>
                <li><a href="login.html"><i className="fa fa-lock"></i> Login</a></li>
            </ul>
        </div>
    );
}

export default ShopMenu;