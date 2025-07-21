export type UserType = "user" | "provider";

export interface SignUpCredentials {
  userType: UserType;
  name: string;
  email: string;
  password: string;
  businessName?: string;
  serviceCategory?: string;
  location?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  businessName?: string;
  serviceCategory?: string;
  location?: string;
}