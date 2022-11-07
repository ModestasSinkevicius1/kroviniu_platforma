import { useContext } from "react";
import { useState } from "react";
import ClotheContext from "../../Context/CargoContext";

function Filter(){

    const { setClothes, types } = useContext(ClotheContext);

    const maxPrice = [...Array(10)].map((p, i) => ({...p}, 10 * (i + 1)));
    const [price, setPrice] = useState('any');
    const [type, setType] = useState('any');
    const [search, setSearch] = useState('');

    const doFilter = (c) =>{
        try{
            const regStr = new RegExp(`^${search.toLowerCase()}`);
            if((c.type === type || type === 'any') && (c.price <= price || price === 'any') && (regStr.test(c.type) || search === ''))
                return true;
        }
        catch{
            return false;
        }      
        return false;
    }

    const filterItems = () =>{
        setClothes(clothe => clothe.map(c => doFilter(c) ? ({...c, show: true}) : ({...c, show: false})));
    }

    return(
        <div className="filter container">
            <div className="filter-search">
                <input type="search" className="search-input input-text" placeholder="Search here..." value={search} onChange={e => setSearch(e.target.value)}></input>
            </div>
            <div className="filter-inputs">
                <div className="filter-input-container">
                    <label>Type</label>
                    <select className="input-select" value={type} onChange={e => setType(e.target.value)}>
                        <option value={'any'}>Any</option>
                        {types.map((t, i) => <option key={i} value={t.toLowerCase()}>{t}</option>)}
                    </select>
                </div>
                <div className="filter-input-container">
                    <label>Max price</label>
                    <select className="input-select" value={price} onChange={e => setPrice(e.target.value)}>
                        <option value={'any'}>Any</option>
                        {maxPrice.map((p, i) => <option key={i} value={p}>{p} &euro;</option>)}
                    </select>
                </div>
                <button className="btn bg-light" onClick={filterItems}>Apply</button>
            </div>
        </div>
    )
}

export default Filter;