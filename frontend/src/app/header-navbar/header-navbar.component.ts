import { Component, OnInit } from '@angular/core';
import { faShoppingBag, faUser, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header-navbar',
    templateUrl: './header-navbar.component.html',
    styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

    faShoppingBag = faShoppingBag;
    faUser = faUser
    faSearch = faSearch;
    faHome = faHome;

    constructor() { }

    ngOnInit(): void {
    }

}
