import React from 'react';
import { Layout, Typography, Card, Button } from 'antd';
import StaffHeader from './StaffHeader';
import StaffTable from './StaffTable';
// import type { StaffMember } from '../../types/staff';

const { Content } = Layout;
const { Title } = Typography;

const mockData = [
    {
        id: '1',
        name: 'Jessica Rhodes',
        avatar: 'https://i.pravatar.cc/150?u=jessica',
        classrooms: [
            { name: '1-Blue-D', code: 'BD', additions: ['3'] }
        ],
        designation: 'Admin',
        schedule: {
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        },
        phoneNumber: '(986) 027-1627'
    },
    {
        id: '2',
        name: 'Natasha White',
        avatar: 'https://i.pravatar.cc/150?u=natasha',
        classrooms: [
            { name: '2-Yellow-C', code: 'YC', additions: ['1'] }
        ],
        designation: 'Assistant Teacher',
        schedule: {
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            customSchedule: {
                day: 'Wednesday',
                time: '07:30 AM - 5:30 PM'
            }
        },
        phoneNumber: '(986) 027-1627'
    },
    {
        id: '3',
        name: 'Natasha ',
        avatar: 'https://i.pravatar.cc/150?u=natasha',
        classrooms: [
            { name: '2-Orange-C', code: 'YC', additions: ['1'] }
        ],
        designation: 'Direactor',
        schedule: {
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            customSchedule: {
                day: 'Wednesday',
                time: '07:30 AM - 5:30 PM'
            }
        },
        phoneNumber: '(986) 027-1627'
    },
    {
        id: '4',
        name: 'Billie White',
        avatar: 'https://i.pravatar.cc/150',
        classrooms: [
            { name: '2-Yellow-C', code: 'YC', additions: ['1'] }
        ],
        designation: 'Lead Teacher',
        schedule: {
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            customSchedule: {
                day: 'Wednesday',
                time: '07:30 AM - 5:30 PM'
            }
        },
        phoneNumber: '(986) 027-1627'
    },
    {
        id: '5',
        name: 'Eddie Barnes',
        avatar: 'https://i.pravatar.cc/150',
        classrooms: [
            { name: '2-Orange-C', code: 'YC', additions: ['1'] }
        ],
        designation: 'Lead Teacher',
        schedule: {
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            customSchedule: {
                day: 'Wednesday',
                time: '07:30 AM - 5:30 PM'
            }
        },
        phoneNumber: '(986) 027-1627'
    }

];

const StaffContent = () => {
    return (
        <Content className="p-6 bg-gray-50">

            <Card className="w-full">
                <div className='flex justify-between items-center'>
                    <div className="flex justify-between items-center mb-6">

                        <div className="flex gap-10 rounded-lg border p-5 items-center ">
                            <div className="text-sm">
                                Total Staff
                                <span className="ml-2 text-lg font-semibold text-blue-500">25</span>
                            </div>
                            <div>
                                <div className="h-6 w-[200px] bg-gray-200 rounded-full overflow-hidden">

                                    <div
                                        className="h-full bg-gray-300"
                                        style={{ width: '80%' }}
                                    />


                                </div>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <p className='border p-1 w-1 h-1 rounded-full bg-gray-400'></p>
                                        <p>Active(20)</p>
                                    </div>
                                    <div className='flex items-center gap-2 '>
                                        <p className='border p-1 w-1 h-1 rounded-full bg-yellow-300'></p>
                                        <p>Upcoming(5)</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div>

                        <Button className='p-5' type="primary" >
                            +  Add Staff
                        </Button>
                    </div>
                </div>

                <StaffHeader />
                <StaffTable data={mockData} />
            </Card>
        </Content>
    );
};

export default StaffContent;