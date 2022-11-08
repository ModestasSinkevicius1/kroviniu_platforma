import { useContext, useRef, useState } from "react";
import getBase64 from "../../Functions/getBase64";
import ShowNav from "../ShowNav";
import List from "./Containers";
import { isNumber, checkLength } from "../../Functions/doValid.js";
import delImg from '../../assets/img/x.svg';
import Delete from "../admin/Delete";
import Containers from "./Containers";
import CargoContext from "../../Context/CargoContext";
import sizes from '../../data/sizes.js';
import DeleteContainer from "./DeleteContainer";

function CreateContainer(){

    const [sizeType, setSizeType] = useState('L');

    const { setSaveContainer } = useContext(CargoContext);

    const keys = Object.keys(sizes);

    const saveBox = () =>{
        setSaveContainer({
            sizeType,
        });
        setSizeType('L');
    }

    return(
        <>
            <ShowNav />
            <div className="create">
                <div className="create-container">
                    <h2>Create new container</h2>
                    <div className="create-inputs-container">
                        <div className="create-box-inputs">
                            <label>Size type:</label>
                            <select className="input-select" value={sizeType} onChange={e => setSizeType(e.target.value)}>
                                {keys.map((k, i) => <option key={i} value={k}> {k} </option>)}
                            </select>
                        </div>
                        <div className="create-box-inputs">
                            <button className='btn create-btn' onClick={saveBox}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
            <Containers />
            <DeleteContainer />
        </>
    )
}

export default CreateContainer;