/**
 * AI3 Open API Specification
 * AI3 Open API Specification
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ai3@tdm.estgv.ipv.pt
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

 import { Inject, Injectable, Optional }                      from '@angular/core';
 import { HttpClient, HttpHeaders, HttpParams,
          HttpResponse, HttpEvent }                           from '@angular/common/http';
 import { CustomHttpUrlEncodingCodec }                        from '../encoder';
 
 import { Observable }                                        from 'rxjs';
 
 import { ChangePasswordRequest } from '../model/changePasswordRequest';
 import { ChangePasswordResponse } from '../model/changePasswordResponse';
 import { LoginRequest } from '../model/loginRequest';
 import { LoginResponse } from '../model/loginResponse';
 import { RegisterRequest } from '../model/registerRequest';
 import { RegisterResponse } from '../model/registerResponse';
 import { UserPreferencesChangeRequest } from '../model/userPreferencesChangeRequest';
 import { UserProfile } from '../model/userProfile';
 
 import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
 import { Configuration }                                     from '../configuration';
 
 
 @Injectable()
 export class AccountService {
 
     protected basePath = 'http://localhost:3000/api';
     public defaultHeaders = new HttpHeaders();
     public configuration = new Configuration();
 
     constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
         if (basePath) {
             this.basePath = basePath;
         }
         if (configuration) {
             this.configuration = configuration;
             this.basePath = basePath || configuration.basePath || this.basePath;
         }
     }
 
     /**
      * @param consumes string[] mime-types
      * @return true: consumes contains 'multipart/form-data', false: otherwise
      */
     private canConsumeForm(consumes: string[]): boolean {
         const form = 'multipart/form-data';
         for (const consume of consumes) {
             if (form === consume) {
                 return true;
             }
         }
         return false;
     }
 
 
     /**
      * Change password of the user with a given
      * Change password of the user with a given
      * @param body Request to change a user&#x27;s password
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public accountChangePasswordPost(body: ChangePasswordRequest, observe?: 'body', reportProgress?: boolean): Observable<ChangePasswordResponse>;
     public accountChangePasswordPost(body: ChangePasswordRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ChangePasswordResponse>>;
     public accountChangePasswordPost(body: ChangePasswordRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ChangePasswordResponse>>;
     public accountChangePasswordPost(body: ChangePasswordRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (body === null || body === undefined) {
             throw new Error('Required parameter body was null or undefined when calling accountChangePasswordPost.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<ChangePasswordResponse>('post',`${this.basePath}/account/change_password`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * Authenticate a user
      * 
      * @param body Request to authenticate as a user with credentials
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public accountLoginPost(body: LoginRequest, observe?: 'body', reportProgress?: boolean): Observable<LoginResponse>;
     public accountLoginPost(body: LoginRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoginResponse>>;
     public accountLoginPost(body: LoginRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoginResponse>>;
     public accountLoginPost(body: LoginRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (body === null || body === undefined) {
             throw new Error('Required parameter body was null or undefined when calling accountLoginPost.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<LoginResponse>('post',`${this.basePath}/account/login`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * Logout a user
      * Logout a user
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public accountLogoutGet(observe?: 'body', reportProgress?: boolean): Observable<any>;
     public accountLogoutGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public accountLogoutGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public accountLogoutGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         let headers = this.defaultHeaders;
 
         // authentication (auth0) required
         if (this.configuration.accessToken) {
             const accessToken = typeof this.configuration.accessToken === 'function'
                 ? this.configuration.accessToken()
                 : this.configuration.accessToken;
             headers = headers.set('Authorization', 'Bearer ' + accessToken);
         }
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<any>('get',`${this.basePath}/account/logout`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * Update the current user preferencees
      * 
      * @param body Data to update the user with
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public accountPreferencesPut(body: UserPreferencesChangeRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
     public accountPreferencesPut(body: UserPreferencesChangeRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public accountPreferencesPut(body: UserPreferencesChangeRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public accountPreferencesPut(body: UserPreferencesChangeRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (body === null || body === undefined) {
             throw new Error('Required parameter body was null or undefined when calling accountPreferencesPut.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<any>('put',`${this.basePath}/account/preferences`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * Register a new user
      * 
      * @param body Data to register the user with
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public accountRegisterPost(body: RegisterRequest, observe?: 'body', reportProgress?: boolean): Observable<RegisterResponse>;
     public accountRegisterPost(body: RegisterRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RegisterResponse>>;
     public accountRegisterPost(body: RegisterRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RegisterResponse>>;
     public accountRegisterPost(body: RegisterRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (body === null || body === undefined) {
             throw new Error('Required parameter body was null or undefined when calling accountRegisterPost.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<RegisterResponse>('post',`${this.basePath}/account/register`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * Get user profile
      * Get user profile
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public accountsProfileGet(observe?: 'body', reportProgress?: boolean): Observable<UserProfile>;
     public accountsProfileGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserProfile>>;
     public accountsProfileGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserProfile>>;
     public accountsProfileGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         let headers = this.defaultHeaders;
 
         // authentication (auth0) required
         if (this.configuration.accessToken) {
             const accessToken = typeof this.configuration.accessToken === 'function'
                 ? this.configuration.accessToken()
                 : this.configuration.accessToken;
             headers = headers.set('Authorization', 'Bearer ' + accessToken);
         }
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
             'application/json'
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<UserProfile>('get',`${this.basePath}/accounts/profile`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
 }