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
import { AppstoreAddOutlined, SettingFilled } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
    const menuItems = [
        { key: 'dashboard', icon: <LayoutDashboard size={20} color='white' />, label: 'Dashboard' },
        { key: 'staff', icon: <Users size={20} color='white' />, label: 'Staff' },
        { key: 'classrooms', icon: <GraduationCap size={20} color='white' />, label: 'Classrooms' },
        { key: 'attendance', icon: <Calendar size={20} color='white' />, label: 'Attendance' },
        { key: 'activities', icon: <AppstoreAddOutlined style={{ fontSize: '25px', color: 'white' }} />, label: 'Activities' },
        { key: 'communication', icon: <MessageCircle size={20} color='white' />, label: 'Communication' },
        { key: 'scheduling', icon: <Calendar size={20} color='white' />, label: 'Scheduling' },
        { key: 'billing', icon: <Receipt size={20} color='white' />, label: 'Billing' },
        { key: 'reports', icon: <FileText size={20} color='white' />, label: 'Reports' },
        { key: 'settings', icon: <Settings size={20} color='white' />, label: 'Settings' }
    ];

    return (
        <Sider
            theme="light"
            className="min-h-screen border-r border-gray-200 bg-blue-600"
            width={130}
        >
            <div className="p-4">
                <div className="flex flex-col items-center gap-2 mb-6">
                    <GraduationCap size={24} className="text-white" />
                    <p className="text-lg  font-semibold text-white">Wow! Care</p>
                </div>
            </div>
            <nav >
                {menuItems.map((item) => (
                    <button
                        key={item.key}
                        className="w-[8rem]  py-3 flex flex-col  items-center  hover:bg-blue-950 hover:rounded-lg transition-colors"
                    >
                        <div className="">{item.icon}</div>
                        <span className="text-sm text-white">{item.label}</span>
                    </button>
                ))}
            </nav>
        </Sider>
    );
};

export default Sidebar;