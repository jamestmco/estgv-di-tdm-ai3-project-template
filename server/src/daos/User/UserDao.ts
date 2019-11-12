export interface IUserDao {

    /**
     * List existing users
     * @param filter Filter
     */
    list: (filter?: Api.IUserFilter) => Promise<Api.IUser[]>;

    /**
     * Create a new user
     * @param data Create data
     */
    create: (data: Api.IUserCreateData) => Promise<Api.IUser>;

    /**
     * Update a given user
     * @param id
     * @param updateData
     */
    updateById: (id: number, updateData: Api.IUserUpdateData) => Promise<Api.IUser>;

    /**
     * Delete a given user
     * @param id User identifier
     */
    deleteById: (id: number) => Promise<void>;

    /**
     * Get a given user
     * @param id User identifier
     */
    getById: (id: number) => Promise<Api.IUser>;
}

export class UserDao implements IUserDao {

    /** @inheritdoc */
    public async list(): Promise<Api.IUser[]> {
        // TODO
        return [] as any;
    }

    /** @inheritdoc */
    public async create(user: Api.IUserCreateData): Promise<Api.IUser> {
        // TODO
        return {} as any;
    }

    /** @inheritdoc */
    public async updateById(id: number, userUpdateData: Api.IUserUpdateData): Promise<Api.IUser> {
        // TODO
        return {} as any;
    }

    /** @inheritdoc */
    public async deleteById(id: number): Promise<void> {
        // TODO
        return {} as any;
    }

    /** @inheritdoc */
    public async getById(id: number): Promise<Api.IUser> {
        // TODO
        return {} as any;
    }
}
