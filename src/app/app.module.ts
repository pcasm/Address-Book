import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MainPage} from './pages/main/main.component';
import { FormattedAddressPipe } from './pipes/formatted-address.pipe';

@NgModule({
  declarations: [
    AppComponent, MainPage, FormattedAddressPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
