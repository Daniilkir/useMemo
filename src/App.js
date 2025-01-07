import './App.css';
import Memo from './components/Memo';
import FilterList from './components/FilterList';
import Modal from './components/Modal';
import { useState } from 'react';
function App() {
  const [modalVisibility, setmodalVisibility] = useState(false)

  return (
    <div className="App">
      <Memo></Memo>
      <FilterList modalVisibility={setmodalVisibility}></FilterList>
      {modalVisibility &&
        <Modal modalVisibility={setmodalVisibility} />}
    </div>
  );
}

export default App;
