import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import ClotheContext from '../Context/CargoContext';
import { authConfig } from '../Functions/auth';
import Nav from './Nav';

function ShowNav() {

    const {status, setStatus, setRefresh} = useContext(ClotheContext);

    const {refreshStatus} = useContext(ClotheContext);

    useEffect(() => {
      axios.get('http://localhost:3007/login-check?role=admin', authConfig())
        .then(res => {
          setStatus(res.data.status);
          setRefresh(Date.now());
        })
    }, [refreshStatus, setStatus, setRefresh]);
    return <Nav status={status} />
}

export default ShowNav;