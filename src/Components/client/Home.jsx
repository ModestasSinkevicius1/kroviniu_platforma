import ShowNav from "../ShowNav";
import Filter from "./Filter";
import List from "./List";
import Order from "./Order";

function Home(){
    return(
        <>
            <ShowNav />
            <div className="home">
                <Filter />
                <List />
                <Order />
            </div>
        </>
    );
}

export default Home;