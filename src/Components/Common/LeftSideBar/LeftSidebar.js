

import Categories from "../Categories";
import Brands from "../Brands";
import PriceRange from "../PriceRange";
import StoreNames from "../StoreNames";

const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            <Brands />
            <Categories />
            <StoreNames />
            <PriceRange />


            <div className="shipping text-center">{/*shipping*/}
                <img src="assets/images/home/shipping.jpg" alt="" />
            </div>{/*/shipping*/}

        </div>
    )
}

export default LeftSidebar;