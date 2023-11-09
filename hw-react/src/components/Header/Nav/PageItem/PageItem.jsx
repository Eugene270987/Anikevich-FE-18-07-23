import './PageItem.scss'
import {useState} from "react";

function PageItem ({name, url}) {
    const [isClicked, setIsClicked] = useState(false);

    const bgClass = isClicked ? 'violet__item' : 'blue__item';

    const handlePageClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <li className="navbar__list-item" onClick={handlePageClick}>
            <a className={`navbar__list-link ${bgClass}`} href={url}>{name}</a>
        </li>
    )
}


export default PageItem;
