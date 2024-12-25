import React, { useState } from 'react';
import { Table, Tag, Space, Button, Avatar, Tooltip } from 'antd';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';

const StaffTable = ({ data }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') return <span>Previous</span>;
        if (type === 'next') return <span>Next</span>;
        return originalElement;
    };

    const customSorterIcon = () => <ArrowUpDown size={16} className="text-gray-400" />;

    const columns = [
        {
            title: (
                <Space>
                    Staff Name
                    {/* <ArrowUpDown size={16} className="text-gray-400" /> */}
                </Space>
            ),
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            showSorterTooltip: customSorterIcon,
            // sortDirections: ['ascend', 'descend', 'ascend'],
            render: (text, record) => (
                <Space>
                    <Avatar src={record.avatar} />
                    {text}
                </Space>
            ),
        },
        {
            title: (
                <Space>
                    Classrooms
                    {/* <ArrowUpDown size={16} className="text-gray-400" /> */}
                </Space>
            ),
            dataIndex: 'classrooms',
            key: 'classrooms',
            sorter: (a, b) => a.classrooms[0].name.localeCompare(b.classrooms[0].name),
            showSorterTooltip: false,
            sortDirections: ['ascend', 'descend', 'ascend'],
            render: (classrooms) => (
                <Space wrap>
                    {classrooms.map((classroom) => (
                        <Tag color="blue" key={`${classroom.code}`}>
                            {classroom.name}
                            {classroom.additions?.map((addition) => (
                                <Tag color="green" key={`${classroom.code}-${addition}`}>+{addition}</Tag>
                            ))}
                        </Tag>
                    ))}
                </Space>
            ),
        },
        {
            title: (
                <Space>
                    Designation
                    {/* <ArrowUpDown size={16} className="text-gray-400" /> */}
                </Space>
            ),
            dataIndex: 'designation',
            key: 'designation',
            sorter: (a, b) => a.designation.localeCompare(b.designation),
            showSorterTooltip: false,
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Schedule',
            dataIndex: 'schedule',
            key: 'schedule',
            render: (schedule) => (
                <Space direction="vertical">
                    <Space>
                        {schedule.days.map((day) => (
                            <Tag color="purple" key={day}>{day}</Tag>
                        ))}
                    </Space>
                    {schedule.customSchedule && (
                        <Tag color="orange">{schedule.customSchedule.time}</Tag>
                    )}
                </Space>
            ),
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Tooltip title="More">
                        <Button type="text" icon={<MoreHorizontal size={16} />} />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    return (
        <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            rowKey="id"
            showSorterTooltip={false}
            pagination={{
                total: data.length,
                pageSize: 20,
                showSizeChanger: false,
                itemRender: itemRender,
                showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} Staff`,
                style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
            }}
        />
    );
};

export default StaffTable;