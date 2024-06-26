import { Link } from "react-router-dom";
import youtubeLogo from '../assets/YoutubeLogo.png';

type SideBarProps = {
    toggleSideBar: () => void
};

export default function SideBar({toggleSideBar}: SideBarProps): JSX.Element {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-container--navigation'>
                <div className='sidebar-container--toggle-sidebar-button'>
                    <button onClick={toggleSideBar}><i className="bi bi-three-dots-vertical"></i></button>
                </div>
                <Link to='/' className='youtube-logo'><img src={youtubeLogo} width={90}/></Link>
            </div>
        </div>
    )
}