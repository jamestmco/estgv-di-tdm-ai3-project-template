
declare namespace Api {

    interface IError {
        message: string;
    }

    interface IUser {
        id: number;
        name: string;
        email: string;
    }

    interface IUserFilter {
        searchText?: string;
        nameContains?: string;
        emailContains?: string;
    }

    interface IUserCreateData {
        name: string;
        email: string;
    }

    interface IUserUpdateData {
        name: string;
        email: string;
    }

}