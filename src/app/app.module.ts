import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { IntroHeaderComponent } from './intro-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatIsComponent } from './what-is/what-is.component';
import { UseItComponent } from './use-it/use-it.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CreditsComponent } from './credits/credits.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroHeaderComponent,
    NavbarComponent,
    WhatIsComponent,
    UseItComponent,
    FooterComponent,
    ContactComponent,
    PortfolioComponent,
    CreditsComponent,
    NewsletterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
