import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-relationship-detail',
  templateUrl: './relationship-detail.component.html',
  styleUrls: ['./relationship-detail.component.css']
})
export class RelationshipDetailComponent implements OnInit {

  relationship = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getRelationshipDetails(this.route.snapshot.params['id']);
  }

  getRelationshipDetails(id) {
    this.api.getRelationship(id)
      .subscribe(data => {
        console.log(data);
        this.relationship = data;
      });
  }

  deleteRelationship(id) {
    this.api.deleteRelationship(id)
      .subscribe(res => {
          this.router.navigate(['/relationships']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
