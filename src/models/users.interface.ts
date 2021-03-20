export interface User extends BaseUser {
    //password: string;//=> doesn't required in plain text
    phoneNumber: string;
    imageUrl: string;
}

export interface BaseUser {
    uid: string;
    emailAddress: string;
    country: string;
    createdAt: Date;
    firstName: string;
    lastName: string;
}

export interface Users {
    [key: number]: User;
}