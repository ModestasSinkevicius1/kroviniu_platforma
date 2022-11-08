import { useContext } from "react";
import noImage from '../../assets/img/no-image.svg';
import containerImg from '../../assets/img/container.svg';
import CargoContext from "../../Context/CargoContext";
import sizes from '../../data/sizes.js';

function ListItem({ container }){

    const { setModalOrder, boxes } = useContext(CargoContext);
    
    return(
        <div className={ (boxes?.filter(b => b.container_id === container.id).length !== sizes[container.sizeType]) ? 'list-item list-item-home' : 'list-item list-item-home-full'}>
            <img src={containerImg} alt='container'></img>
            <span>{container.id}</span>
            <span>{boxes?.filter(b => b.container_id === container.id).length}/{sizes[container.sizeType]}</span>
        </div>
    );
}

export default ListItem;