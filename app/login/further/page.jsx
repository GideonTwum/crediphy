'use client'
import React from 'react'

const FurtherPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        window.location.href = '/payment';
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Institution Information</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700">
                            Institution's Legal Business Name
                        </label>
                        <input
                            type="text"
                            id="institutionName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter legal business name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="institutionType" className="block text-sm font-medium text-gray-700">
                            Type of Financial Institution
                        </label>
                        <select
                            id="institutionType"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select institution type</option>
                            <option value="commercial_bank">Commercial Bank</option>
                            <option value="microfinance">Microfinance Institution</option>
                            <option value="credit_union">Credit Union</option>
                            <option value="lending_platform">Lending Platform</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div id="otherTypeContainer" className="hidden">
                        <label htmlFor="otherType" className="block text-sm font-medium text-gray-700">
                            Specify Other Institution Type
                        </label>
                        <input
                            type="text"
                            id="otherType"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Please specify"
                        />
                    </div>
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Headquarters Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter country"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Headquarters City
                        </label>
                        <input
                            type="text"
                            id="city"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter city"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                            Institution Website URL
                        </label>
                        <input
                            type="url"
                            id="website"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://www.example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Your Role in Institution
                        </label>
                        <select
                            id="role"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select a role</option>
                            <option value="manager">Manager</option>
                            <option value="loan_officer">Loan Officer</option>
                            <option value="admin">Administrator</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Complete Registration
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FurtherPage 