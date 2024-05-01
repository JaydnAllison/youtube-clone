import 'bootstrap-icons/font/bootstrap-icons.css';

const Categories: Array<string> = [
    'All',
    'Javascript',
    'Gaming',
    'Computers',
    'Video game development',
    'Startup company',
    'Media theories',
    'Mixes',
    'Music',
    'Wealth',
    'Thoughts'
];

export default function CategoriesList(): JSX.Element {
    return (
        <div className='categories-list-container'>
            {/* <button><i className="bi bi-chevron-compact-left"></i></button>
            <button><i className="bi bi-chevron-compact-right"></i></button> */}
            <ul className='categories-list'>
                {Categories.map(category => (
                    <li>
                        <button>{category}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}