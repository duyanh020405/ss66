import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Bai2.css'

export default function Bai2() {
    const arr = useSelector((state:any) => {return state});

    return (
        <div className="job-container">
            <h2>Bai 2</h2>
            <table className="job-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.jobReuducer.map((item:any) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>False</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
