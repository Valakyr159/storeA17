import { Component, inject, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { ProductComponent } from '../../components/product/product.component';
import { CartService } from '../../../shared/services/cart.service';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])

  private cartService = inject(CartService)

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
        onCart: 0,
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
        onCart: 0,
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
        onCart: 0,
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
        onCart: 0,
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
        onCart: 0,
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
        onCart: 0,
      },
    ];
    this.products.set(initProducts)
  }

  addToCart(product: Product) {
    product.onCart = product.onCart+1
    this.cartService.addToCart(product)
  }

  //imgURL = 'https://picsum.photos/640/640?r=' + (Math.random()*100).toFixed();
  //imageTitle = 'Product ' + (Math.random()*100).toFixed()

}
