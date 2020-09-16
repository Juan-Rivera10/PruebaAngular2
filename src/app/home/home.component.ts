import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'pruebaS';


    users: any[] = [];

    cols: any[];

  constructor(
    protected userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        const sessionP = sessionStorage.getItem('ItemsData');
        if(sessionP){
          this.users = JSON.parse(sessionP);
        }else{
          this.users = data.result.items;
          sessionStorage.setItem('ItemsData', JSON.stringify(this.users));
        }

      },
      (error) => {
        console.error(error);
      }
    );
    this.cols = [
      {field: '_about', header: 'About'},
      {field: 'accessURL', header: 'AccessUrl'},
      {field: 'title', header: 'Tile'}
  ];
  }
  eliminar(id:number){
    const sessionP = sessionStorage.getItem('ItemsData');
    let obj = JSON.parse(sessionP);
    obj.splice(id, 1);
    sessionStorage.setItem('ItemsData', JSON.stringify(obj));
    window.location.reload();
    }
    editar(ids:number){
      
      this.router.navigate(['/editar', { id: ids }]);
    }
}
