import React from 'react';
import "./Address.css"
import { useForm } from "react-hook-form";
import axios from 'axios';


const Address = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://chilling-blood-83343.herokuapp.com/booking', data)
        .then(res => {
            if(res.data.insertedId) {
                alert('successful yor booking !');
                reset();
            }
        })
    }
    return (
        <div className="add-address">
            <h1 className="address-header">Please Added Your Address</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="enter your name" />
                <textarea {...register("address")} placeholder="enter your address" />
                <input {...register('email')} placeholder="enter your email" />
                <input type="number" {...register("phone")} placeholder="contact number"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Address;