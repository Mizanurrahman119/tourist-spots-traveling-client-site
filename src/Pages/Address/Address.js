import React from 'react';
import "./Address.css"
import { useForm } from "react-hook-form";


const Address = () => {
    const { register, handleSubmit } = useForm();
          const onSubmit = data => console.log(data);
    return (
                <div className="add-address">
                    <h2>Please Added Your Address</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName")} />
                        <input {...register("lastName")} />
                        <input {...register('email')} />
                        <input type="number" {...register("phone")} />
                        <input type="submit" />
                    </form>
                </div>
    );
};

export default Address;