import React from 'react';
import { Table, Tag, Space, Button, Avatar, Tooltip } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
import { MoreHorizontal, Edit2 } from 'lucide-react';
// import type { StaffMember } from '../types/staff';

const StaffTable = ({ data }) => {
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
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{
                total: data.length,
                pageSize: 8,
                showSizeChanger: false,
                showQuickJumper: true,
            }}
        />
    );
};

export default StaffTable;