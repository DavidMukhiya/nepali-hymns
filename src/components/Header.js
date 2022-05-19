import { Navbar, NavbarBrand } from 'reactstrap';
import hymnsLogo from '../app/assets/img/hymns.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand>
                <img src={hymnsLogo} alt='Nucamp logo' />
                <span><h1>Nepali Hymns</h1></span>
            </NavbarBrand>
        </Navbar>
    );
}

export default Header;