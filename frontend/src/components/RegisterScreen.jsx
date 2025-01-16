import './RegisterScreen.css'

const RegisterScreen = ({ onBackToLoginClick }) => (
    <main>
        <div className='register-screen'>
            <h2>Register</h2>
            <form>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="form-footer">
                <p>
                    Already have an account? <a onClick={onBackToLoginClick}>Log In</a>
                </p>
            </div>
        </div>
    </main>
);

export default RegisterScreen;