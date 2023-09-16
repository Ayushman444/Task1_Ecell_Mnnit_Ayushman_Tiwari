import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Second } from './components/Second';
import { useState } from 'react';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('main');

  const handleComponentSelect = (componentName) => {
    setSelectedComponent(componentName);
  };
  return (
    <div>

        
        <Navbar onSelectComponent={handleComponentSelect} />


        {selectedComponent === 'main' ? <Main /> : <Second />}
      
      

    </div>
  );
}

export default App;
