import { Component } from '@angular/core';
import { Product } from '../product.model';
import{FormsModule,NgModel} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Phone', price: 800, category: 'Electronics' },
    { name: 'Book', price: 20, category: 'Books' }
  ];

  placeholderText:string ="Enter new price";
  newProductName:string="";
  newProductPrice:number |null = null;

  updatePrice(product:Product,newPrice:string){
    const parsedPrice = parseFloat(newPrice);
    if (!isNaN(parsedPrice) && parsedPrice >= 0) {
      product.price = parsedPrice;
   
  }
}
addProduct() {
  if (this.newProductName && this.newProductPrice !== null) {
    const newProduct: Product = {
      name: this.newProductName,
      price: this.newProductPrice,
      category: 'General' 
    };
    this.products.push(newProduct);
    this.newProductName = ''; 
    this.newProductPrice = null;
  } else {
    console.error('Please provide valid product details.');
  }
}
}
