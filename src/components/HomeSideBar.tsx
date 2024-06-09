import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './SideBar';

export default function HomeSideBar(): JSX.Element {
    const [sideBarActive, setSideBarActive] = useState<boolean>(false);
    const currentLocation = useLocation();

    function getImageClassName(className: string, targetPathName: string): string {
        return `${className}${currentLocation.pathname === targetPathName ? '-fill' : ''}`;
    }

    function toggleSideBar(): void {
        setSideBarActive(!sideBarActive);
    }

    return (
        sideBarActive ? 
        (
            <>
                <div className='dimmer'/>
                <SideBar toggleSideBar={toggleSideBar}/>
            </>
        ) :
        (
            <div className='home-side-bar-container'>
                <div className='home-side-bar--toggle-side-bar-button'>
                    <button onClick={toggleSideBar}><i className="bi bi-three-dots-vertical"></i></button>
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
    )
}