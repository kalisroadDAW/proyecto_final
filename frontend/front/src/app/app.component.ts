import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  public title = 'front';
  public identity: any;
  public url:string;
  
  constructor(private _userService: UserService) { 
    this.url = GLOBAL.url;

  }
  ngOnInit() {
    this.identity = this._userService.getidentity();
    

  }

  ngDoCheck() {
    
  }

  logout(){
    this._userService.logout();
  }
  
}
