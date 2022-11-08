import ShowNav from "../ShowNav";
import List from "./List";
import Order from "./Order";

function Home(){
    return(
        <>
            <ShowNav />
            <div className="home">
                <List />
                {/* <Order /> */}
            </div>
        </>
    );
}

export default Home;