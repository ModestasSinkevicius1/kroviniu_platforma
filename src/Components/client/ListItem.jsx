import { useContext } from "react";
import ClotheContext from "../../Context/CargoContext";
import noImage from '../../assets/img/no-image.svg'

function ListItem({ clothing }){

    const { setModalOrder } = useContext(ClotheContext);

    return(
        <div className="col-lg-4 col-md-5 col-sm-12 justify-content-center">
            <div className="card-item card text-center justify-content-center">
                <div className="card-image-container card-img-top">
                    {clothing.image ?
                    <img src={clothing.image} alt={clothing.type}></img> :
                    <img src={noImage} alt='no imeg'></img>}
                </div>
                <div className="list-group">
                    <div className="list-color-container card-title list-group-item align-self-center">
                        <span>{clothing.color}</span>
                        <div className="list-color-display" style={{backgroundColor: clothing.color}}></div>
                    </div>
                    <div className="card-text list-group-item">
                        <span>{clothing.type}</span>
                        <span className="card-price">{clothing.price}&euro;</span>
                    </div>
                    <button className="btn card-btn list-group-item" onClick={() => setModalOrder(clothing)}>Select</button>
                </div>
            </div>
        </div>
    );
}

export default ListItem;