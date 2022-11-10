import { useContext } from "react";
import noImage from '../../assets/img/no-image.svg';
import containerImg from '../../assets/img/container.svg';
import CargoContext from "../../Context/CargoContext";
import sizes from '../../data/sizes.js';

function ListItem({ container }){

    const { setModalBox, boxes } = useContext(CargoContext);
    const boxesCount = boxes?.filter(b => b.container_id === container.id);
    const boxesBaseWeight = boxesCount?.map(b => b.weight);
    
    return(
        <div onClick={() => setModalBox(container)} className={ (boxesCount.length !== sizes[container.sizeType]) ? 'list-item list-item-home' : 'list-item list-item-home-full'}>
            <img src={containerImg} alt='container'></img>
            <span>{container.id}</span>
            <span>{boxesCount.length}/{sizes[container.sizeType]}</span>
            <span>{boxesBaseWeight?.reduce((a, b) => a + b, 0)} kg</span>
        </div>
    );
}

export default ListItem;