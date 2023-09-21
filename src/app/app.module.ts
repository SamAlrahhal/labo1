import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickComponent } from './click/click.component';
import { ClickCountDirective } from './click-count.directive';
//import { RenderingDelayDirectiveDirective } from './rendering-delay-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent,
    ClickCountDirective,
    //RenderingDelayDirectiveDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
