import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";
import { ListRestService } from "../appServices/listRest/list-rest.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-rest',
  templateUrl: './add-rest.component.html',
  styleUrls: ['./add-rest.component.css']
})
export class AddRestComponent implements OnInit {
  showAlert:boolean=false;
  constructor(private _httpClient:ListRestService,private _router:Router) { }

  ngOnInit(): void {
  }
  addRestForm =new FormGroup({
    email:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required)
  })
  handleSubmitt(){
    // console.log(this.addRestForm.value)
    this._httpClient.addResturant(this.addRestForm.value).subscribe(res=>{
      console.log(res)
      this.showAlert=true;
    })
    this.addRestForm.reset({})
    // this._router.navigate(['list_rest'])
  }
}
