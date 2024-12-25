import React from 'react';
import { Layout, Menu } from 'antd';
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    Calendar,
    MessageCircle,
    Clock,
    Receipt,
    FileText,
    Settings
} from 'lucide-react';

const { Sider } = Layout;

const Sidebar = () => {
    const menuItems = [
        { key: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { key: 'staff', icon: <Users size={20} />, label: 'Staff' },
        { key: 'classrooms', icon: <GraduationCap size={20} />, label: 'Classrooms' },
        { key: 'attendance', icon: <Calendar size={20} />, label: 'Attendance' },
        { key: 'activities', icon: <Clock size={20} />, label: 'Activities' },
        { key: 'communication', icon: <MessageCircle size={20} />, label: 'Communication' },
        { key: 'scheduling', icon: <Calendar size={20} />, label: 'Scheduling' },
        { key: 'billing', icon: <Receipt size={20} />, label: 'Billing' },
        { key: 'reports', icon: <FileText size={20} />, label: 'Reports' },
        { key: 'settings', icon: <Settings size={20} />, label: 'Settings' }
    ];

    return (
        <Sider
            theme="light"
            className="min-h-screen border-r border-gray-200"
            width={240}
        >
            <div className="p-4">
                <div className="flex items-center gap-2 mb-6">
                    <GraduationCap size={24} className="text-blue-600" />
                    <span className="text-lg font-semibold">WowCare</span>
                </div>
            </div>
            <Menu
                mode="inline"
                defaultSelectedKeys={['staff']}
                items={menuItems}
                className="border-r-0"
            />
        </Sider>
    );
};

export default Sidebar;