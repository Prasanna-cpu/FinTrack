//@ts-ignore
import React, {useState} from 'react';

import {useUser} from "@clerk/clerk-react";

const FinancialRecordForm = () => {

    const [desc,setDesc]=useState<String>("")
    const [amount,setAmount]=useState<String>("")
    const [category,setCategory]=useState<String>("")
    const [paymentMethod,setPaymentMethod]=useState<String>("");

    const {user}=useUser()

    function handleSubmitEvent(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        // @ts-ignore

         // @ts-ignore
        const newRecord = {
            userId: user?.id,
            date: new Date(),
            description: desc,
            amount: parseFloat(amount),
            category:category,
            paymentMethod:paymentMethod,

        };

        setDesc("")
        setAmount("")
        setCategory("")
        setPaymentMethod("")



    }


    return (
        <div className="form-container">
            <form onSubmit={handleSubmitEvent}>
                <div className='form-field'>
                    <label>Description:</label>
                    <input type='text' required className='input' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                </div>

                <div className='form-field'>
                    <label>Amount:</label>
                    <input type='number' required className='input' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>

                <div className='form-field'>
                    <label>Category:</label>
                    <select required className='input' value={category} onChange={(e)=>setCategory(e.target.value)} >
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className='form-field'>
                    <label>Payment Method:</label>
                    <select required className='input' value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
                        <option value="">Select Payment Method</option>
                        <option value="Card">Credit Card/Debit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="UPI">UPI</option>
                        <option value="Transfer">Bank Transfer</option>
                    </select>
                </div>

                <button type='submit'>Add Financial Record</button>


            </form>
        </div>
    );
};

export default FinancialRecordForm;