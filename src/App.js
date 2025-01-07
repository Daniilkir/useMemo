import './App.css';
import Memo from './components/Memo';
import FilterList from './components/FilterList';
import Modal from './components/Modal';
import { useState } from 'react';
function App() {
  const [modalVisibility, setmodalVisibility] = useState(false)

  return (
    <div className="App">
      <Memo/>
      <FilterList/>

    </div>
  );
}

export default App;
