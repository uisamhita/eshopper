import categories from "../../JSONData/Categories.json";

const Categories = () => {
    return (
        <div className="panel-group category-products" id="accordian">
            <h2>Category</h2>
            {
                categories.map(data => {
                    return (
                        <div className="panel panel-default" key={data.id}>
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href={`#${data.category}`}>
                                        <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                        {data.category}
                                    </a>
                                </h4>
                            </div>
                            <div id={data.category} className="panel-collapse collapse">
                                <div className="panel-body">
                                    <ul>
                                       {
                                          data.subcategorylist.map(subcats => {
                                              return (
                                                  <li key={subcats.id}>{subcats.subcategory}</li>
                                              )
                                          })
                                       }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Categories;