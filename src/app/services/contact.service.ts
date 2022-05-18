import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IContact } from '../models/iContact';
import { IGroup } from '../models/iGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string = 'http://localhost:9000' //json-server url
  constructor(private HttpClient: HttpClient) {

  }
  // Get all contacts

  public getAllContacts(): Observable<IContact[]> {
    let dataURL: string = `${this.serverUrl}/contacts`;
    return this.HttpClient.get<IContact[]>(dataURL).pipe(catchError(this.handleError));
  }

  // Get contact

  public getContact(contactId: string): Observable<IContact> {
    let dataURL: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.HttpClient.get<IContact>(dataURL).pipe(catchError(this.handleError));

  }

  // Create Contact

  public createContact(contact: IContact): Observable<IContact> {
    let dataURL: string = `${this.serverUrl}/contacts`
    return this.HttpClient.post<IContact>(dataURL, contact).pipe(catchError(this.handleError));

  }

  // Update Contact

  public updateContact(contact: IContact, contactId: string): Observable<IContact> {
    let dataURL: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.HttpClient.put<IContact>(dataURL, contact).pipe(catchError(this.handleError));

  }

  // Update Contact

  public deleteContact(contactId: string): Observable<{}> {
    let dataURL: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.HttpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));

  }

  //Get all grups

  public getAllGrups(): Observable<IGroup[]> {
    let dataURL: string = `${this.serverUrl}/groups`;
    return this.HttpClient.get<IGroup[]>(dataURL).pipe(catchError(this.handleError));
  }

  //Get single group

  public getGroup(contact: IContact): Observable<IGroup> {
    let dataURL: string = `${this.serverUrl}/groups/${contact.groupId}`;
    return this.HttpClient.get<IGroup>(dataURL).pipe(catchError(this.handleError));
  }

  // Error Handle

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //client Error
      errorMessage = `Error: ${error.error.message}`
    } else {
      //server Error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

