import { useContext } from "react";
import ListItem from "./ListItem";
import notFound from "../../assets/img/not-found.svg";
import CargoContext from "../../Context/CargoContext";

function List() {
  const { containers } = useContext(CargoContext);

  const isEmpty = () =>{
    if(containers?.find(c => c.show === true))
      return;
    return ( 
      <div className="list-container-result">
        <h2 className="list-result">Sorry requested item not found</h2>
        <img className="list-not-found-img" src={notFound} alt=''></img>
      </div>
    );
  }

  return (
    <div className="list">
      <h2 className="list-title-home">Items</h2>
      {containers !== "error" ? (
        <>
          { isEmpty() }
          <div className="card-container">
            { containers?.map(c => c.show ? <ListItem key={c.id} container={c} /> : null) }
          </div>
        </>
      ) : (
        <h2 className="list-fail">Failed to get clothes</h2>
      )}
    </div>
  );
}

export default List;
