import React from 'react';
import './ninjas.css';

const Ninjas = ({allNinjas, deleteNinja}) => {    
    const ninjaList = allNinjas.map(ninja => {
        return ninja.age >0 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
        ) : null;
    });

    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )   
}

export default Ninjas;