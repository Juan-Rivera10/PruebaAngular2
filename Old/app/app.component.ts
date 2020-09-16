import { Component, OnInit  } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebaS';
  _about ='aaa';

    users: any[] = [];

  constructor(
    protected userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data.result.items;
        console.log(JSON.stringify(data.result.items));
      },
      (error) => {
        console.error(error);
      }
    );
  }


  borrarDato(_about:string){
    this.users = data.result.items
    .subscribe(
      respuesta => {
        if(respuesta){
          console.log(respuesta);
          
        }
        else{
          delete this.data[_about];
         

        }
      }
    )
    
  }
}
