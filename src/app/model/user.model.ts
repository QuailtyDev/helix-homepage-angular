export class User {
  userId: number;
  username?: string;
  password?: string;
  status?: string;
  allowChangeStatus?: boolean;
  personalData?: {
    emails?: [
      {
        type: string;
        value: string;
        _id: string;
      }
    ];
    phones?: [
      {
        type: string;
        value: string;
        _id: string;
      }
    ];
    bio?: string;
    name?: string;
  };
  avatar?: string;
  role?: string;
}
