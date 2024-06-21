import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import b5 from '../reducers/bai5'; // Ensure this import is necessary

export default function Bai5() {
    const bai5 = useSelector((state:any) =>{return state});
    const dispatch = useDispatch();

    const show2 = () => {
        dispatch({ type: 'show2' });
    };

    return (
        <div>
            <h2>Bai 5</h2>
            <div style={{}}>
                [{bai5.b5.map((item:any, index:any) => (
                    <p key={index}>{item}</p>
                ))}]
            </div>
            <button onClick={show2}>SHOW</button>
        </div>
    );
}
