import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editaragregaritem',
  templateUrl: './editaragregaritem.component.html',
  styleUrls: ['./editaragregaritem.component.scss']
})
export class EditaragregaritemComponent implements OnInit {
  about;
  accessUrl;
  title;
  obj;
  idselect;
  constructor(  
    private route: ActivatedRoute,
    private router: Router
    ) { 
      this.idselect = this.route.snapshot.paramMap.get('id');
      if(this.idselect){
      const sessionP = sessionStorage.getItem('ItemsData');
      this.obj = JSON.parse(sessionP);
      this.about = this.obj[this.idselect]._about;
      this.accessUrl = this.obj[this.idselect].accessURL;
      this.title = this.obj[this.idselect].title;
      }else{

      }
      
    }

  ngOnInit(): void {

  }
  guardar(){
    if(this.idselect){
      this.obj[this.idselect]._about = this.about; 
      this.obj[this.idselect].accessURL =this.accessUrl; 
      this.obj[this.idselect].title =this.title; 
      
    }else{
      const sessionP = sessionStorage.getItem('ItemsData');
      this.obj = JSON.parse(sessionP);
      this.obj.push({_about:this.about, accessURL:this.accessUrl, title:this.title});

    }
    sessionStorage.setItem('ItemsData', JSON.stringify(this.obj));
    this.router.navigate(['/home']);
  }

}
