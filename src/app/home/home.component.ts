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
    
    this.router.navigate([{outlets: {primary: this.route.url }}]);
  }

}