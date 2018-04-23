import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoadingIndicatorComponent } from './shared/components/loading-indicator/loading-indicator.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToasterComponent } from './shared/components/toaster/toaster.component';
import { ToasterService } from './shared/services/toaster.service';
import { WindowRefService } from './shared/services/window-ref.service';
import { LoadingIndicatorService } from './shared/services/loading-indicator.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoadingIndicatorComponent,
    HeaderComponent,
    FooterComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ToasterService,
    WindowRefService,
    LoadingIndicatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
