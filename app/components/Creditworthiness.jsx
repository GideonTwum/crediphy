import React, { useState } from 'react';
import { 
  FiUser, 
  FiAlertCircle, 
  FiCheckCircle, 
  FiXCircle, 
  FiBarChart2, 
  FiPieChart, 
  FiArrowUp, 
  FiArrowDown, 
  FiEdit, 
  FiSave, 
  FiThumbsUp, 
  FiPercent,
  FiDollarSign,
  FiClock,
  FiSlash
} from 'react-icons/fi';
import { 
  RiMoneyDollarCircleLine, 
  RiTimeLine, 
  RiBankLine, 
  RiFileChartLine 
} from 'react-icons/ri';

const Creditworthiness = () => {
  // Mock applicant data
  const [applicant, setApplicant] = useState({
    id: 'APP-2023-03784',
    name: 'Sarah Johnson',
    aiScore: 78,
    confidenceLevel: 'High',
    traditionalScore: 710,
    riskFactors: [
      { id: 1, factor: 'High debt-to-income ratio', impact: 'high' },
      { id: 2, factor: 'Recent credit inquiries', impact: 'medium' },
      { id: 3, factor: 'Limited credit history length', impact: 'medium' },
    ],
    recommendedTerms: [
      { id: 1, recommendation: 'Increase interest rate by 0.5%', type: 'rate' },
      { id: 2, recommendation: 'Reduce loan amount by 15%', type: 'amount' },
      { id: 3, recommendation: 'Require additional collateral', type: 'condition' },
    ],
    adminComments: '',
  });

  // State for the comment input field
  const [comment, setComment] = useState('');
  const [isEditingComment, setIsEditingComment] = useState(false);

  // Handle comment submission
  const handleCommentSubmit = () => {
    setApplicant({ ...applicant, adminComments: comment });
    setIsEditingComment(false);
  };

  // Function to get color based on score
  const getScoreColor = (score) => {
    if (score >= 80) return '#4caf50'; // Green for good
    if (score >= 60) return '#ff9800'; // Orange for medium
    return '#f44336'; // Red for bad
  };

  // Function to render impact icon
  const renderImpactIcon = (impact) => {
    switch (impact) {
      case 'high':
        return <FiAlertCircle className="text-red-500" />;
      case 'medium':
        return <FiAlertCircle className="text-yellow-500" />;
      case 'low':
        return <FiAlertCircle className="text-blue-500" />;
      default:
        return null;
    }
  };

  // Function to render recommendation icon
  const renderRecommendationIcon = (type) => {
    switch (type) {
      case 'rate':
        return <FiPercent className="text-purple-500" />;
      case 'amount':
        return <FiDollarSign className="text-green-500" />;
      case 'condition':
        return <FiSlash className="text-orange-500" />;
      case 'term':
        return <FiClock className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
          <FiUser size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Creditworthiness Assessment</h1>
          <p className="text-gray-600">Applicant ID: {applicant.id} | {applicant.name}</p>
        </div>
      </div>

      {/* AI Credit Score */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-5 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">AI Credit Score</h2>
            <FiPieChart size={20} className="text-blue-500" />
          </div>
          <div className="flex items-center justify-center">
            <div 
              className="relative w-32 h-32 rounded-full flex items-center justify-center font-bold text-3xl"
              style={{ 
                background: `conic-gradient(${getScoreColor(applicant.aiScore)} ${applicant.aiScore}%, #e0e0e0 0)`,
                color: getScoreColor(applicant.aiScore)
              }}
            >
              {applicant.aiScore}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Score Range: 0-100</p>
            <div className="flex justify-between mt-2">
              <span className="text-red-500 text-xs">High Risk</span>
              <span className="text-green-500 text-xs">Low Risk</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-5 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">AI Confidence</h2>
            <FiBarChart2 size={20} className="text-blue-500" />
          </div>
          <div className="flex flex-col items-center justify-center h-40">
            <div className="text-center mb-2">
              <span className="text-2xl font-bold text-blue-600">{applicant.confidenceLevel}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
              <div 
                className="bg-blue-600 h-4 rounded-full"
                style={{ 
                  width: applicant.confidenceLevel === 'High' ? '85%' : 
                         applicant.confidenceLevel === 'Medium' ? '50%' : '25%' 
                }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              {applicant.confidenceLevel === 'High' 
                ? 'AI has high confidence in this assessment'
                : applicant.confidenceLevel === 'Medium'
                ? 'AI has moderate confidence in this assessment'
                : 'AI has low confidence in this assessment'}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-5 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Comparison</h2>
            <RiFileChartLine size={20} className="text-blue-500" />
          </div>
          <div className="flex flex-col items-center justify-center h-40">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm">AI Score: {applicant.aiScore}/100</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">Traditional Score: {applicant.traditionalScore}/850</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${(applicant.aiScore)}%` }}
              ></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${(applicant.traditionalScore / 850 * 100)}%` }}
              ></div>
            </div>
            <div className="mt-3 text-xs text-gray-500 text-center">
              {applicant.aiScore > (applicant.traditionalScore / 850 * 100) 
                ? 'AI assessment is more favorable than traditional'
                : 'Traditional score is more favorable than AI assessment'}
            </div>
          </div>
        </div>
      </div>

      {/* Risk Factors & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-5 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Key Risk Factors</h2>
            <FiAlertCircle size={20} className="text-yellow-500" />
          </div>
          <ul className="space-y-3">
            {applicant.riskFactors.map((factor) => (
              <li key={factor.id} className="flex items-start">
                <span className="mr-2 mt-1">{renderImpactIcon(factor.impact)}</span>
                <div>
                  <p className="text-gray-800">{factor.factor}</p>
                  <p className="text-xs text-gray-500 capitalize">{factor.impact} Impact</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-5 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Recommended Terms</h2>
            <RiMoneyDollarCircleLine size={20} className="text-green-500" />
          </div>
          <ul className="space-y-3">
            {applicant.recommendedTerms.map((term) => (
              <li key={term.id} className="flex items-start">
                <span className="mr-2 mt-1">{renderRecommendationIcon(term.type)}</span>
                <div>
                  <p className="text-gray-800">{term.recommendation}</p>
                  <p className="text-xs text-gray-500 capitalize">{term.type} Adjustment</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Admin Comments */}
      <div className="bg-gray-50 rounded-lg p-5 shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Admin Comments</h2>
          {!isEditingComment && (
            <button
              onClick={() => setIsEditingComment(true)}
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <FiEdit size={16} className="mr-1" />
              <span className="text-sm">Add Comment</span>
            </button>
          )}
        </div>
        
        {isEditingComment ? (
          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Add your assessment comments here..."
              rows={4}
            ></textarea>
            <div className="flex justify-end mt-3">
              <button
                onClick={() => setIsEditingComment(false)}
                className="mr-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleCommentSubmit}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
              >
                <FiSave size={16} className="mr-1" />
                Save Comment
              </button>
            </div>
          </div>
        ) : (
          <div className="min-h-16 p-3 bg-white rounded border border-gray-200">
            {applicant.adminComments ? (
              <p className="text-gray-700">{applicant.adminComments}</p>
            ) : (
              <p className="text-gray-400 italic">No comments added yet.</p>
            )}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
          <FiXCircle size={16} className="mr-2 text-red-500" />
          Reject
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
          <RiTimeLine size={16} className="mr-2 text-yellow-500" />
          Request More Info
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center">
          <FiCheckCircle size={16} className="mr-2" />
          Approve
        </button>
      </div>
    </div>
  );
};

export default Creditworthiness;