class AuthService {

  static isAuth = false;

    static async postAuthData(_login, _password) {
        const data = {login: _login, password: _password}
        const response = await fetch('http://localhost:8888/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return response.json();
    }

    static async register(_login, _password, _password2, email) {
      const data = {login: _login, password: _password, repeatPassword: _password2, email:email}
      const response = await fetch('http://localhost:8888/auth/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
  }
}

export default AuthService;