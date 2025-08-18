// src/components/consultor/ConsultorLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import ConsultorSidebar from './ConsultorSidebar';
import DynamicHeader from '../common/DynamicHeader';

const ConsultorLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 flex-col">
      <DynamicHeader panelTitle="Panel de Consultor" />
      <div className="flex flex-1 overflow-hidden">
        <ConsultorSidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConsultorLayout;