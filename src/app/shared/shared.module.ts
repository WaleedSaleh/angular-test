import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ButtonModule} from 'primeng/button';
import {ChipsModule} from 'primeng/chips';
import {PaginatorModule} from 'primeng/paginator';
import {MenubarModule} from 'primeng/menubar';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {ListboxModule} from 'primeng/listbox';
import {Ripple} from 'primeng/ripple';
import {ImageModule} from 'primeng/image';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    ChipsModule,
    PaginatorModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    ListboxModule,
    Ripple,
    ImageModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
