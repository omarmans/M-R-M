import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { ProudctsModule } from '../proudcts/proudcts.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [HeaderComponent, SpinnerComponent, SelectComponent],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    RouterModule,
    SelectComponent,
    FormsModule,
  ],
})
export class SharedModule {}
