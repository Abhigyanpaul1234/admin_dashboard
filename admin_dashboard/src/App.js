import './App.css';
import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { useStateContext } from './contexts/ContextProvider';
import { Area, Bar, ColorMapping, Financial, Line, Pie, Pyramid, Stacked } from './pages';

/* eslint-disable no-unused-vars */

/*eslint-disable */
const App = () => {


  const { activeMenu } = useStateContext()
return(
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
            <Route path="/" element="ecommerce"  />

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
)
}

export default App;
