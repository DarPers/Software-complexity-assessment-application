
class AuthService {
    async postAuthData(_login, _password) {
        console.log("front");
        const data = {login: _login, password: _password}
        const response = await fetch('http://localhost:8888/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        console.log("front-1");
        return response;
    }
}

export default new AuthService()