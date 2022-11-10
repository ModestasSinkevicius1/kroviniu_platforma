import { useContext } from "react";
import close from '../../assets/img/x.svg';
import CargoContext from "../../Context/CargoContext";

function DeleteContainer(){

    const { setModalDeleteContainer, modalDeleteContainer, setDeleteContainer } = useContext(CargoContext);

    if(modalDeleteContainer === null){
        return null;
    }

    const deleteRecord = () =>{
        setDeleteContainer(modalDeleteContainer);
        setModalDeleteContainer(null);
    }

    return(
        <div className="deleteContainer delete">
            <div className="delete-container">
                <img src={close} alt='Exit' className="btn-delete" onClick={() => setModalDeleteContainer(null)}></img>
                <div className="delete-info-container">
                    <h3 className="delete-info-title">This will delete all containing boxes. Are you sure you wan't to proceed?</h3>
                </div>
                <div className="delete-btn-container">
                    <button className="btn" onClick={() => setModalDeleteContainer(null)}>No</button>
                    <button className="btn" onClick={deleteRecord}>Yes</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteContainer;