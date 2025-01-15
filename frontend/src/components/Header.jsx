import './Header.css'

const Header = ({onLoginClick}) => {
    return (
        <header className="header">
            <h1>Illini Shop</h1>
            <nav>
                <a href="/">Button 1</a>
                <a href="/">Button 2</a>
                <a href="/">Button 3</a>
            </nav>

            <nav>
                <button className="log-in" onClick={onLoginClick}>Log In</button>
            </nav>
        </header>
        
    );
};

export default Header;