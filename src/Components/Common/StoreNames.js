import data from '../../JSONData/StoreNames.json'

const StoreNames = () => {
    return (
        <div>
            <h2>Brands</h2>
            <ul className="nav nav-pills nav-stacked">
                {
                    data.map((data, key) => {
                        return (
                            <li key={key}>{ data.storeName }</li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default StoreNames;

