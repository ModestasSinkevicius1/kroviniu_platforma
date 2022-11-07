import { useRef } from "react";
import { useState, useContext } from "react";
import close from '../../assets/img/x.svg';
import CargoContext from "../../Context/CargoContext";

function Edit(){

    const { setModalEdit, modalEdit, setNewEdit } = useContext(CargoContext);

    const [weight, setWeight] = useState('');
    const [title, setTitle] = useState('');
    const [photoPrint, setPhotoPrint] = useState(null);
    const [flamable, setFlamable] = useState(false);
    const [degradable, setDegradable] = useState(false);
    const [container, setContainer] = useState('none');

    const fileInput = useRef();

    if(modalEdit === null){
        return null;
    }

    const createOrder = () =>{
        // setNewEdit({
        //     size,
        //     comment,
        //     id: modalEdit.id,
        // });
        setModalEdit(null);
    }

    return(
        <div className="order">
            <div className="order-container">
                <img src={close} alt='Exit' className="btn-delete" onClick={() => setModalEdit(null)}></img>
                <div>
                    <label htmlFor="_size">Weight</label>
                    <input type='text' value={weight} onChange={e => setWeight(e.target.value)} className="input-select" id="_size" name="_size"></input>
                </div>
                <div>
                    <label htmlFor="_size">Title</label>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)} className="input-select" id="_size" name="_size"></input>
                </div>
                <div className="order-btn-container">
                    <button className="btn bg-light" onClick={() => setModalEdit(null)}>Cancel</button>
                    <button className="btn bg-light" onClick={createOrder}>Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Edit;