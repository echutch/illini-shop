import './Login.css'
const LoginScreen = ({ onSignUpClick }) => (
    <main>
        <div className="login-screen">
  <h2>Log In</h2>
  <form>
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
    </div>
    <button type="submit">Submit</button>
  </form>
  <div className="form-footer">
    <p>
      Don't have an account? <a onClick={onSignUpClick}>Sign Up</a>
    </p>
  </div>
</div>

    </main>
);

export default LoginScreen;