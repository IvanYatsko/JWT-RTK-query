export interface IUser {
    id: string;
    role: UserUser;
    username: string;
    password: string;
}

export enum UserUser {
    ADMINISTRATOR = 'administrator',
    USER = 'user'
}