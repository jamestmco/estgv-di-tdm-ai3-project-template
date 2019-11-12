import { getRandomInt } from '@shared';

import { MockDaoMock } from '../MockDb/MockDao.mock';
import { IUserDao } from './UserDao';

function containsText(text: string, searchText: string) {
    return text.indexOf(searchText) !== -1;
}
function userContainsTextInName(user: Api.IUser, searchText: string) {
    return containsText(user.name, searchText);
}

function userContainsTextInEmail(user: Api.IUser, searchText: string) {
    return containsText(user.email, searchText);
}

export class UserDao extends MockDaoMock implements IUserDao {

    /** @inheritdoc */
    public async list(filter?: Api.IUserFilter): Promise<Api.IUser[]> {
        try {
            const db = await super.openDb();
            let usersFound = db.users;
            if (filter) {
                if (filter.searchText) {
                    usersFound = usersFound.filter((existingUser) =>
                        userContainsTextInEmail(existingUser, filter.searchText as string) ||
                        userContainsTextInName(existingUser, filter.searchText as string));
                } else {
                    if (filter.nameContains) {
                        usersFound = usersFound.filter((existingUser) =>
                            userContainsTextInName(existingUser, filter.nameContains as string));
                    }
                    if (filter.emailContains) {
                        usersFound = usersFound.filter((existingUser) =>
                            userContainsTextInEmail(existingUser, filter.emailContains as string));
                    }
                }
            }
            return usersFound;
        } catch (err) {
            throw err;
        }
    }

    /** @inheritdoc */
    public async create(createData: Api.IUserCreateData): Promise<Api.IUser> {
        try {
            const db = await super.openDb();
            const newUser: Api.IUser =  {
                id: getRandomInt(),
                name: createData.name,
                email: createData.email,
            };
            db.users.push(newUser);
            await super.saveDb(db);
            return newUser;
        } catch (err) {
            throw err;
        }
    }

    /** @inheritdoc */
    public async updateById(id: number, updateData: Api.IUserUpdateData): Promise<Api.IUser> {
        try {
            if (!updateData || !(updateData.name || updateData.email)) {
                throw new Error('No data provided to update');
            }
            const db = await super.openDb();
            const userFound = db.users.find((existingUser) => existingUser.id === id);
            if (!userFound) {
                throw new Error('User not found');
            }
            if (updateData.email) {
                userFound.name = updateData.name;
            }
            if (updateData.email) {
                userFound.email = updateData.email;
            }
            await super.saveDb(db);
            return userFound;
        } catch (err) {
            throw err;
        }
    }

    /** @inheritdoc */
    public async deleteById(id: number): Promise<void> {
        try {
            const db = await super.openDb();
            for (let i = 0; i < db.users.length; i++) {
                if (db.users[i].id === id) {
                    db.users.splice(i, 1);
                    await super.saveDb(db);
                    return;
                }
            }
            throw new Error('User not found');
        } catch (err) {
            throw err;
        }
    }

    /** @inheritdoc */
    public async getById(id: number): Promise<Api.IUser> {
        try {
            const db = await super.openDb();
            const userFound = db.users.find((existingUser) => existingUser.id === id);
            if (!userFound) {
                throw new Error('User not found');
            }
            return userFound;
        } catch (err) {
            throw err;
        }
    }

}
