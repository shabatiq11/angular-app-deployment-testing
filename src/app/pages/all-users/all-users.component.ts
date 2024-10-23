import {Component, OnInit, signal} from '@angular/core';
import { UserComponent } from '../../components/user/user.component';
import { ApiService } from '../../services/api.service';

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
  selector: 'app-all-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent implements OnInit {

  
  


  signalArr = signal<ProductDataType[]>([])
  constructor(private apiService: ApiService<ProductDataType[]>){}

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.signalArr.set(data)
    })
  }
}
