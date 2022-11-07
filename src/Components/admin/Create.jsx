import { useContext, useRef, useState } from "react";
import getBase64 from "../../Functions/getBase64";
import ShowNav from "../ShowNav";
import List from "./Containers";
import { isNumber, checkLength } from "../../Functions/doValid.js";
import delImg from '../../assets/img/x.svg';
import Delete from "../client/Delete";
import CargoContext from "../../Context/CargoContext";
import Boxes from "./Boxes";
import Edit from "./Edit";

function Create(){

    const [weight, setWeight] = useState('0');
    const [title, setTitle] = useState('');
    const [photoPrint, setPhotoPrint] = useState(null);
    const [flamable, setFlamable] = useState(false);
    const [degradable, setDegradable] = useState(false);

    const [container, setContainer] = useState('none');

    const { containers, setSaveBox } = useContext(CargoContext);

    const fileInput = useRef();

    const saveBox = () =>{
        setSaveBox({
            weight,
            title,
            image: photoPrint,
            flamable,
            degradable,
            container_id: container,
        });

        setWeight('0');
        setTitle('');
        setPhotoPrint(null);
        setFlamable(false);
        setDegradable(false);
        setContainer('none');
    }

    const checkInput = (e) => {
        if(!isNumber(e.target.value) && checkLength(e.target.value, 9))
            setWeight(e.target.value);
        return;
    }

    const doPhoto = () => {
        getBase64(fileInput.current.files[0])
        .then(photo => setPhotoPrint(photo))
        .catch(_ => {})
    }

    return(
        <>
            <ShowNav />
            <div className="create">
                <div className="create-container">
                    <h2>Create new box</h2>
                    <div className="create-inputs-container">
                        <div className="create-box-inputs">
                            <label>Weight:</label>
                            <div>
                                <input type='text' value={weight} className="input-text" onChange={checkInput}></input>
                            </div>
                        </div>
                        <div className="create-box-inputs">
                            <label>Title:</label>
                            <div>
                                <input type='text' value={title} className="input-text" onChange={e => setTitle(e.target.value)}></input>
                            </div>
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
                        <div className="create-box-inputs">
                            <label>Is flamable?</label>
                            <input type='checkbox' value={flamable} onChange={() => setFlamable(f => !f)}></input>
                        </div>
                        <div className="create-box-inputs">
                            <label>Is degradable?</label>
                            <input type='checkbox' value={degradable} onChange={() => setDegradable(s => !s)}></input>
                        </div>
                        <div className="create-box-inputs">
                            <label>Container</label>
                            <select className="input-select" value={container} onChange={e => setContainer(e.target.value)}>
                                <option value={'none'}>Choose</option>
                                {containers?.map(c => <option key={c.id} value={c.id}> {c.id} - {c.sizeType}</option>)}
                            </select>
                        </div>
                        <div className="create-box-inputs">
                            <button className='btn create-btn' onClick={saveBox}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
            <Boxes />
            <Delete />
            <Edit />
        </>
    )
}

export default Create;