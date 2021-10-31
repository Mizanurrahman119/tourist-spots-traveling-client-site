import React, {useState, useEffect} from 'react';
import "./ManageServices.css"

const ManageService = () => {
    const [manages, setManages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/manages')
        .then(res => res.json())
        .then(data => setManages(data))
    },[]);

    const handleDelete = id => {
       const proceed = window.confirm("Are you sure, You want to delete");
       if(proceed) {
        const url =`http://localhost:5000/manages/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                alert('deleted successfull');
                const remaining = manages.filter(manage => manage._id !== id);
                setManages(remaining);
            }
        })
       }
    }
    return (
        <div>
            <h3 className="manage-heading">Manage Services</h3>
            <div className="manage-container">
                {
                    manages.map(manage => <div className="manages" key={manage._id}> <h4>{manage.name}</h4> <h5>{manage.price}</h5> <button onClick={() =>handleDelete(manage._id)} className="service-button">delete</button></div>)
                }
            </div>
        </div>
    );
};

export default ManageService;