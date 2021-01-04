import { api } from '../api';

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

    return fetch(api('/auth/login'), requestOptions)
      .then(handleResponse)
      .then((user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      });
  },
  logout: () => localStorage.removeItem('user'),
};

export default userService;
