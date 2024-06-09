type SideBarProps = {
    toggleSideBar: () => void
};

export default function SideBar({toggleSideBar}: SideBarProps): JSX.Element {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-container--toggle-sidebar-button'>
                    <button onClick={toggleSideBar}><i className="bi bi-three-dots-vertical"></i></button>
                </div>
        </div>
    )
}