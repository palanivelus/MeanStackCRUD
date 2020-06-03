import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipEditComponent } from './relationship-edit.component';

describe('RelationshipEditComponent', () => {
  let component: RelationshipEditComponent;
  let fixture: ComponentFixture<RelationshipEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
