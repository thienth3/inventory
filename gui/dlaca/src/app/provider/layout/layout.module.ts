import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/shared/material.module';
import { MainModule } from 'src/app/main/main.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MaterialModule,
    MainModule,
  ],
  exports: [
    LayoutComponent,

  ]
})
export class LayoutModule { }
