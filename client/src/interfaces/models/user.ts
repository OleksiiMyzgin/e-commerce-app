import { FirebaseError } from "../index";

export type User = {
  currentUser: UserData | null;
  error: FirebaseError | null;
};

export type UserAdditionalData = { displayName: string };

export type EmailSign = {
  email: string;
  password: string;
};

export type UserCredentials = EmailSign & UserAdditionalData;

export type UserData = {
  id?: string;
  displayName: string | null;
  email: string | null;
  createdAt: Date;
};
