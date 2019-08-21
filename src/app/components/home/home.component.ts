import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private name: string = 'Hi'

  profileForm = new FormGroup({
    entityName: new FormControl(''),
    entityDesc: new FormControl(''),
    entitySubDetails: new FormGroup({
      entityHasUnique: new FormControl('')
    })
  });
constructor(private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
}
  public save() {
  console.log(this.name + "" + this.route.url);
  console.log(this.profileForm.get('entityName').value);
  // this.router.navigateByUrl('/entity',{ state: { hello: 'world' } });
  //this.router.navigate(['/entity','entid10','gh'])   //path params  =>/entity/entid10  
  // this.router.navigate(['/entity',{entid:'20'}])   //matrix params  =>/entity;entid=20
  //this.router.navigate(['/entity'],{queryParams:{entid:'40'}}); //queery parms   =>  entity?entid=20
  //  this.router.navigateByUrl('/entity') //to specific url
}

}