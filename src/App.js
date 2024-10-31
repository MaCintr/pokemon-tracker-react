import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Item from './components/Item';
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
      <Item />
    </div>
  );
}

export default App;
