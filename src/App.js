import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import hymnsLogo from './app/assets/img/hymns.png';
//import HymnsCard from './features/hymns/HymnsCard';
//import { CAMPSITES } from './app/shared/CAMPSITES';
import HymnsList from './features/hymns/HymnsList';


function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand>
            <img src={hymnsLogo} alt='Nucamp logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      {/* <HymnsCard campsite={CAMPSITES[0]} /> */}
      <HymnsList />
    </div>
  );
}

export default App;
