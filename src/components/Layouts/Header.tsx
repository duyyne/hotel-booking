import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="min-w-dvw bg-white shadow-lg">
            <div className="container mx-auto px-2.5">
                <div className="flex items-center justify-between">
                    <Link to={'/'}>
                        <img className="h-16 w-auto pr-5" src="../logo.png" alt="Hotel Booking" />
                    </Link>
                    <ul className="min-h-24 flex items-center justify-start">
                        <li className="px-2.5 ml-5">
                            <Link className="leading-24" to={'/'}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
