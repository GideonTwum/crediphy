'use client'
import React, { useState } from 'react'
import Nav from '../components/Nav'
import { MdOutlineDashboard, MdLogout, MdAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutPanelTop } from "react-icons/lu";
import LoanMonitoring from '../components/LoanMonitoring';
import Viewapplicants from '../components/Viewapplicants';
import { useRouter } from 'next/navigation';

const MenuItem = ({ icon: Icon, label, isActive, onClick }) => (
  <div 
    onClick={onClick} 
    className={`cursor-pointer h-10 w-60 gap-2 rounded-sm flex items-center pl-4 transition-colors duration-200 ${
      isActive ? 'bg-[dodgerblue]/10 text-[dodgerblue]' : 'hover:bg-[dodgerblue]/5'
    }`}
  >
    <Icon className="text-lg" />
    <p className='text-sm font-medium'>{label}</p>
  </div>
);

const UserProfile = () => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
    <div className="flex flex-col items-end">
      <h2 className="text-lg font-semibold text-gray-800">Adwoa Mensah</h2>
      <p className="text-sm text-gray-600">Welcome back, Admin</p>
    </div>
    <div className="w-10 h-10 rounded-full bg-[dodgerblue]/10 flex items-center justify-center">
      <MdAccountCircle className="text-2xl text-[dodgerblue]" />
    </div>
  </div>
);

const LogoutPopover = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-20 left-4 bg-white rounded-lg shadow-lg border border-gray-200 p-3 w-48 z-50">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-600">Are you sure you want to logout?</p>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="flex-1 px-3 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
    const [active, setActive] = useState('loan-monitoring');
    const [showLogoutPopover, setShowLogoutPopover] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logging out...');
        setShowLogoutPopover(false);
        router.push('/');
    };

    const menuItems = [
        {
            id: 'loan-monitoring',
            label: 'Loan Application Monitoring',
            icon: MdOutlineDashboard,
            component: LoanMonitoring
        },
        {
            id: 'view-applicants',
            label: 'View Applicants',
            icon: LuLayoutPanelTop,
            component: Viewapplicants
        }
    ];

    const renderPage = () => {
        const currentItem = menuItems.find(item => item.id === active);
        return currentItem ? <currentItem.component /> : <LoanMonitoring />;
    };

    return (
        <div className='h-screen flex bg-[dodgerblue]/5'>
            <div className='h-full w-80 flex flex-col items-left p-10 gap-10 bg-white fixed shadow-lg'>
                <h1 className='text-xl font-bold text-[dodgerblue]'>DASHBOARD</h1>
                <div className='flex flex-col gap-2'>
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            icon={item.icon}
                            label={item.label}
                            isActive={active === item.id}
                            onClick={() => setActive(item.id)}
                        />
                    ))}
                    <div className='mt-auto pt-4 border-t relative'>
                        <MenuItem
                            icon={IoSettingsOutline}
                            label="Settings"
                            isActive={false}
                            onClick={() => {}}
                        />
                        <div className="relative">
                            <MenuItem
                                icon={MdLogout}
                                label="Logout"
                                isActive={false}
                                onClick={() => setShowLogoutPopover(!showLogoutPopover)}
                            />
                            <LogoutPopover
                                isOpen={showLogoutPopover}
                                onClose={() => setShowLogoutPopover(false)}
                                onLogout={handleLogout}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full w-full bg-[dodgerblue]/5 p-20 ml-80 overflow-auto'>
                <div className="mb-8">
                    <UserProfile />
                </div>
                {renderPage()}
            </div>
        </div>
    );
};

export default Dashboard;