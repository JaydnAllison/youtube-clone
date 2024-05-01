import SearchBar from "./TopBar/SearchBar";
import TopBarNavigation from "./TopBar/TopBarNavigation";
import youtubeLogo from '../assets/YoutubeLogo.png';
import { Link } from "react-router-dom";

export default function TopBar(): JSX.Element {
    return (
        <div className='top-bar-container'>
            <Link to='/' className='youtube-logo'><img src={youtubeLogo} width={90}/></Link>
            <SearchBar/>
            <TopBarNavigation/>
        </div>
    )
}