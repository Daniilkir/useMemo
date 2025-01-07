import './App.css';
import Memo from './components/Memo';
import FilterList from './components/FilterList';
import Counter from './components/Counter/Counter';
import GitHubList from './components/GitHubList';
import CounterHookLibrary from './components/CounterHookLibrary';
import SliderHookLibrary from './components/SliderHookLibrary';

function App() {

  return (
    <div className="App">
      <Memo/>
      <Counter/>
      {/* <FilterList/> */}
      <GitHubList/>
      {/* <CounterHookLibrary/> */}
      {/* <SliderHookLibrary/> */}

    </div>
  );
}

export default App;
