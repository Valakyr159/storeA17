import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class ProductService {

  products = signal<Product[]>([]);

  private http = inject(HttpClient);

  getProducts(category_id?: string) {
    const url = new URL(`https://api.escuelajs.co/api/v1/products/`)
    if (category_id) {
      url.searchParams.set('categoryId', category_id)
    }
    return this.http.get<Product[]>(url.toString())
      .pipe(map(products => this.transformProducts(products)));
  }

  getOne(id: string) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
  
  private transformProducts(products: Product[]): Product[] {
    return products.map(product => {
      // Realiza la transformación en cada producto aquí
      const transformedImages = product.images.map(image => {
        let modifiedImage = image.replace(/"/g, '');
        // Elimina comillas dobles        
        modifiedImage = modifiedImage.replace(/\[/g, '').replace(/\]/g, '');
        // Elimina corchetes        
        return modifiedImage;
        
      });
      return {
        ...product,
        images: transformedImages
      };
    });
  }
}