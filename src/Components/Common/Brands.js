import { useState } from 'react';
import brandComps from '../../JSONData/Brands.json'

const initData = brandComps;

const Brands = () => {

    // console.log(brandComps);

    const [brandData, setBrandData] = useState(initData);
    const [branDExp, setBrandExp] = useState('A');

    const sortBrands = () => {
        const brandData = initData.sort((a, b) => a.brandName > b.brandName ? 1 : -1);
        setBrandExp('N');
        setBrandData(brandData);
     //   console.log(brandData);
        console.log(brandComps);
    }

    const sortCount = () => {
        const brandData = initData.sort((a, b) => a.productsCount > b.productsCount ? 1 : -1);
        setBrandExp('C');
        setBrandData(brandData);
      //  console.log(brandData);
        console.log(brandComps);
    }

    const sortNormal = () => {
        const brandData = initData.sort((a, b) => a.productsCount > b.productsCount ? 1 : -1);
        setBrandExp('A');
        setBrandData(initData);
    //    console.log(initData);
        console.log(brandComps);
    }

        const handleChange = (e) => {
            if(e.target.value == "Sort By Name") {
                console.log(e.target.value);
                const brandData = initData.sort((a, b) => a.brandName > b.brandName ? 1 : -1);
                setBrandData(brandData);
            } else if (e.target.value == "Sort By Count") {
                console.log(e.target.value);
                const brandData = initData.sort((a, b) => a.productsCount > b.productsCount ? 1 : -1);
                setBrandData(brandData);
            } else {
                console.log("Normal")
            }
        }
    

    return (
        <div className="brands_products">{/*brands_products*/}
            <h2>Brands</h2>
            <div className="brands-name">
                <select onChange = {() => handleChange}>
                    <option>Sort By Name</option>
                    <option>Sort By Count</option>
                    <option>Sort By Reset</option>
                </select><br /><br />

                {/* <button onClick={sortBrands}>Sort By Name</button><br /><br />
                <button onClick={sortCount}>Sort By Count</button><br /><br />
    <button onClick={sortNormal}>Sort By Normal</button><br /><br /> */ }

                <ul className="nav nav-pills nav-stacked">
                    {
                        brandData.map((data, key) => {
                            return (
                                <li key={key}>
                                    <a href="contactus">
                                        {data.brandName} - {branDExp}
                                        <span className="pull-right">- ({data.productsCount})</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Brands;