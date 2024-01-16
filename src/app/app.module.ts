import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProudctsModule } from './proudcts/proudcts.module';
import { SharedModule } from './shared/shared.module';
import { ErrorPageComponent } from './404/error-page/error-page.component';
import { CartsModule } from './carts/carts.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProudctsModule,
    SharedModule,
    CartsModule,
  ],
  exports: [ProudctsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
