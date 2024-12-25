import React from 'react'
import { Layout, Avatar, Badge, Button, Input, Menu } from 'antd';
import { Bell, ChevronDown, Mail, Search } from 'lucide-react';
const { Header: AntHeader } = Layout;
export const Header = () => {


    return (
        <div className=''>
            <div>
                <AntHeader className="bg-white flex items-center gap-4 border-b border-gray-200">
                    <div className='flex w-full items-center justify-between'>
                        <div className='flex gap-2 items-center pr-[10rem] '>
                            <p className='text-lg font-semibold w-full '>Small World</p>
                            <div>
                                <ChevronDown />
                            </div>
                        </div>
                        <div className='w-[30rem]'>
                            <Input
                                prefix={<Search className="text-gray-400" size={16} />}
                                placeholder=""
                                className=""
                            />
                        </div>
                        <div className='flex'>
                            <Button type="text" className="flex items-center">
                                <Badge count={3} size="small">
                                    <Mail size={20} className="text-gray-600" />
                                </Badge>
                            </Button>
                            <Button type="text" className="flex items-center">
                                <Badge count={5} size="small">
                                    <Bell size={20} className="text-gray-600" />
                                </Badge>
                            </Button>
                            <div className="flex items-center gap-3 ml-4">

                                <Avatar src="https://i.pravatar.cc/150" size={40} />

                                <div className='flex items-center w-[8rem]'>
                                    <div className="text-right">
                                        <div className="text-sm font-medium">Anna Smith</div>
                                        <div className="text-xs text-gray-500">Admin</div>

                                    </div>
                                    <div>
                                        <ChevronDown />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </AntHeader>
            </div>
            <div className='ml-12 font-semibold'>
                <p>Staff > Overview</p>
            </div>
        </div>
    )
}
