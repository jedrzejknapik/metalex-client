export enum userRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface UserSession {
  id: string;
  username: string;
  role: userRole;
}
