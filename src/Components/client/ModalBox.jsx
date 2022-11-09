import { useContext } from "react";
import close from '../../assets/img/x.svg';
import CargoContext from "../../Context/CargoContext";

function Order(){

    const { setModalBox, modalBox, boxes } = useContext(CargoContext);

    if(modalBox === null){
        return null;
    }

    return(
        <div className="edit">
            <div className="edit-container">
                <img src={close} alt='Exit' className="btn-delete" onClick={() => setModalBox(null)}></img>
                <h2>Container: {modalBox.id}</h2>
                <h2>Box list:</h2>
                <div className="list-container-modal">
                    
                    <div className="list-item list-item-modal">
                        <span>Title</span>
                        <span>Weight</span>
                        <span>Image</span>
                        <span>Flamable</span>
                        <span>Degradable</span>
                    </div>
                    {boxes?.map(b => b.container_id === modalBox.id ? 
                    <div className="list-item list-item-modal">
                        <span>{b.title}</span>
                        <span>{b.weight}</span>
                        <img className="img-modal" src={b.image} alt='box'></img>
                        <span>{b.flamable}</span>
                        <span>{b.degradable}</span>
                    </div>
                    :
                    null
                    )}
                  
                </div>
            </div>
        </div>
    );
}

export default Order;