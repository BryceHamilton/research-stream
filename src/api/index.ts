const baseUrl: string =
  process.env.REACT_APP_API_URL || 'https://research-stream.herokuapp.com';

export const apiCall = (endpoint: string): string => `${baseUrl}${endpoint}`;
