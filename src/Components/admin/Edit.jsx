import { useRef } from "react";
import { useState, useContext } from "react";
import close from '../../assets/img/x.svg';
import CargoContext from "../../Context/CargoContext";
import getBase64 from "../../Functions/getBase64";
import delImg from '../../assets/img/x.svg';
import { useEffect } from "react";

function Edit(){

    const { setModalEdit, modalEdit, setNewEdit, containers } = useContext(CargoContext);

    const [weight, setWeight] = useState('');
    const [title, setTitle] = useState('');
    const [photoPrint, setPhotoPrint] = useState(null);
    const [flamable, setFlamable] = useState(false);
    const [degradable, setDegradable] = useState(false);
    const [container, setContainer] = useState('none');

    const fileInput = useRef();

    useEffect(() => {
        setWeight(modalEdit?.weight);
        setTitle(modalEdit?.title);
        setPhotoPrint(modalEdit?.image);
        setFlamable(modalEdit?.flamable);
        setDegradable(modalEdit?.degradable);
        setContainer(modalEdit?.container_id);
        console.log(modalEdit);
    }, [modalEdit])

    if(modalEdit === null){
        return null;
    }

    const createOrder = () =>{
        setNewEdit({
            weight,
            title,
            image: photoPrint,
            flamable,
            degradable,
            container_id: container,
            id: modalEdit.id,
        });
        setModalEdit(null);
    }

    const doPhoto = () => {
        getBase64(fileInput.current.files[0])
        .then(photo => setPhotoPrint(photo))
        .catch(_ => {})
    }

    return(
        <div className="edit">
            <div className="edit-container">
                <img src={close} alt='Exit' className="btn-delete" onClick={() => setModalEdit(null)}></img>
                <div>
                    <label htmlFor="_size">Weight</label>
                    <input type='text' value={weight} onChange={e => setWeight(e.target.value)} className="input-select" id="_size" name="_size"></input>
                </div>
                <div>
                    <label htmlFor="_size">Title</label>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)} className="input-select" id="_size" name="_size"></input>
                </div>
                <div className="create-box-inputs">
                    <label>Image pick:</label>
                    <div className="image-control">
                        <input type='file' ref={fileInput} className="btn file-input" onChange={doPhoto}></input>
                        {photoPrint ?
                        <div className="image-preview">
                            <img className="remove-img" src={delImg} alt='Remove img' onClick={() => setPhotoPrint(null)}></img>
                            <img src={photoPrint} alt='Preview'></img>
                        </div>
                        : null}
                    </div>
                </div>
                <div>
                    <label>Flamable:</label>
                    <input type='checkbox' value={flamable} onChange={e => setFlamable(f => !f)}></input>
                </div>
                <div>
                    <label>Degradable:</label>
                    <input type='checkbox' value={degradable} onChange={e => setDegradable(d => !d)}></input>
                </div>
                <div>
                    <select className='input-select' value={container} onChange={e => setContainer(e.target.value)}>
                        {containers?.map(c => <option key={c.id} value={c.id}>{c.id} - {c.sizeType}</option>)} 
                    </select>
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