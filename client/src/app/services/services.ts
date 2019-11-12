import { Observable } from 'rxjs';

export interface IUserService {

    /**
     * List existing users
     * @param filter Users filter
     */
    listUsers(filter?: Api.IUserFilter): Observable<Api.IUser[]>;

    /**
     * Create a new user
     * @param data User data
     */
    createUser(data: Api.IUserCreateData): Observable<Api.IUser>;

    /**
     * Get a given user
     * @param userId User identifier
     */
    getUserById(userId: number): Observable<Api.IUser>;

    /**
     * Update a given user
     * @param userId User identifier
     * @param data User data to update
     */
    updateUserById(userId: number, data: Api.IUserUpdateData): Observable<Api.IUser>;

    /**
     * Delete a given user
     * @param userId User identifier
     */
    deleteUserById(userId: number): Observable<any>;
}
