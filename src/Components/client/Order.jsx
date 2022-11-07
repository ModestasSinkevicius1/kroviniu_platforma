import { useState, useContext } from "react";
import ClotheContext from "../../Context/CargoContext";
import close from '../../assets/img/x.svg';

function Order(){

    const { setModalOrder, modalOrder, setNewOrder } = useContext(ClotheContext);

    const [comment, setComment] = useState('');
    const [size, setSize] = useState('l');

    if(modalOrder === null){
        return null;
    }

    const createOrder = () =>{
        setNewOrder({
            size,
            comment,
            id: modalOrder.id,
        });
        setModalOrder(null);
    }

    return(
        <div className="order">
            <div className="order-container">
                <img src={close} alt='Exit' className="btn-delete" onClick={() => setModalOrder(null)}></img>
                <div className="order-info-container text-center">
                    <h3 className="order-info-title">Clothing info</h3>
                    <div className="list-item row">
                        <span className="list-header-header col">Color</span>
                        <span className="col">Type</span>
                        <span className="col">Price</span>
                    </div>
                    <div className="order-info list-item row">
                        <div className="list-color-container col">
                            <span>{modalOrder.color}</span>
                            <div className="list-color-display" style={{backgroundColor: modalOrder.color}}></div>
                        </div>
                        <span className="col">{modalOrder.type}</span>
                        <span className="col">{modalOrder.price}&euro;</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="_size">Size</label>
                    <select value={size} onChange={e => setSize(e.target.value)} className="input-select" id="_size" name="_size">
                        <option value={'l'}>L</option>
                        <option value={'m'}>M</option>
                        <option value={'xl'}>XL</option>
                        <option value={'xll'}>XLL</option>
                    </select>
                </div>
                <div className="textarea-container">
                    <label htmlFor="_textarea">Comment</label>
                    <textarea className="input-textarea" name="_textarea" id="_textarea" 
                    value={comment} onChange={e => setComment(e.target.value)}>

                    </textarea>
                </div>
                <div className="order-btn-container">
                    <button className="btn bg-light" onClick={() => setModalOrder(null)}>Cancel</button>
                    <button className="btn bg-light" onClick={createOrder}>Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Order;