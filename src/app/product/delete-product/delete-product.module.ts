import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteProductComponent } from './delete-product.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DeleteProductComponent
  ],
  imports: [
    CommonModule,ConfirmDialogModule,DialogModule,BrowserAnimationsModule
  ],

  exports: [
    DeleteProductComponent
  ]
})
export class DeleteProductModule { }
