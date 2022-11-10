import './App.css';
import ClotheContext from './Context/CargoContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Components/client/Home.jsx';
import Create from './Components/admin/Create';
import MyOrders from './Components/Orders/MyOrders';
import { authConfig } from './Functions/auth.js';
import { LoginPage, LogoutPage, RequireAuth } from './Components/Auth/Auth';
import types from './data/sizes.js';
import CreateContainer from './Components/admin/CreateContainer';

// const reList = data => {
//   const d = new Map();
//   data.forEach(line => {
//       if (d.has(line.title)) {
//           d.set(line.title, [...d.get(line.title), line]);
//       } else {
//           d.set(line.title, [line]);
//       }
//   });
//   return [...d].map((d1, i) => ([...d1, {show: true}]));
//   //or
//   return [...d];
// }

function App() {

  const [clothes, setClothes] = useState(null);

  const [containers, setContainers] = useState(null);
  const [freeContainers, setFreeContainers] = useState(null);
  const [boxes, setBoxes] = useState(null);
  
  const [stats, setStats] = useState(null);

  const [saveContainer, setSaveContainer] = useState(null);
  const [saveBox, setSaveBox] = useState(null);
  
  const [deleteData, setDeleteData] = useState(null);
  const [deleteContainer, setDeleteContainer] = useState(null);

  const [modalBox, setModalBox] = useState(null);
  const [modalEdit, setModalEdit] = useState(null);
  const [modalDelete, setModalDelete] = useState(null);
  const [modalDeleteContainer, setModalDeleteContainer] = useState(null);

  const [newEdit, setNewEdit] = useState(null);

  const [refresh, setRefresh] = useState(Date.now());
  const [refreshStatus, setRefreshStatus] = useState(Date.now());

  const [deleteOrder, setDeleteOrder] = useState(null);
  const [updateOrder, setUpdateOrder] = useState(null);

  const [status, setStatus] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  const [ordersCount, setOrdersCount] = useState(null);

// GET
  useEffect(()=>{
    if(status === 1){
        return;
    }
    axios.get('http://localhost:3007/containers', authConfig())
    .then(res => {
      setContainers(res.data.map((d, i) => ({...d, show: true, row: i})))
    })
    .catch(_ => setContainers('error'));
  }, [refresh, status]);

  // GET BOXES
  useEffect(()=>{
    if(status === 1){
        return;
    }
    axios.get('http://localhost:3007/boxes', authConfig())
    .then(res => {
      setBoxes(res.data.map((d, i) => ({...d, show: true, row: i})))
    })
    .catch(_ => setBoxes('error'));
  }, [refresh, status]);

  // GET FREE CONTAINERS
  useEffect(()=>{
    if(status === 1){
        return;
    }
    axios.get('http://localhost:3007/containers/free', authConfig())
    .then(res => {
      setFreeContainers(res.data.map((d, i) => ({...d, show: true, row: i})))
    })
    .catch(_ => setFreeContainers('error'));
  }, [refresh, status]);


//   useEffect(()=>{
//     if(status === 1){
//       return;
//     }
//     axios.get('http://localhost:3007/orders/count', authConfig())
//     .then(res => {
//       setOrdersCount(res.data);
//     })
//     .catch(_ => setOrdersCount('error'));
//   }, [refresh, status])

//   useEffect(()=>{
//     if(status === 1){
//       return;
//     }
//     axios.get('http://localhost:3007/orders/sum', authConfig())
//     .then(res => {
//       setStats(res.data);
//     })
//     .catch(_ => setStats('error'));
//   }, [refresh, status])

//CREATE
useEffect(()=>{
  if(saveContainer === null){
    return;
  }
  axios.post('http://localhost:3007/containers', saveContainer, authConfig())
  .then(res => setRefresh(Date.now()));
}, [saveContainer]);

//CREATE BOX
useEffect(()=>{
  if(saveBox === null){
    return;
  }
  axios.post('http://localhost:3007/boxes', saveBox, authConfig())
  .then(res => setRefresh(Date.now()));

  axios.put('http://localhost:3007/containers/sum/' + saveBox.container_id, saveBox, authConfig())
  .then(res => setRefresh(Date.now()));
}, [saveBox]);

// //CREATE ORDER
// useEffect(()=>{
//   if(newOrder === null){
//     return;
//   }
//   axios.post('http://localhost:3007/orders', newOrder, authConfig())
//   .then(res => setRefresh(Date.now()));
// }, [newOrder]);

//UPDATE BOX
useEffect(()=>{
  if(newEdit === null){
    return;
  }
  axios.put('http://localhost:3007/boxes/' + newEdit.id, newEdit, authConfig())
  .then(res => setRefresh(Date.now()));

  axios.put('http://localhost:3007/containers/sum/' + newEdit.container_id, newEdit, authConfig())
  .then(res => setRefresh(Date.now()));

  axios.put('http://localhost:3007/containers/sub/' + newEdit.old_container_id, newEdit, authConfig())
  .then(res => setRefresh(Date.now()));
}, [newEdit]);

//DELETE
useEffect(() => {
  if (null === deleteData) {
      return;
  }
  axios.delete('http://localhost:3007/boxes/'+ deleteData.id, authConfig())
  .then(res => setRefresh(Date.now()));
  console.log(deleteData);
  axios.put('http://localhost:3007/containers/sub/' + deleteData.container_id, deleteData, authConfig())
  .then(res => setRefresh(Date.now()));
}, [deleteData]);

//DELETE CONTAINER
useEffect(() => {
  if (null === deleteContainer) {
      return;
  }
  axios.delete('http://localhost:3007/containers/'+ deleteContainer.id, authConfig())
  .then(res => setRefresh(Date.now()));
}, [deleteContainer]);

// useEffect(() => {
//   if (null === deleteOrder) {
//       return;
//   }
//   axios.delete('http://localhost:3007/orders/'+ deleteOrder.id, authConfig())
//   .then(res => setRefresh(Date.now()));
// }, [deleteOrder]);

  return (
    <BrowserRouter>
    <ClotheContext.Provider value={{
      clothes,
      containers,
      freeContainers,
      boxes,
      setClothes,
      setSaveContainer,
      setSaveBox,
      setDeleteData,
      setDeleteContainer,
      setModalBox,
      setModalEdit,
      setModalDelete,
      setModalDeleteContainer,
      modalBox,
      modalEdit,
      modalDelete,
      modalDeleteContainer,
      setNewEdit,
      setDeleteOrder,
      refreshStatus,
      status,
      setStatus,
      setUpdateOrder,
      setRefresh,
      stats,
      types,
      setCurrentPage,
      currentPage,
      ordersCount,
      refresh,
    }}>
      <div className="App">
        <header className="App-header">
          {/* <ShowNav /> */}
          <Routes>
            <Route path='/' element={<LoginPage setRefreshStatus={setRefreshStatus} />}> </Route>
            <Route path='/login' element={<LoginPage setRefreshStatus={setRefreshStatus} />}> </Route>
            <Route path='/logout' element={<LogoutPage setRefreshStatus={setRefreshStatus} />}> </Route>
            <Route path='/home' element={<RequireAuth role='client'><Home /></RequireAuth>}></Route>
            <Route path='/home/boxes' element={<RequireAuth role='admin'><Create /></RequireAuth>}></Route>
            <Route path='/home/containers' element={<RequireAuth role='admin'><CreateContainer /></RequireAuth>}></Route>
          </Routes>
        </header>
      </div>
    </ClotheContext.Provider>
    </BrowserRouter>
  );
}

export default App;
