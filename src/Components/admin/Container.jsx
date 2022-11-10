import noImage from '../../assets/img/no-image.svg';
import del from '../../assets/img/x.svg';
import conImg from '../../assets/img/container.svg';
import { useContext } from 'react';
import CargoContext from '../../Context/CargoContext';
import { useState } from 'react';
import { useEffect } from 'react';

function Container({ container }){
    
    const { setModalDeleteContainer, boxes, setDeleteData } = useContext(CargoContext);

    const [box, setBox] = useState('');

    useEffect(() => {
        setBox(boxes?.find(b => b.container_id === container.id)?.id);
    }, [boxes, container])
    
    return(
        <div className="list-item">
            <img src={conImg} alt='container'></img>
            <span>{container.id}</span>
            <span>{container.sizeType}</span>
            <span>{container.size}</span>
            <button className='btn' onClick={() => setModalDeleteContainer(container)}>Delete container</button>
            <div className='list-select-input'>
            <select className='input-select' value={box} onChange={e => setBox(e.target.value)}>
                {boxes?.map(b => b.container_id === container.id? <option key={b.id} value={b.id}>{b.title}</option> : null)}
            </select>
            <button className='btn' onClick={() => setDeleteData({id: box, container_id: container.id})}>Delete box</button>
            </div>
        </div>
    );
}

export default Container;