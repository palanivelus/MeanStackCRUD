import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {

  relationships: any;
  displayedColumns = ['parentName','parentGender','childName', 'childGender'];
  dataSource:any;
  

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getRelationships()
      .subscribe(res => {
        console.log(res);
        this.relationships = res;
        this.dataSource = new MatTableDataSource(res);
      }, err => {
        console.log(err);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


