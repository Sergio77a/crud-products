import { Component,EventEmitter, OnInit ,Input,Output } from '@angular/core';
import { ProductService } from '../product.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss'
})
export class DeleteProductComponent implements OnInit {

  @Input () displayDialogModal: boolean = false;
  @Input() selectedProduct:any=null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productService: ProductService,private messageService: MessageService) { }
  ngOnInit  (): void {

  }

  closeDialog(){

    this.clickClose.emit(true);
  }


  deleteProduct()
  {
    this.productService.deleteProduct(this.selectedProduct).subscribe
    (
      response => {
        this.clickDelete.emit(response);
        this.closeDialog();

        this.messageService.add({severity:'success', summary: 'Success', detail: 'Product deleted'});
      },

      error => {
        this.messageService.add({severity:'Error', summary: 'Error', detail: error});
      }
    )
  }

}
