import "./MainContent.scss";
import AsideNavigation from './AsideNavigation/AsideNavigation';
import Main from './Main/Main';
function MainContent () {
    return (
        <div className="main__content">
            <AsideNavigation></AsideNavigation>
            <Main></Main>
        </div>
    )
}

export default MainContent;