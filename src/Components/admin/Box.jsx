import noImage from '../../assets/img/no-image.svg';
import del from '../../assets/img/x.svg';
import conImg from '../../assets/img/container.svg';
import { useContext } from 'react';
import CargoContext from '../../Context/CargoContext';

function Box({ box }){

    const { setModalDelete, setModalEdit } = useContext(CargoContext);
    
    return(
        <div className="list-item">
            <span>{box.id}</span>
            <span>{box.weight}</span>
            <span>{box.title}</span>
            <img src={box.image} alt='box'></img>
            <span>Flamable</span>
            <span>Degradable</span>
            <span>{box.container_id}</span>
            <button className='btn' onClick={() => setModalDelete(box)}>Delete box</button>
            <button className='btn' onClick={() => setModalEdit(box)}>Edit</button>
        </div>
    );
}

export default Box;