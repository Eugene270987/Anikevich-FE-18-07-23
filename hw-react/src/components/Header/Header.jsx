import './Header.scss'
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo></Logo>
                    <Nav></Nav>
                </div>
            </div>
        </header>
    )
}

export default Header;