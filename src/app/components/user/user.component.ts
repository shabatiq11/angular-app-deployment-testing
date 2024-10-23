import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

interface ProductDataType {
  id: number
  title: string
  category: string
  description: string
  price: number
  image: string
  rating: {
    rate: number
    count: number
  }
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() product: ProductDataType = {
    id: 0,
    title: '',
    category: '',
    description: '',
    price: 0,
    image: '',
    rating: {
      rate: 0,
      count: 0,
    }
  }
}
