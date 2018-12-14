export interface Account {
    accUser: string;
    AccPass: string;
    AccInitailID: string;
    AccName: string;
    AccLastname: string;
    AccDate: Date;
    AccGender: string;
    accRole: Role;
    AccImg: string;
}

export enum Role {
    Admin = 1,
    User = 2
}


