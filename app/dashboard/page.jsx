'use client'
import React, { useState } from 'react'
import Nav from '../components/Nav'
import { MdOutlineDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Dashbaord from '../components/Dashbaord';
import { LuLayoutPanelTop } from "react-icons/lu";
import LoanMonitoring from '../components/LoanMonitoring';
import Creditworthiness from '../components/Creditworthiness';
import Viewapplicants from '../components/Viewapplicants';

const page = () => {
    const [active, setActive] = useState('loan-monitoring');
    const assignActive = (getvalue) => {
        setActive(getvalue);
    }
    const renderPage = () => {
        switch(active) {
            case 'loan-monitoring':
                return <LoanMonitoring />
            case 'creditworthiness':
                return <Creditworthiness />
            case 'view-applicants':
                return <Viewapplicants />
            default:
                return <LoanMonitoring />
        }
    }
  return (
    <div className=' h-screen flex bg-[dodgerblue]/5 '>
        <div className='h-full w-80 flex flex-col items-left p-10 gap-10 bg-white fixed'>
            <h1 className='text-xl font-bold '>DASHBOARD</h1>
            <div className='flex flex-col gap-2'>
                {/* <div onClick={() => assignActive('dashboard')} className='cursor-pointer h-10 w-60 gap-2 rounded-sm flex items-center pl-4 hover:bg-[dodgerblue]/5'>
                    <MdOutlineDashboard  />
                    <p className='text-sm '>Dashboard</p>
                </div> */}
                <div onClick={() => assignActive('loan-monitoring')} className='cursor-pointer h-10 w-60 gap-2 rounded-sm flex items-center pl-4 hover:bg-[dodgerblue]/5'>
                    <MdOutlineDashboard  />
                    <p className='text-sm '>Loan Application Monitoring</p>
                </div>
                {/* <div onClick={() => assignActive('creditworthiness')} className='cursor-pointer h-10 w-60 gap-2 rounded-sm flex items-center pl-4 hover:bg-[dodgerblue]/5'>
                <LuLayoutPanelTop />
                    <p className='text-sm '>Creditworthiness A Panel</p>
                </div> */}
                <div onClick={() => assignActive('view-applicants')} className='cursor-pointer h-10 w-60 gap-2 rounded-sm flex items-center pl-4 hover:bg-[dodgerblue]/5'>
                <LuLayoutPanelTop />
                    <p className='text-sm '>View Applicants</p>
                </div>

                <div className='cursor-pointer h-10 w-60 gap-2 rounded-sm flex items-center pl-4 hover:bg-[dodgerblue]/5'>
                    <IoSettingsOutline />
                    <p className='text-sm '>Settings</p>
                </div>
                <div className='cursor-pointer h-10 w-60 gap-2 rounded-sm flex items-center pl-4 hover:bg-[dodgerblue]/5'>
                    <MdLogout />
                    <p className='text-sm '>Logout</p>
                </div>
            </div>
        </div>
        <div className='h-full w-full bg-[dodgerblue]/5 p-20 ml-80'>
                {renderPage()}
        </div>
    </div>
  )
}

export default page