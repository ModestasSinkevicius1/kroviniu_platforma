import { useContext } from "react";
import CargoContext from "../../Context/CargoContext";
import Container from "./Container";
import ListItem from "./Container";

function Containers(){

    const { containers } = useContext(CargoContext);

    return(
        <div className="list container">
            {containers !== 'error' ?
            <div>  
                { containers?.map(c => <Container key={c.id} container={c} />)}
            </div>
            : <h3>Failed to get data</h3>}                      
        </div>
    );
}

export default Containers;