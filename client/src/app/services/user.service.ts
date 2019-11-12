import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { UserApiService } from './api/user-api.service';
import { UserFakeService } from './fake/user-fake.service';
import { IUserService } from './services';

@Injectable({
  providedIn: 'root',
  deps: [
    HttpClient,
  ],
  useFactory: buildUserService,
})
export abstract class UserService implements IUserService {

  /** @inheritdoc */
  abstract getUserById(userId: number): Observable<Api.IUser>;

  /** @inheritdoc */
  abstract listUsers(filter?: Api.IUserFilter): Observable<Api.IUser[]>;

  /** @inheritdoc */
  abstract createUser(data: Api.IUserCreateData): Observable<Api.IUser>;

  /** @inheritdoc */
  abstract updateUserById(userId: number, data: Api.IUserUpdateData): Observable<Api.IUser>;

  /** @inheritdoc */
  abstract deleteUserById(userId: number): Observable<void>;
}

/**
 * Build user service
 * @param httpClient HTTP client
 */
export function buildUserService(
  httpClient: HttpClient
) {
  if (environment.production) {
    return new UserApiService(httpClient);
  }
  return new UserFakeService();
}
