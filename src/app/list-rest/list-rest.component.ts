import { Component, OnInit } from '@angular/core';
import { ListRestService } from '../appServices/listRest/list-rest.service';
@Component({
  selector: 'app-list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.css'],
})
export class ListRestComponent implements OnInit {
  data: any = [];
  constructor(private _httpClient: ListRestService) {}

  ngOnInit(): void {
    this._httpClient.getAllRest().subscribe((res) => {
      this.data = res;
      // console.log(this.data)
    });
  }
  handlDelete(id) {
    console.log('ID ' + id);

    this._httpClient.deleteResturant(id).subscribe((res) => {
      console.warn('Deleted ' + res);
    });
    console.warn('Updated List ' + this.data);
    this.data.splice(id - 1, 1);
  }
}
