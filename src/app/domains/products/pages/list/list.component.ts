import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  fromChild(event: string) {
    console.log('Este evento está siendo ejecutado desde el Padre')
    console.log(event)
  }

  //imgURL = 'https://picsum.photos/640/640?r=' + (Math.random()*100).toFixed();
  //imageTitle = 'Product ' + (Math.random()*100).toFixed()

}
