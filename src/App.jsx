
import React from 'react'
import { Header } from './components/Header'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import StaffContent from './components/StaffContent'


const App = () => {
  return (
    <Layout className='min-h-screen'>
      {/* <Header /> */}
      <Sidebar />
      <Layout>
        <Header />
        <StaffContent />
      </Layout>
    </Layout>
  )
}

export default App