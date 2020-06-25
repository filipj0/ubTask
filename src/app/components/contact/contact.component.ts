import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
    public form: FormGroup;
    public userMessage: string;
    public userError: boolean;

    constructor(private formBuilder: FormBuilder, public api: ApiService) {
        this.form = this.formBuilder.group({
            email: '',
            message: ''
        });
    }

    ngOnInit(): void {
    }

    sendMessage() {
        this.api.sendEmail(this.form.value.email, this.form.value.message).subscribe({
            next: (response: any) => {
                this.showUserSuccessMsg();
            },
            error: (response: any) => {
                this.showUserError(response.error.errorCode);
            }
        });
    }

    showUserSuccessMsg() {
        this.userError = false;
        this.userMessage = 'Message sent successfully. We will contact you shortly.';
    }

    showUserError(errorCode: string) {
        this.userError = true;
        if (errorCode === 'INVALID_EMAIL_ADDRESS') {
            this.userMessage = 'Entered e-mail address format is not valid. Please check your e-mail address.';
        }
        else if (errorCode === 'MESSAGE_TOO_SHORT') {
            this.userMessage = 'Message has to be at least 30 characters long.';
        }
        else {
            this.userMessage = 'An error has occurred. Please recheck entered data and try again.';
        }
    }
}
