function Register() {
  return (
    <div>
      <h1>Register</h1>

      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" />
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;