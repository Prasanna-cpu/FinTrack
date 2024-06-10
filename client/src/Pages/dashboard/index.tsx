// @ts-ignore
import React from 'react';
import {useUser} from "@clerk/clerk-react";
import FinancialRecordForm from "./FinancialRecordForm.tsx";
import FinancialRecordList from "./FinancialRecordList.tsx";

const Dashboard = () => {


    const {user}=useUser()


    return (
        <div className="dashboard-container">
            <h1>
                Welcome {user?.firstName}!, Here are your finances
                <FinancialRecordForm></FinancialRecordForm>
                <FinancialRecordList></FinancialRecordList>
            </h1>
        </div>
    );
};

export default Dashboard;