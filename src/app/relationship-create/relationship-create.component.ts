import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-relationship-create',
  templateUrl: './relationship-create.component.html',
  styleUrls: ['./relationship-create.component.css']
})
export class RelationshipCreateComponent implements OnInit {

  relationshipForm: FormGroup;
  parentName:string='';
  parentGender:string='';
  childName:string='';
  childGender:string='';


  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.relationshipForm = this.formBuilder.group({
      'parentName' : [null, Validators.required],
      'parentGender' : [null, Validators.required],
      'childName' : [null, Validators.required],
      'childGender' : [null, Validators.required],
    });
  }

 

  onFormSubmit(form:NgForm) {
    this.api.postRelationship(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/relationship-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
