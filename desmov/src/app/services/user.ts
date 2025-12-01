import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { Observable, tap, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  private apiUrl = 'http://192.168.1.11:5000/api';

  constructor(private http: HttpClient, private auth: Auth) {}

  updateAvatar(userId: number, avatarBase64: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profile/avatar/${userId}`, {
      avatar: avatarBase64
    }).pipe(
      tap((res) => {
        if (res.success) {
          // actualizar el localStorage también
          const session = this.getUser();
          session.avatar = avatarBase64;
          localStorage.setItem('session', JSON.stringify(session));
        }
      })
    );
  }
}
