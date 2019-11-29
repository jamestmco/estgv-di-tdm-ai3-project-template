import randomInt from 'random-int';
import { Observable, of, throwError } from 'rxjs';

import { Injectable } from '@angular/core';

import { IUserService } from '../services';
import { truncate } from 'fs';

let DATA: Api.IUser[] = [
  {
    name: 'Sean Maxwell',
    email: 'sean.maxwell@gmail.com',
    id: 159123164363
  },
  {
    name: 'Gordan Freeman',
    email: 'gordan.freeman@halflife.com',
    id: 906524522143
  },
  {
    name: 'John Smith',
    email: 'jsmith@yahoo.com',
    id: 357437875835
  }
];



//Tentativa de fazer 1.1
const mongoose = require('mangoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
});

mongoose.model('User', UserSchema);




/*const modelUser = mongoose.model('User');

let userController = {};

userController.allUsers = (req, res) => {
  modelUser.find()
    .then(results =>)
}*/





function containsText(text: string, searchText: string) {
  return text.indexOf(searchText) !== -1;
}

function containsTextInName(user: Api.IUser, searchText: string) {
  return containsText(user.name, searchText);
}

function containsTextInEmail(user: Api.IUser, searchText: string) {
  return containsText(user.email, searchText);
}

@Injectable({
  providedIn: 'root'
})
export class UserFakeService implements IUserService {

  /** @inheritdoc */
  getUserById(userId: number): Observable<Api.IUser> {
    const user = DATA.find(existingUser => existingUser.id === userId);
    return user
      ? of(user)
      : throwError({ message: `User not found. id=${userId}`});
  }

  /** @inheritdoc */
  listUsers(filter?: Api.IUserFilter): Observable<Api.IUser[]> {
    let results = DATA;
    if (filter) {
      if (filter.searchText) {
        results = results.filter(user => containsTextInName(user, filter.searchText) || containsTextInEmail(user, filter.searchText));
      } else {
        if (filter.nameContains) {
          results = results.filter(user => containsTextInName(user, filter.searchText));
        }
        if (filter.emailContains) {
          results = results.filter(user => containsTextInEmail(user, filter.searchText));
        }
      }

    }
    return of(results);
  }

  /** @inheritdoc */
  createUser(data: Api.IUserCreateData): Observable<Api.IUser> {
    const newUser: Api.IUser = {
      id: randomInt(1, 9999999999),
      name: data.name,
      email: data.email
    };
    DATA.push(newUser);
    return of(newUser);
  }

  /** @inheritdoc */
  updateUserById(userId: number, data: Api.IUserUpdateData): Observable<Api.IUser> {
    const user = DATA.find(existingUser => existingUser.id === userId);
    if (!user) {
      return throwError({ message: `User not found. id=${userId}` } as Api.IError);
    }
    if (data.name) {
      user.name = data.name;
    }
    if (data.email) {
      user.email = data.email;
    }
    return of(user);
  }
  /** @inheritdoc */
  deleteUserById(userId: number): Observable<any> {
    const numExistingUsers = DATA.length;
    DATA = DATA.filter(user => user.id !== userId);
    return DATA.length === numExistingUsers
      ? throwError({ message: `User not found. id=${userId}`} as Api.IError)
      : of(true);
    }
}
