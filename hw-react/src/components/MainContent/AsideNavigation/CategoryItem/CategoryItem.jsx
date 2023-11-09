import './CategoryItem.scss'
import {useState} from "react";
function CategoryItem({ name, url }) {
    const [isClicked, setIsClicked] = useState(false);

    const bgClass = isClicked ? 'violet__item' : 'blue__item';

    const handleCategoryClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <li className="category__list-item" onClick={handleCategoryClick}>
            <a className={`category__list-link ${bgClass}`} href={url}>{name}</a>
        </li>
    );
}

export default CategoryItem;