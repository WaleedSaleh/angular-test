import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        href: '/home',
      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        href: '/about',

      },
      {
        label: 'Products',
        icon: 'pi pi-box',
        href: '/products',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        href: '/contact',
      }
    ];
  }


}
