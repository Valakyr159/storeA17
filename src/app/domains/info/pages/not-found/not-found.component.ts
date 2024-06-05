import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLinkWithHref, HeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
