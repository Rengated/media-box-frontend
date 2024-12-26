import { $api } from "..";

interface User {
  email: string;
  password: string;
}

interface AuthResponse {
  username: string;
  accessToken: string;
  refreshToken: string;
}

interface RegisterBody {
  username: string;
  email: string;
  password: string;
}

export const login = async (data: User): Promise<AuthResponse> => {
  return await $api.post("/auth/login", data).then((res) => res.data);
};

export const register = async (data: RegisterBody): Promise<RegisterBody> => {
  return await $api.post("/auth/register", data).then((res) => res.data);
};
