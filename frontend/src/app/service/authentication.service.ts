import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<User> | undefined;
  public user: Observable<User> | undefined;

  constructor(private http: HttpClient){}

  public login(email: string, password: string) {
    console.log(email, password);
    return this.http.post<any>(`${environment.apiUrl}/api/v1/auth/authenticate`, { email, password })
    .pipe(map(response => {
      this.userSubject?.next(response);
    }));
  }

  public register(user: User) {
    console.log(user);
    return this.http.post<any>(`${environment.apiUrl}/api/v1/auth/register`, user).pipe(map(response => {
      this.userSubject?.next(response);
    }));;
  }


}
