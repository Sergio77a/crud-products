import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEditProductComponent
  ],
  imports: [
    CommonModule, BrowserAnimationsModule,DialogModule,ButtonModule,InputTextModule,InputNumberModule,
    InputTextareaModule,ReactiveFormsModule,FormsModule,ToastModule,

  ],

  exports: [
    AddEditProductComponent
  ]
})
export class AddEditProductModule { }
