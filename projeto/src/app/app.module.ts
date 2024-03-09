import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSliderModule } from '@angular/material/slider';
import { StatusClassPipe } from './pipes/status.class.pipe';
import { TestePipeComponent } from './components/teste-pipe/teste-pipe.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    TestePipeComponent,
    StatusClassPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  exports: [CardComponent, ButtonComponent]
})
export class AppModule { }
