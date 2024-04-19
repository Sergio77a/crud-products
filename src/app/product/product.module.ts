import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';
import { DeleteProductModule } from './delete-product/delete-product.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, TableModule, ButtonModule,
    DialogModule, BrowserAnimationsModule,ToastModule,ConfirmDialogModule,
    AddEditProductModule,DeleteProductModule

  ],
  exports: [
    ProductComponent
  ],
  providers: [MessageService]
})
export class ProductModule { }
