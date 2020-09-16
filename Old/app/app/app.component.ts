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

  borrar(item) {
        const url = `http://datos.gob.es/apidata/catalog/distribution/${item._about}`;

       this._http.delete(url).subscribe(data => {
          console.log('se ha borrado correctamente');
          let index = archivo.indexOf(archivoParaBorrar, 0);
          if (index > -1) {
            archivo.splice(index, 1); // Tu array de archivos
         }
       }, error => {
        console.log('error');
      });           
}
}
