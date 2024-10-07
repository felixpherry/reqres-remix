import { ApiResponse } from 'types/api';
import { User } from 'types/user';
import { apiBaseUrl } from '~/constants/api';

export const getUsers = async () => {
  const response = await fetch(`${apiBaseUrl}/users?delay=2`);
  const result = (await response.json()) as ApiResponse<User[]>;
  return result.data;
};

export const getUser = async (id: number) => {
  const response = await fetch(`${apiBaseUrl}/users/${id}?delay=2`);
  const result = (await response.json()) as ApiResponse<User>;
  return result.data;
};
