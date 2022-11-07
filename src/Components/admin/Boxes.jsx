import { useContext } from "react";
import CargoContext from "../../Context/CargoContext";
import Box from "./Box";
import Container from "./Container";
import ListItem from "./Container";

function Boxes(){

    const { boxes } = useContext(CargoContext);

    return(
        <div className="list container">
            {boxes !== 'error' ?
            <div>  
                { boxes?.map(b => <Box key={b.id} box={b} />)}
            </div>
            : <h3>Failed to get data</h3>}                      
        </div>
    );
}

export default Boxes;