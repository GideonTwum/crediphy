'use client'
import React, { useState } from 'react';
import {
  Table,
  Tag,
  Space,
  Button,
  Badge,
  Card,
  Input,
  Typography,
  Tabs,
  Statistic,
  Row,
  Col,
  Tooltip,
  Modal,
  Descriptions
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  FileSearchOutlined,
  DashboardOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined,
  SearchOutlined,
  SortAscendingOutlined,
  FilterOutlined
} from '@ant-design/icons';
import { FiAlertCircle, FiCheckCircle, FiFileText, FiFilter } from 'react-icons/fi';

const { Title, Text } = Typography;

const LoanMonitoring = () => {
  // Mock data for loan applications
  const [loanApplications, setLoanApplications] = useState([
    {
      key: '1',
      name: 'John Doe',
      amount: 25000,
      type: 'Personal',
      aiDecision: 'Pre-approved',
      riskScore: 82,
      status: 'Awaiting Approval',
      submissionDate: '2025-03-20',
    },
    {
      key: '2',
      name: 'Sarah Johnson',
      amount: 350000,
      type: 'Mortgage',
      aiDecision: 'Needs Review',
      riskScore: 65,
      status: 'Awaiting Approval',
      submissionDate: '2025-03-18',
    },
    {
      key: '3',
      name: 'Michael Chen',
      amount: 15000,
      type: 'Auto',
      aiDecision: 'Pre-approved',
      riskScore: 78,
      status: 'Awaiting Approval',
      submissionDate: '2025-03-15',
    },
    {
      key: '4',
      name: 'Emily Wilson',
      amount: 50000,
      type: 'Business',
      aiDecision: 'Rejected',
      riskScore: 42,
      status: 'Rejected',
      submissionDate: '2025-03-10',
    },
    {
      key: '5',
      name: 'David Garcia',
      amount: 10000,
      type: 'Personal',
      aiDecision: 'Pre-approved',
      riskScore: 88,
      status: 'Approved',
      submissionDate: '2025-03-05',
    },
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  // Function to handle loan approval
  const handleApprove = (key) => {
    setLoanApplications(
      loanApplications.map((loan) =>
        loan.key === key ? { ...loan, status: 'Approved' } : loan
      )
    );
  };

  // Function to handle loan rejection
  const handleReject = (key) => {
    setLoanApplications(
      loanApplications.map((loan) =>
        loan.key === key ? { ...loan, status: 'Rejected' } : loan
      )
    );
  };

  // Function to request more information
  const handleRequestInfo = (key) => {
    const loan = loanApplications.find(loan => loan.key === key);
    setSelectedLoan(loan);
    setIsModalVisible(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedLoan(null);
  };

  // Filter data based on active tab
  const getFilteredData = () => {
    if (activeTab === 'all') return loanApplications;
    if (activeTab === 'pending') return loanApplications.filter(loan => loan.status === 'Awaiting Approval');
    if (activeTab === 'approved') return loanApplications.filter(loan => loan.status === 'Approved');
    if (activeTab === 'rejected') return loanApplications.filter(loan => loan.status === 'Rejected');
    if (activeTab === 'highRisk') return loanApplications.filter(loan => loan.riskScore < 60);
    if (activeTab === 'lowRisk') return loanApplications.filter(loan => loan.riskScore >= 60);
    return loanApplications;
  };

  // Calculate summary statistics
  const pendingCount = loanApplications.filter(loan => loan.status === 'Awaiting Approval').length;
  const approvedCount = loanApplications.filter(loan => loan.status === 'Approved').length;
  const rejectedCount = loanApplications.filter(loan => loan.status === 'Rejected').length;
  const highRiskCount = loanApplications.filter(loan => loan.riskScore < 60).length;

  // Table columns configuration
  const columns = [
    {
      title: 'Applicant Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Loan Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `$${amount.toLocaleString()}`,
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: 'Loan Type',
      dataIndex: 'type',
      key: 'type',
      filters: [
        { text: 'Personal', value: 'Personal' },
        { text: 'Auto', value: 'Auto' },
        { text: 'Mortgage', value: 'Mortgage' },
        { text: 'Business', value: 'Business' },
      ],
      onFilter: (value, record) => record.type.includes(value),
    },
    {
      title: 'AI Decision',
      dataIndex: 'aiDecision',
      key: 'aiDecision',
      render: (aiDecision) => {
        let color = '';
        let icon = null;
        
        if (aiDecision === 'Pre-approved') {
          color = 'green';
          icon = <FiCheckCircle />;
        } else if (aiDecision === 'Needs Review') {
          color = 'gold';
          icon = <FiAlertCircle />;
        } else {
          color = 'red';
          icon = <CloseCircleOutlined />;
        }
        
        return (
          <Tag color={color} icon={icon}>
            {aiDecision}
          </Tag>
        );
      },
    },
    {
      title: 'Risk Score',
      dataIndex: 'riskScore',
      key: 'riskScore',
      render: (score) => {
        let color = score > 80 ? 'green' : score > 60 ? 'gold' : 'red';
        return <Tag color={color}>{score}</Tag>;
      },
      sorter: (a, b) => a.riskScore - b.riskScore,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = '';
        let icon = null;
        
        if (status === 'Approved') {
          color = 'success';
          icon = <CheckCircleOutlined />;
        } else if (status === 'Rejected') {
          color = 'error';
          icon = <CloseCircleOutlined />;
        } else {
          color = 'processing';
          icon = <ExclamationCircleOutlined />;
        }
        
        return <Badge status={color} text={status} />;
      },
    },
    {
      title: 'Submission Date',
      dataIndex: 'submissionDate',
      key: 'submissionDate',
      sorter: (a, b) => new Date(a.submissionDate) - new Date(b.submissionDate),
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Approve">
            <Button 
              type="primary" 
              icon={<CheckCircleOutlined />} 
              size="small" 
              onClick={() => handleApprove(record.key)}
              disabled={record.status !== 'Awaiting Approval'}
            />
          </Tooltip>
          <Tooltip title="Reject">
            <Button 
              danger 
              icon={<CloseCircleOutlined />} 
              size="small" 
              onClick={() => handleReject(record.key)}
              disabled={record.status !== 'Awaiting Approval'}
            />
          </Tooltip>
          <Tooltip title="Request More Info">
            <Button 
              icon={<FileSearchOutlined />} 
              size="small" 
              onClick={() => handleRequestInfo(record.key)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Title level={2}>
            <DashboardOutlined /> Loan Applications Management
          </Title>
        </Col>
        
        {/* Summary Stats */}
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic 
              title="Pending Applications" 
              value={pendingCount} 
              valueStyle={{ color: '#1890ff' }}
              prefix={<ExclamationCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic 
              title="Approved Loans" 
              value={approvedCount} 
              valueStyle={{ color: '#3f8600' }}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic 
              title="Rejected Applications" 
              value={rejectedCount} 
              valueStyle={{ color: '#cf1322' }}
              prefix={<CloseCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic 
              title="High-Risk Applications" 
              value={highRiskCount} 
              valueStyle={{ color: '#fa8c16' }}
              prefix={<FiAlertCircle />}
            />
          </Card>
        </Col>
        
        {/* Search and Filter */}
        <Col span={24}>
          <Card className="mb-4">
            <Row gutter={16} align="middle">
              <Col xs={24} md={8}>
                <Input 
                  placeholder="Search applications" 
                  prefix={<SearchOutlined />} 
                />
              </Col>
              <Col xs={24} md={16}>
                <div className="flex justify-end">
                  <Button icon={<SortAscendingOutlined />} className="mr-2">
                    Sort
                  </Button>
                  <Button icon={<FiFilter />} className="mr-2">
                    Filter
                  </Button>
                  <Button type="primary" icon={<FileTextOutlined />}>
                    Export
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        
        {/* Tab Filter and Table */}
        <Col span={24}>
          <Card>
            <Tabs 
              defaultActiveKey="all" 
              onChange={setActiveTab}
              type="card"
              items={[
                {
                  key: "all",
                  label: "All Applications"
                },
                {
                  key: "pending",
                  label: (
                    <span>
                      <Badge status="processing" />
                      Pending
                    </span>
                  )
                },
                {
                  key: "approved",
                  label: (
                    <span>
                      <Badge status="success" />
                      Approved
                    </span>
                  )
                },
                {
                  key: "rejected",
                  label: (
                    <span>
                      <Badge status="error" />
                      Rejected
                    </span>
                  )
                },
                {
                  key: "highRisk",
                  label: (
                    <span>
                      <Badge color="#fa8c16" />
                      High-Risk
                    </span>
                  )
                },
                {
                  key: "lowRisk",
                  label: (
                    <span>
                      <Badge color="#52c41a" />
                      Low-Risk
                    </span>
                  )
                }
              ]}
            />
            
            <Table 
              columns={columns} 
              dataSource={getFilteredData()} 
              pagination={{ pageSize: 5 }}
              rowClassName={(record) => {
                if (record.riskScore < 60) return 'bg-red-50';
                return '';
              }}
            />
          </Card>
        </Col>
      </Row>
      
      <Modal
        title="Loan Assessment Details"
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>
        ]}
        width={800}
      >
        {selectedLoan && (
          <Descriptions bordered column={2}>
            <Descriptions.Item label="Applicant Name">{selectedLoan.name}</Descriptions.Item>
            <Descriptions.Item label="Loan Amount">${selectedLoan.amount.toLocaleString()}</Descriptions.Item>
            <Descriptions.Item label="Loan Type">{selectedLoan.type}</Descriptions.Item>
            <Descriptions.Item label="Risk Score">
              <Tag color={selectedLoan.riskScore > 80 ? 'green' : selectedLoan.riskScore > 60 ? 'gold' : 'red'}>
                {selectedLoan.riskScore}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="AI Decision">
              <Tag color={selectedLoan.aiDecision === 'Pre-approved' ? 'green' : selectedLoan.aiDecision === 'Needs Review' ? 'gold' : 'red'}>
                {selectedLoan.aiDecision}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Submission Date">{selectedLoan.submissionDate}</Descriptions.Item>
            <Descriptions.Item label="Assessment Summary" span={2}>
              <div className="space-y-2">
                <p>
                  Based on the applicant's profile and financial history, our AI system has determined the following:
                </p>
                <ul className="list-disc pl-5">
                  {selectedLoan.aiDecision === 'Pre-approved' && (
                    <>
                      <li>Strong credit history and stable income</li>
                      <li>Low debt-to-income ratio</li>
                      <li>Consistent employment history</li>
                      <li>Favorable payment history on existing loans</li>
                    </>
                  )}
                  {selectedLoan.aiDecision === 'Needs Review' && (
                    <>
                      <li>Moderate credit score with some recent improvements</li>
                      <li>Some inconsistencies in employment history</li>
                      <li>Higher than average debt-to-income ratio</li>
                      <li>Recent credit inquiries may need clarification</li>
                    </>
                  )}
                  {selectedLoan.aiDecision === 'Rejected' && (
                    <>
                      <li>Significant credit issues in recent history</li>
                      <li>High debt-to-income ratio exceeding recommended limits</li>
                      <li>Insufficient income documentation</li>
                      <li>Multiple recent loan applications</li>
                    </>
                  )}
                </ul>
                <p className="mt-2">
                  <strong>Recommendation:</strong> {selectedLoan.aiDecision === 'Pre-approved' 
                    ? 'Proceed with loan approval as the applicant meets all required criteria.'
                    : selectedLoan.aiDecision === 'Needs Review'
                    ? 'Request additional documentation and clarification on employment history and recent credit inquiries.'
                    : 'Reject the application due to high risk factors and insufficient documentation.'}
                </p>
              </div>
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default LoanMonitoring;