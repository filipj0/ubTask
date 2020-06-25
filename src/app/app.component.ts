import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    public menuItems: Array<MenuItem> = [
        { name: 'Home', route: 'home' },
        { name: 'Contact Us', route: 'contact' }
    ];
    public activeItem: string;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.activeItem = this.router.url.substr(1);
        });
    }
}

interface MenuItem {
    name: string;
    route: string;
}
