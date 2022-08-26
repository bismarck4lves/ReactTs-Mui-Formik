export interface PostSingInProps {
  username: string;
  password: string;
}

export interface JWTCredentials {
  refresh: string;
  access: string;
}

export interface UserLoggedInPros {
  date_joined: string;
  email: string;
  is_active: string;
  is_staff: string;
  is_superuser: string;
  last_login: string;
  username: string;
}
