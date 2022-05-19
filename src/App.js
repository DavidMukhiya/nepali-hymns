import './App.css';
import HymnsList from './features/hymns/HymnsList';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <HymnsCard campsite={CAMPSITES[0]} /> */}
      <HymnsList />
    </div>
  );
}

export default App;
