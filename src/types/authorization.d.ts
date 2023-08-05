import { TokenType } from "./enums/token";

export interface AuthorizedUser {
  id: string | number;
  token: string;
  clearance: number;
  type: TokenType.AUTH;
  session_id: number;
}

export interface RefreshedUser {
  id: string | number;
  token: string;
  type: TokenType.REFRESH;
}

export interface BaseTokenPayload {
  grant_type: "refresh_token" | "password";
}

export interface PasswordTokenPayload extends BaseTokenPayload {
  grant_type: "password";
  email: string;
  password: string;
}

export interface RefreshTokenPayload extends BaseTokenPayload {
  grant_type: "refresh_token";
  refresh_token: string;
}

type CreateTokenPayload = PasswordTokenPayload | RefreshTokenPayload;
