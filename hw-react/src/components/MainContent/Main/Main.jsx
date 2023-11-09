import './Main.scss'
import SectionHero from './SectionHero/SectionHero';
import SectionProducts from './SectionProducts/SectionProducts';
import SectionPromo from './SectionPromo/SectionPromo';
function Main () {
    return (
        <main className="main">
            <SectionHero></SectionHero>
            <SectionPromo></SectionPromo>
            <SectionProducts></SectionProducts>
        </main>
    )
}

export default Main;