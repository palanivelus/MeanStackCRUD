import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-relationship-edit',
  templateUrl: './relationship-edit.component.html',
  styleUrls: ['./relationship-edit.component.css']
})
export class RelationshipEditComponent implements OnInit {

  relationshipForm: FormGroup;
  id:string = '';
  parentName:string='';
  parentGender:string='';
  childName:string='';
  childGender:string='';


  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getRelationship(this.route.snapshot.params['id']);
    this.relationshipForm = this.formBuilder.group({
      'parentName' : [null, Validators.required],
      'parentGender' : [null, Validators.required],
      'childName' : [null, Validators.required],
      'childGender' : [null, Validators.required]
    });
  }

  getRelationship(id) {
    this.api.getRelationship(id).subscribe(data => {
      this.id = data._id;
      this.relationshipForm.setValue({
        parentName: data.parentName,
        parentGender: data.parentGender,
        childName: data.childName,
        childGender: data.childGender       
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateRelationship(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/relationship-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  relationshipDetails() {
    this.router.navigate(['/relationship-details', this.id]);
  }
}
