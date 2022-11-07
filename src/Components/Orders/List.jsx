import { useEffect, useState } from "react";
import { useContext } from "react";
import ClotheContext from "../../Context/CargoContext";
import ListItem from "./ListItem";
import axios from "axios";
import { authConfig } from '../../Functions/auth.js';

function List(){

    const { setDeleteOrder, setUpdateOrder, stats, status, currentPage, refresh } = useContext(ClotheContext);
    
    const [orders, setOrders] = useState(null);

    console.log(orders?.length, currentPage - 1);

    useEffect(()=>{
        if(status === 1){
            return;
        }
        axios.get(`http://localhost:3007/orders/?page=${currentPage - 1}`, authConfig())
        .then(res => {
          setOrders(res.data);
        })
        .catch(_ => setOrders('error'));
    }, [refresh, status, currentPage]);

    if(!orders){
        return <div><h1>Please wait...</h1></div>
    }
    console.log(stats);

    return(
        <div className="list myOrder-list">
            <div className="stats-container">
                <h2 className="list-title">Orders</h2>         
                <h2 className="list-title">Total spent: {stats[0].ordersSum}&euro;</h2>
            </div>
            {orders !== 'error' ?
            <div className="list-container">
                <div className="list-header-container list-item">
                    <span className="list-header list-item-id">ID</span>
                    <span className="list-header list-item-size myOrder-header-size">Size</span>
                    <span className="list-header list-header-comment">Comment</span>
                    <span className="list-header myOrder-header-type">Clothe type</span>
                    <span className="list-header myOrder-header-type-second">Type</span>
                    <span className="list-header list-header-color myOrder-header-color">Color</span>
                    <span className="list-header">Price</span>
                    <span className="list-header myOrder-header-status">Status</span>
                </div>
                {orders?.map(o => <ListItem key={o.id} order={o} 
                                                    setDeleteOrder={setDeleteOrder} 
                                                    setUpdateOrder={setUpdateOrder} />)}
            </div>
            : <h3>Failed to get orders</h3>}                      
        </div>
    );
}

export default List;