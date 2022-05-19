
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import hymnsLogo from './app/assets/img/hymns.png';


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
    </div>
  );
}

export default App;
