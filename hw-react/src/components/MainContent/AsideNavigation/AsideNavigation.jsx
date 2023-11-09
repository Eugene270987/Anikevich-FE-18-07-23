import './AsideNavigation.scss';
import CategoryItem from './CategoryItem/CategoryItem';
function AsideNavigation () {
    const categories = [
        { name: 'Cars', url: '#' },
        { name: 'Watches', url: '#' },
        { name: 'Brands', url: '#' },
        { name: 'Coins', url: '#' },
        { name: 'Shops', url: '#' },
    ];
    return (
        <aside className="sidebar">
            <ul className="category__list">
                {categories.map((category, index) => (
                    <CategoryItem key={index} name={category.name} url={category.url} />
                ))}
            </ul>
        </aside>
    )
}

export default AsideNavigation;