import SearchBar from "./TopBar/SearchBar";
import TopBarNavigation from "./TopBar/TopBarNavigation";

export default function TopBar(): JSX.Element {
    return (
        <div className='top-bar-container'>
            <div>
                Logo
            </div>
            <SearchBar/>
            <TopBarNavigation/>
        </div>
    )
}