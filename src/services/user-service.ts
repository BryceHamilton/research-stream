const { REACT_APP_API_URL } = process.env;

interface UserService {
  login: (response: GoogleResponse) => Promise<User>;
  logout: () => void;
}

const handleResponse = async (response: Response): Promise<User> => {
  const data = await response.json();
  if (!response.ok && data.user) {
    if (response.status === 401) userService.logout();
    const error = data?.message || response.statusText;
    return Promise.reject(error);
  }
  return data.user;
};

const userService: UserService = {
  login: async (response: GoogleResponse): Promise<User> => {
    const user = response.profileObj;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user }),
    };

    return fetch(`${REACT_APP_API_URL}/auth/login`, requestOptions)
      .then(handleResponse)
      .then((user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      });
  },
  logout: () => localStorage.removeItem('user'),
};

// export const authHeader = () => {
//   // return authorization header with jwt token
//   const user = JSON.parse(localStorage.getItem('user') || '');

//   if (user?.token) {
//     return { Authorization: 'Bearer ' + user.token };
//   } else {
//     return {};
//   }
// };

export default userService;
