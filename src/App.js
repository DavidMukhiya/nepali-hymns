import './App.css';
import { Container } from 'reactstrap';
import HymnsList from './features/hymns/HymnsList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Container>
      {/* <div className="App"> */}
        <Header />
        {/* <HymnsCard campsite={CAMPSITES[0]} /> */}
        <HymnsList />
        <Footer />
      {/* </div> */}
    </Container>
  );
}

export default App;
