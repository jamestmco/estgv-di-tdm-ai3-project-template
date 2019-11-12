
export class User implements Api.IUser {

    public id: number;
    public name: string;
    public email: string;

    constructor(nameOrUser: string | Api.IUser, id?: number, email?: string) {
        if (typeof nameOrUser === 'string') {
            this.id = id as number;
            this.name = nameOrUser;
            this.email = email || '';
        } else {
            this.id = nameOrUser.id;
            this.name = nameOrUser.name;
            this.email = nameOrUser.email;
        }
    }
}
