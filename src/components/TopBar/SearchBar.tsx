export default function SearchBar(): JSX.Element {
    return (
        <div className='search-bar-container'>
            <div className='search-bar-container--search-bar-wrapper'>
                <input type='text' placeholder="Search"/>
            <button className='search-bar-conatiner-search-button'><i className="bi bi-search"></i></button>
            </div>
            <button className='search-bar-container-mic-button'><i className="bi bi-mic-fill"></i></button>
        </div>
    )
}