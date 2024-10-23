import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';


interface LinksDataType {
  name: string
  link: string
}


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  signalArr = signal<LinksDataType[]>([
    { name: 'All Products', link: 'all-products' },
    { name: 'Orders', link: '' },
    { name: 'About Us', link: '' },
    { name: 'Contact Us', link: '' }
  ])
}
