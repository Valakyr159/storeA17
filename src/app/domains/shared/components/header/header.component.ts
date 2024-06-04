import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../products/components/product/product.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true)
  private cartService = inject(CartService)
  cart = this.cartService.cart
  total = this.cartService.total

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState)
  }
}
