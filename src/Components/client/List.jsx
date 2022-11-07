import { useContext } from "react";
import ClotheContext from "../../Context/CargoContext";
import ListItem from "./ListItem";
import notFound from "../../assets/img/not-found.svg";

function List() {
  const { clothes } = useContext(ClotheContext);

  const isEmpty = () =>{
    if(clothes?.find(c => c.show === true))
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
      <h2 className="list-title-home">Clothes</h2>
      {clothes !== "error" ? (
        <>
          { isEmpty() }
          <div className="card-container">
            { clothes?.map(c => c.show ? <ListItem key={c.id} clothing={c} /> : null) }
          </div>
        </>
      ) : (
        <h2 className="list-fail">Failed to get clothes</h2>
      )}
    </div>
  );
}

export default List;
