import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  displayDialogModal= false;
  displayAddEditModal = false;
  selectedProduct: any = null;
  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.getProductList();

  }




  getProductList(){
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;


      }
    )
  }



  showAddModal()
  {
    this.displayAddEditModal = true;
    this.selectedProduct = null;


  }



  hideAddModal(isClosed: boolean)
  {

    this.displayAddEditModal= !isClosed;

  }

  hideDeleteModal(isClosed: boolean)
  {

    this.displayDialogModal= !isClosed;

  }






  saveorUpdateProductList(newData: any)
  {
    if (newData.id === this.selectedProduct.id)
    {
     const productIndex = this.products.findIndex(data => data.id === newData.id);
     this.products[productIndex] = newData;
    }
    else{

      this.products.unshift(newData);
      this.getProductList();

    }


  }

  deleteProduct(newData: any) {
    const productIndex = this.products.findIndex(data => data.id === newData.id);

    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }

  }



  showEditModal(product: Product)
  {

    this.displayAddEditModal= true;
    this.selectedProduct=product;
  }

  showDeleteModal(product: Product) {
    this.displayDialogModal = true;
    this.selectedProduct=product;

  }




}
