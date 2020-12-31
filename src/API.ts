const baseUrl: string = 'https://research-stream.herokuapp.com';

export const apiCall = (endpoint: string): string => `${baseUrl}${endpoint}`;
