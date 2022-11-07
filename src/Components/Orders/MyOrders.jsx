import Pagination from "../Pagination.jsx";
import ShowNav from "../ShowNav";
import List from "./List";

function MyOrders(){
    return(
        <>
            <ShowNav />
            <div className="my-orders">
                <List />
                <Pagination />
            </div>
        </>
    );
}

export default MyOrders;