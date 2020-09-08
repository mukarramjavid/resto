import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListRestService } from "../appServices/listRest/list-rest.service";

@Component({
  selector: 'app-update-rest',
  templateUrl: './update-rest.component.html',
  styleUrls: ['./update-rest.component.css']
})
export class UpdateRestComponent implements OnInit {
  userId:any;
  showAlert:boolean=false;
  constructor(private _activeId:ActivatedRoute,private _httpClient:ListRestService,private _router:Router) { }
  updateRestForm =new FormGroup({
    email:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    let id=this._activeId.snapshot.params.id;
    this.userId=id;
    this._httpClient.getById(id).subscribe(res=>{
      // console.warn(res)
      this.updateRestForm =new FormGroup({
        email:new FormControl(res['email'],Validators.required),
        address:new FormControl(res['address'],Validators.required),
        name:new FormControl(res['name'],Validators.required)
      })
    })
  }
  handleUpdate(){
    // console.log("data",this.updateRestForm.value)
    this._httpClient.updateRest(this.userId,this.updateRestForm.value).subscribe(res=>{
      console.log("update",res)
      this._router.navigate(['list_rest'])
    })
    
  }

}
