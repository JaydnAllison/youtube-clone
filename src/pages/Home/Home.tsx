import CategoriesList from "../../components/Home/CategoriesList";
import HomeSideBar from "../../components/HomeSideBar";
import './Home.css';

export default function Home(): JSX.Element {
    return (
        <div className='home-container'>
            <HomeSideBar/>
            <CategoriesList/>
        </div>
    )
}