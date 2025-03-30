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
  Row,
  Col,
  Tooltip
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  FileSearchOutlined,
  SearchOutlined,
  SortAscendingOutlined,
  FilterOutlined
} from '@ant-design/icons';
import { FiAlertCircle, FiCheckCircle, FiFileText, FiFilter } from 'react-icons/fi';

const { Title } = Typography;

const Viewapplicants = () => {
  // Mock data for loan applications
  const [applications, setApplications] = useState([
    {
      key: '1',
      name: 'Kwame Mensah',
      amount: 25000,
      type: 'Personal',
      status: 'New',
      submissionDate: '2025-03-20',
      email: 'kwame.mensah@example.com',
      phone: '+233 24-123-4567',
    },
    {
      key: '2',
      name: 'Abena Osei',
      amount: 350000,
      type: 'Mortgage',
      status: 'New',
      submissionDate: '2025-03-18',
      email: 'abena.osei@example.com',
      phone: '+233 27-234-5678',
    },
    {
      key: '3',
      name: 'Kofi Addo',
      amount: 15000,
      type: 'Auto',
      status: 'New',
      submissionDate: '2025-03-15',
      email: 'kofi.addo@example.com',
      phone: '+233 20-345-6789',
    },
  ]);

  // Function to handle assessment
  const handleAssess = (record) => {
    // Here you would typically make an API call to add the application to LoanMonitoring
    // For now, we'll just update the status
    setApplications(
      applications.map((app) =>
        app.key === record.key ? { ...app, status: 'Assessed' } : app
      )
    );
  };

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
      title: 'Contact Info',
      key: 'contact',
      render: (_, record) => (
        <div>
          <div>{record.email}</div>
          <div className="text-gray-500">{record.phone}</div>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'New' ? 'processing' : 'success';
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
          <Tooltip title="Assess Application">
            <Button 
              type="primary" 
              icon={<FileSearchOutlined />} 
              size="small" 
              onClick={() => handleAssess(record)}
              disabled={record.status === 'Assessed'}
            >
              Assess
            </Button>
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
            <FileSearchOutlined /> New Loan Applications
          </Title>
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
                  <Button type="primary" icon={<FiFileText />}>
                    Export
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        
        {/* Table */}
        <Col span={24}>
          <Card>
            <Table 
              columns={columns} 
              dataSource={applications} 
              pagination={{ pageSize: 5 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Viewapplicants;