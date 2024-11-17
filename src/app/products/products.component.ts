import {Component, OnInit} from '@angular/core';

interface Product {
  name: string;
  price: number;
  color: string;
  imageUrl: string;
}



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products: Product[] = [
    { name: 'Facial Oil', price: 150, color: 'black', imageUrl: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=2351&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Perfume', price: 290, color: 'indigo', imageUrl: 'https://plus.unsplash.com/premium_photo-1661597156656-75ba116e9e1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Body Package', price: 100, color: 'purple', imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Trimming Package', price: 450, color: 'cyan', imageUrl: 'https://images.unsplash.com/photo-1604368640692-027f44ffb8cf?q=80&w=2424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];



  ngOnInit(): void {
  }
}
