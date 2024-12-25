import React, { useState } from 'react';
import { Table, Tag, Space, Button, Avatar, Tooltip } from 'antd';
import { MoreHorizontal, Edit2 } from 'lucide-react';

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
        if (type === 'prev') {
            return <span>Previous</span>;
        }
        if (type === 'next') {
            return <span>Next</span>;
        }
        return originalElement;
    };

    const columns = [
        {
            title: 'Staff Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Space>
                    <Avatar src={record.avatar} />
                    {text}
                </Space>
            ),
        },
        {
            title: 'Classrooms',
            dataIndex: 'classrooms',
            key: 'classrooms',
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
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
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
                    <Tooltip title="Edit">
                        <Button type="text" icon={<Edit2 size={16} />} />
                    </Tooltip>
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