import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../../products/components/product/product.component';
import { CartService } from '../../services/cart.service';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterLinkWithHref, RouterLinkActive],
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
