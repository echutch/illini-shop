import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <h1>Illini Shop</h1>
            <nav>
                <a href="/">Button 1</a>
                <a href="/">Button 2</a>
                <a href="/">Button 3</a>
            </nav>

            <nav>
                <a href="/">Log in</a>
            </nav>
        </header>
        
    );
};

export default Header;