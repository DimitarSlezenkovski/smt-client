export interface User {
  id: number;
  name: string;
  email: string;
  google_oauth?: GoogleOAuth;
  email_verified: boolean;
}

export type GoogleOAuth = {
    id: string;
    name: string;
    email: string;
}
