import ShowNav from "../ShowNav";
import List from "./List";
import Order from "./ModalBox";

function Home(){
    return(
        <>
            <ShowNav />
            <div className="home">
                <List />
                <Order />
            </div>
        </>
    );
}

export default Home;