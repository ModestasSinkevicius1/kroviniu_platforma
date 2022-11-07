import noImage from '../../assets/img/no-image.svg';
import del from '../../assets/img/x.svg';
import conImg from '../../assets/img/container.svg';
import { useContext } from 'react';
import CargoContext from '../../Context/CargoContext';

function Container({ container }){
    
    const { setModalDeleteContainer } = useContext(CargoContext);

    return(
        <div className="list-item">
            <img src={conImg} alt='container'></img>
            <span>{container.id}</span>
            <span>{container.sizeType}</span>
            <span>{container.size}</span>
            <button className='btn' onClick={() => setModalDeleteContainer(container)}>Delete container</button>
            <button className='btn'>Delete box</button>
        </div>
    );
}

export default Container;