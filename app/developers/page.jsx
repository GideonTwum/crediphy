'use client'
import React, { useState } from 'react';
import { FaCode, FaKey, FaServer, FaShieldAlt, FaBook, FaDownload } from 'react-icons/fa';
import Nav from '../components/Nav';

const DevelopersPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: "Overview",
      icon: <FaBook className="text-2xl" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Crediphy API is an AI-powered credit assessment service that helps financial institutions evaluate the creditworthiness of borrowers. This documentation provides step-by-step guidance on how to integrate the API into your systems.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>AI-powered credit assessment</li>
              <li>Real-time risk evaluation</li>
              <li>Document verification</li>
              <li>Loan recommendations</li>
              <li>Webhook notifications</li>
            </ul>
          </div>
        </div>
      )
    },
    authentication: {
      title: "Authentication",
      icon: <FaKey className="text-2xl" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Request API Key</h3>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm">
              <p>POST https://api.crediphy.com/auth/request-key</p>
            </div>
            <p className="mt-4 text-gray-600">Send your institution ID and authentication credentials to obtain an API key.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Using API Key</h3>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm">
              <p>Authorization: Bearer YOUR_API_KEY</p>
            </div>
            <p className="mt-4 text-gray-600">Include the API key in the Authorization header of every request.</p>
          </div>
        </div>
      )
    },
    endpoints: {
      title: "API Endpoints",
      icon: <FaServer className="text-2xl" />,
      content: (
        <div className="space-y-8">
          {/* Risk Assessment API */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Risk Assessment API</h3>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm mb-4">
              <p>POST https://api.crediphy.com/assess-risk</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Request Body</h4>
                <pre className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  {JSON.stringify({
                    name: "John Doe",
                    dob: "1990-05-15",
                    income: 45000,
                    loan_amount: 10000,
                    employment_status: "full-time",
                    credit_history: {
                      previous_loans: 2,
                      repayment_history: "good"
                    }
                  }, null, 2)}
                </pre>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Response Example</h4>
                <pre className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  {JSON.stringify({
                    credit_score: 720,
                    risk_level: "low",
                    approval_recommendation: "Approved",
                    explanation: "Borrower has a strong repayment history and stable income."
                  }, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Verification API */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Verification API</h3>
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm mb-4">
              <p>POST https://api.crediphy.com/verify</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Request Body</h4>
                <pre className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  {JSON.stringify({
                    id_number: "GH12345678",
                    bank_statement: "base64_encoded_file",
                    employment_certificate: "base64_encoded_file"
                  }, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },
    security: {
      title: "Security & Compliance",
      icon: <FaShieldAlt className="text-2xl" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Security Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Data encryption (AES-256)</li>
              <li>PCI-DSS compliance</li>
              <li>GDPR compliance</li>
              <li>Regular security audits</li>
              <li>Secure data transmission</li>
            </ul>
          </div>
        </div>
      )
    },
    sdks: {
      title: "SDKs & Integration",
      icon: <FaCode className="text-2xl" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Available SDKs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 mb-2">Node.js SDK</h4>
                <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                  npm install crediphy-sdk
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 mb-2">Python SDK</h4>
                <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                  pip install crediphy-sdk
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-800 mb-2">Java SDK</h4>
                <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                  mvn install crediphy-sdk
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Nav /> */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Developer Documentation</h1>
              <p className="text-gray-600 mt-2">Integrate Crediphy API into your applications</p>
            </div>
            <button className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              <FaDownload />
              <span>Download SDK</span>
            </button>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <nav className="sticky top-24 bg-white rounded-lg shadow-sm p-4">
                <ul className="space-y-1">
                  {Object.entries(sections).map(([key, section]) => (
                    <li key={key}>
                      <button
                        onClick={() => setActiveSection(key)}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm ${
                          activeSection === key
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {section.icon}
                        <span>{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white rounded-lg shadow-sm p-6 lg:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  {sections[activeSection].icon}
                  {sections[activeSection].title}
                </h2>
              </div>
              {sections[activeSection].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersPage;