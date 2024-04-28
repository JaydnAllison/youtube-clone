import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom';

export default function HomeSideBar(): JSX.Element {
    const currentLocation = useLocation();

    function getImageClassName(className: string, targetPathName: string): string {
        return `${className}${currentLocation.pathname === targetPathName ? '-fill' : ''}`;
    }

    return (
        <div className='home-side-bar-container'>
            <div className='home-side-bar--toggle-side-bar-button'>
                <button><i className="bi bi-three-dots-vertical"></i></button>
            </div>

            <nav className='home-side-bar'>
                <Link to='/' className='home-side-bar--link'>
                    <i className={getImageClassName("bi bi-house-door", '/')}></i>
                    <h1>Home</h1>
                </Link>
                <Link to='/shorts' className='home-side-bar--link'>
                    <i className={getImageClassName("bi bi-camera-video", '/shorts')}></i>
                    <h1>Shorts</h1>
                </Link>
                <Link to ='/subscriptions' className='home-side-bar--link'>
                    <i className={getImageClassName("bi bi-piggy-bank", '/subscriptions')}></i>
                    <h1>Subscriptions</h1>
                </Link>
                <Link to='/you' className='home-side-bar--link'>
                    <i className={getImageClassName("bi bi-person", '/you')}></i>
                    <h1>You</h1>
                </Link>
            </nav>
        </div>
    )
}