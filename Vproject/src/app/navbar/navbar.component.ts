import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  SearchValue:string= '';

  changeSearchValue(eventData:any){
    console.log(eventData);
}
}