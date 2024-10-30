import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='main-div'>
      <div id="grid">
      </div>
      <Header/>
      <SearchBar/>
      <div className='filters-div'>
      <Filter title='Type'/>
      <Filter title='Generation'/>
      </div>
    </div>
  );
}

export default App;
