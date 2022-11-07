import { useContext } from "react";
import ClotheContext from "../../Context/CargoContext";
import close from '../../assets/img/x.svg';

function Delete(){

    const { setModalDelete, modalDelete, setDeleteData } = useContext(ClotheContext);

    if(modalDelete === null){
        return null;
    }

    const deleteRecord = () =>{
        setDeleteData(modalDelete);
        setModalDelete(null);
    }

    return(
        <div className="order delete">
            <div className="order-container delete-container">
                <img src={close} alt='Exit' className="btn-delete" onClick={() => setModalDelete(null)}></img>
                <div className="order-info-container">
                    <h3 className="order-info-title">Are you sure want to delete?</h3>
                </div>
                <div className="order-btn-container">
                    <button className="btn" onClick={() => setModalDelete(null)}>No</button>
                    <button className="btn" onClick={deleteRecord}>Yes</button>
                </div>
            </div>
        </div>
    );
}

export default Delete;