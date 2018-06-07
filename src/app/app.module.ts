import { AuthGuard } from './shared/guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from './token-interceptor.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatMenuModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatFormFieldControl, MatIconModule } from '@angular/material';
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
import { SupportHeaderComponent } from './shared/components/support-header/support-header.component';
import { HeaderService } from './shared/services/header.service';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { TempHeaderComponent } from './shared/components/temp-header/temp-header.component';

import { MasterReportsService } from './analytics/services/master-reports.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './shared/components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoadingIndicatorComponent,
    HeaderComponent,
    FooterComponent,
    ToasterComponent,
    SupportHeaderComponent,
    TempHeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    ToasterService,
    WindowRefService,
    MasterReportsService,
    LoadingIndicatorService,
    HeaderService,
    CookieService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
