import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private name: string = 'Hi'
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  public save() {
    console.log(this.name+""+this.route.url);
   // this.router.navigateByUrl('/entity',{ state: { hello: 'world' } });
  
    this.router.navigate(['/entity','entid10'])   //path params  =>/entity/entid10  
   // this.router.navigate(['/entity',{entid:'20'}])   //matrix params  =>/entity;entid=20
    //this.router.navigate(['/entity'],{queryParams:{entid:'40'}}); //queery parms   =>  entity?entid=20
  }

}