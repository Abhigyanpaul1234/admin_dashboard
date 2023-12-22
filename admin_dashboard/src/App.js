/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Editor, Employees, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Line, Pyramid, Stacked } from './pages';
import { useStateContext } from './contexts/ContextProvider';

/*eslint-disable */
const { activeMenu } = useStateContext()
const App = () => (

  <div>
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content="settings" position="top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: 'blue', borderRadius: '60%' }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div className={
          `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
        </div>
        <div>
          <Routes>
            {/* dashboard */}
            <Route path="/ecommerce" element="ecommerce" />
            <Route path="/" element="ecommerce" />

            { /* pages */}
            <Route path="/orders" element="orders" />
            <Route path="/employees" element="employees" />
            <Route path="/customers" element="customers" />

            {/* apps */}
            <Route path="/kandan" element="kanban" />
            <Route path="/editor" element="editor" />
            <Route path="/calendar" element="calendar" />
            <Route path="/colorpicker" element="colorpicker" />

            {/* charts */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/colormapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
