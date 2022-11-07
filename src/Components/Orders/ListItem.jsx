import { useState } from "react";
import { useContext } from "react";
import ClotheContext from "../../Context/CargoContext";

function ListItem({ order, setDeleteOrder, setUpdateOrder }){

    const { status } = useContext(ClotheContext);

    const [stage, setStage] = useState(order.status);
    
    const updateOrderStatus = () => {
        setUpdateOrder({
            id: order.id,
            status: stage,
        });
    }

    return(
        <div className="list-item">
            <span className="list-item-id">{order.id}.</span>
            <span className="list-item-size myOrder-size">{order.size}</span>
            <span className="myOrder-comment">{order.comment}</span>
            <span className="myOrder-type">{order.type}</span>
            <div className="color-container-second">
                <div className="list-color-container myOrder-color-container">
                    <span>{order.color}</span>
                    <div className="list-color-display" style={{backgroundColor: order.color}}></div>
                </div>
            </div>     
            <span>{order.price}&euro;</span>
            {status === 3 ?
            <select className="input-select myOrder-status" value={stage} onChange={e => setStage(e.target.value)}>
                <option value={'Awaiting'}>Awaiting</option>
                <option value={'Confirmed'}>Confirmed</option>
                <option value={'Working'}>Working</option>
                <option value={'Packaging'}>Packaging</option>
                <option value={'Sent'}>Sent</option>
                <option value={'Completed'}>Completed</option>
            </select> :
            <span>{order.status}</span>}
            {status === 3 ? 
                <div className="order-control">
                    <button className="btn btn-order" onClick={() => updateOrderStatus(order)}>Update</button>
                    <button className="btn btn-order" onClick={() => setDeleteOrder(order)}>Delete</button>
                </div> 
            : null}
        </div>
    );
}

export default ListItem;