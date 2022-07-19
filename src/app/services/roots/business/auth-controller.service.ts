import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from '../http.service';
import { environment } from '../../../../environments/environment';
import { SessionRequestPassword } from '../../../models/requests/SessionRequestPassword';
import { UserTemplateRequest } from '../../../models/requests/UserTemplateRequest';
import { RegisterRequest } from '../../../models/requests/RegisterRequest';
import { UserLocationRequest } from '../../../models/requests/UserLocationRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthControllerService {
    fullUrl = environment.url + '/api/auth';
    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }


    sendPasswordLogin(requestPassword: SessionRequestPassword) {
        return this.httpService.postJson('/api/auth/login', requestPassword)
            .pipe(map(value => value));
    }

    registerTemplateUser(userTemplateRequest: UserTemplateRequest) {
        return this.httpService.postJson('/api/auth/register', userTemplateRequest)
            .pipe(map(value => value));
    }

    checkActivationCode(activationCode: string, phone: string): Observable<any> {
        // return this.httpService.putJSON(
        //     `/api/auth/register/confirm?registrationCode=${activationCode}&phone=${phone}`,
        //     null);
        return this.http.put(this.fullUrl + '/register/confirm?phone=' + phone + '&registrationCode=' + activationCode, null);
    }

    confirmRegister(registerRequest: RegisterRequest) {
        return this.httpService.postJson('/api/template/register', registerRequest);
    }


    setUserLocation(userLocationRequest: UserLocationRequest) {
        return this.httpService.postJson('/api/location', userLocationRequest)
            .pipe(map(value => value.body));
    }


}
