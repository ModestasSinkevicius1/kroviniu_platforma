import { useContext } from "react";
import close from '../../assets/img/x.svg';
import CargoContext from "../../Context/CargoContext";

function Delete(){

    const { setModalDelete, modalDelete, setDeleteData } = useContext(CargoContext);

    if(modalDelete === null){
        return null;
    }

    const deleteRecord = () =>{
        setDeleteData(modalDelete);
        setModalDelete(null);
    }

    return(
        <div className="delete">
            <div className="delete-container">
                <img src={close} alt='Exit' className="btn-delete" onClick={() => setModalDelete(null)}></img>
                <div className="delete-info-container">
                    <h3 className="delete-info-title">Are you sure want to delete?</h3>
                </div>
                <div className="delete-btn-container">
                    <button className="btn" onClick={() => setModalDelete(null)}>No</button>
                    <button className="btn" onClick={deleteRecord}>Yes</button>
                </div>
            </div>
        </div>
    );
}

export default Delete;