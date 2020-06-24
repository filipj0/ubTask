import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    public menuItems: Array<MenuItem> = [
        { name: 'Home', link: '' },
        { name: 'Contact Us', link: '' }
    ];
    public activeItemName = 'Home';
}

interface MenuItem {
    name: string;
    link: string;
}
