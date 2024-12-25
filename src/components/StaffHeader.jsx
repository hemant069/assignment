import React from 'react';
import { Space, Input, Button, Select, Switch } from 'antd';
import { Plus, Search } from 'lucide-react';

const { Option } = Select;

const StaffHeader = () => {
    return (
        <div className="flex justify-between items-center mb-6">

            <div className='flex gap-5'>
                <div className="flex-1 max-w-xl">
                    <Input
                        prefix={<Search className="text-gray-400" size={16} />}
                        placeholder="Search Staff"
                        className="w-full"
                    />
                </div>
                <div className='flex gap-4'>
                    <Select defaultValue="active" style={{ width: 120 }}>
                        <Option value="active">Active</Option>
                        <Option value="inactive">Inactive</Option>
                    </Select>

                    <Button type="primary" >
                        Clear All
                    </Button>
                </div>
            </div>

            <Space>


                <div className="flex items-center gap-2">

                    <Switch size="small" />
                    <span className="text-sm text-gray-600">Show Inactive</span>
                </div>
            </Space>
        </div>
    );
};

export default StaffHeader;