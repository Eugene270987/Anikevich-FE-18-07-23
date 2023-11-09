import './Nav.scss'
import PageItem from './PageItem/PageItem';

function Nav () {
    const pages = [
       {name: 'Home', url: "#"},
       {name: 'About',url: "#"},
       {name: 'News', url: "#"},
       {name: 'Products', url: "#"},
       {name: 'Contacts', url: "#"},
    ];

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {pages.map((page, index) => (
                    <PageItem key={index} name={page.name} url={page.url} />
                ))}
            </ul>
        </nav>
    )
}

export default Nav;