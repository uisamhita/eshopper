import CategoriesTab from "../Components/CategoriesTab";
import FeatureItems from "../Components/Common/FeatureItems";
import LeftSidebar from "../Components/Common/LeftSideBar/LeftSidebar";
import Footer from "../Components/FooterBlock/Footer";
import Header from "../Components/HeaderBlock/Header";
import RecommendedItems from "../Components/RecomondedItems";

const Home = () => {
    return (
        <div>
            <Header />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                           <LeftSidebar />
                        </div>

                        <div className="col-sm-8 padding-right">
                            <FeatureItems />
                            <CategoriesTab />
                            <RecommendedItems />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
}

export default Home;