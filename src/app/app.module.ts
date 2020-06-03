import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RelationshipComponent } from './relationship/relationship.component';
import { RelationshipDetailComponent } from './relationship-detail/relationship-detail.component';
import { RelationshipCreateComponent } from './relationship-create/relationship-create.component';
import { RelationshipEditComponent } from './relationship-edit/relationship-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule 
} from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'relationships',
    component: RelationshipComponent,
    data: { title: 'Relationship List' }
  },
  {
    path: 'relationship-details/:id',
    component: RelationshipDetailComponent,
    data: { title: 'Relationship Details' }
  },
  {
    path: 'relationship-create',
    component: RelationshipCreateComponent,
    data: { title: 'Create Relationship' }
  },
  {
    path: 'relationship-edit/:id',
    component: RelationshipEditComponent,
    data: { title: 'Edit Relationship' }
  },
  { path: '',
    redirectTo: '/relationships',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RelationshipComponent,
    RelationshipDetailComponent,
    RelationshipCreateComponent,
    RelationshipEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
