import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private serverUrl = 'http://localhost:5200';

    constructor(private http: HttpClient) {
    }

    sendEmail(emailAddress: string, message: string) {
        return this.http.post(this.serverUrl + '/contact', {
            EmailAddress: emailAddress,
            Message: message
        });
    }
}
