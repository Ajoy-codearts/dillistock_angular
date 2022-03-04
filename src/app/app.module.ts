import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotoomSignUpBackComponent } from './botoom-sign-up-back/botoom-sign-up-back.component';
import { HeaderComponent } from './header/header.component';
import { HerobackComponent } from './heroback/heroback.component';
import { Aboutus1Component } from './aboutus1/aboutus1.component';
import { ImgComponent } from './aboutus1/img/img.component';
import { TextComponent } from './aboutus1/text/text.component';
import { Button1Component } from './aboutus1/text/button1/button1.component';
import { BrowsecatagoryComponent } from './browsecatagory/browsecatagory.component';
import { HedingtextcenterComponent } from './browsecatagory/hedingtextcenter/hedingtextcenter.component';
import { MaingallerybackComponent } from './browsecatagory/maingalleryback/maingalleryback.component';
import { AmazingcontributorbackComponent } from './amazingcontributorback/amazingcontributorback.component';
import { HeadingComponent } from './amazingcontributorback/heading/heading.component';
import { MainsliderComponent } from './amazingcontributorback/mainslider/mainslider.component';
import { ButtonComponent } from './amazingcontributorback/button/button.component';
import { JoinusComponent } from './joinus/joinus.component';
import { SignformdetailsbackComponent } from './signformdetailsback/signformdetailsback.component';
import { LeftdetailsComponent } from './signformdetailsback/leftdetails/leftdetails.component';
import { RightdetailsComponent } from './signformdetailsback/rightdetails/rightdetails.component';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './footer/top/top.component';
import { MainfooterComponent } from './footer/mainfooter/mainfooter.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { FirstComponent } from './footer/mainfooter/first/first.component';
import { SecondComponent } from './footer/mainfooter/second/second.component';
import { ThirdComponent } from './footer/mainfooter/third/third.component';
import { FourthComponent } from './footer/mainfooter/fourth/fourth.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InnerherobackComponent } from './contactus/innerheroback/innerheroback.component';
import { DefaultbodyComponent } from './contactus/defaultbody/defaultbody.component';
import { ContactheadingComponent } from './contactus/defaultbody/contactheading/contactheading.component';
import { ContactdetailsComponent } from './contactus/defaultbody/contactdetails/contactdetails.component';
import { MessagebackComponent } from './contactus/defaultbody/messageback/messageback.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutusinnerherobackComponent } from './aboutus/aboutusinnerheroback/aboutusinnerheroback.component';
import { HomeaboutusbackComponent } from './aboutus/homeaboutusback/homeaboutusback.component';
import { AboutussigninformdetailsComponent } from './aboutus/aboutussigninformdetails/aboutussigninformdetails.component';
import { SearchimagesComponent } from './searchimages/searchimages.component';
import { SiInnerherobackComponent } from './searchimages/si-innerheroback/si-innerheroback.component';
import { SiDefaultbodyComponent } from './searchimages/si-defaultbody/si-defaultbody.component';
import { PlansComponent } from './plans/plans.component';
import { PInnerherobackComponent } from './plans/p-innerheroback/p-innerheroback.component';
import { PDefaultbodyComponent } from './plans/p-defaultbody/p-defaultbody.component';
import { DbodytopComponent } from './plans/p-defaultbody/dbodytop/dbodytop.component';
import { DbodyCountdownComponent } from './plans/p-defaultbody/dbody-countdown/dbody-countdown.component';
import { DbodyPricingbackComponent } from './plans/p-defaultbody/dbody-pricingback/dbody-pricingback.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HerobackComponent,
    BotoomSignUpBackComponent,
    Aboutus1Component,
    ImgComponent,
    TextComponent,
    Button1Component,
    BrowsecatagoryComponent,
    HedingtextcenterComponent,
    MaingallerybackComponent,
    AmazingcontributorbackComponent,
    HeadingComponent,
    MainsliderComponent,
    ButtonComponent,
    JoinusComponent,
    SignformdetailsbackComponent,
    LeftdetailsComponent,
    RightdetailsComponent,
    FooterComponent,
    TopComponent,
    MainfooterComponent,
    CopyrightComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    HomeComponent,
    ContactusComponent,
    InnerherobackComponent,
    DefaultbodyComponent,
    ContactheadingComponent,
    ContactdetailsComponent,
    MessagebackComponent,
    AboutusComponent,
    AboutusinnerherobackComponent,
    HomeaboutusbackComponent,
    AboutussigninformdetailsComponent,
    SearchimagesComponent,
    SiInnerherobackComponent,
    SiDefaultbodyComponent,
    PlansComponent,
    PInnerherobackComponent,
    PDefaultbodyComponent,
    DbodytopComponent,
    DbodyCountdownComponent,
    DbodyPricingbackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
