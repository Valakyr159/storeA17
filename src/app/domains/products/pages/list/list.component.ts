import { Component, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { ProductComponent } from '../../components/product/product.component';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=' + Math.random(),
        createdAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProducts)
  }

  fromChild(event: string) {
    console.log('Este evento está siendo ejecutado desde el Padre')
    console.log(event)
  }

  //imgURL = 'https://picsum.photos/640/640?r=' + (Math.random()*100).toFixed();
  //imageTitle = 'Product ' + (Math.random()*100).toFixed()

}
