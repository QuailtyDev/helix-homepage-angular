export class UserAuthResponse {
  _id: string;
  domain: {
    d0: string;
    d1: string;
  };
  username: string;
  token: string;
}

export class ConfirmAuthQuery {
  auth: string;
  completeName: string;
  username: string;
}
