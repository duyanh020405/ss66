import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Bai3.css'

export default function Bai3() {
    const bai3 = useSelector((state:any) =>{return state});

    return (
        <div>
            <h2>Bai 3</h2>
            <table className="job-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bai3.b3.map((item:any) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button>Sua</button>
                                <button>Xoa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
