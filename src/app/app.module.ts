import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewSeasonComponent } from './pages/new-season/new-season.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LaligaClubComponent } from './pages/new-season/laliga-club/laliga-club.component';
import { RealmadridComponent } from './pages/new-season/laliga-club/realmadrid/realmadrid.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BallsPageComponent } from './pages/balls-page/balls-page.component';
import { StadiumPageComponent } from './pages/stadium-page/stadium-page.component';
import { ClassicsComponent } from './pages/classics/classics.component';
import { BarcelonaComponent } from './pages/new-season/laliga-club/barcelona/barcelona.component';
import { ValenciaComponent } from './pages/new-season/laliga-club/valencia/valencia.component';
import { AtleticoComponent } from './pages/new-season/laliga-club/atletico/atletico.component';
import { SociedadComponent } from './pages/new-season/laliga-club/sociedad/sociedad.component';
import { VillarealComponent } from './pages/new-season/laliga-club/villareal/villareal.component';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { PrlClubComponent } from './pages/new-season/prl-club/prl-club.component';
import { BundesligaClubComponent } from './pages/new-season/bundesliga-club/bundesliga-club.component';
import { Ligue1ClubComponent } from './pages/new-season/ligue1-club/ligue1-club.component';
import { SerieaClubComponent } from './pages/new-season/seriea-club/seriea-club.component';
import { LiverpoolComponent } from './pages/new-season/prl-club/liverpool/liverpool.component';
import { MancityComponent } from './pages/new-season/prl-club/mancity/mancity.component';
import { ManutdComponent } from './pages/new-season/prl-club/manutd/manutd.component';
import { ArsenalComponent } from './pages/new-season/prl-club/arsenal/arsenal.component';
import { TottenhamComponent } from './pages/new-season/prl-club/tottenham/tottenham.component';
import { NewcastleComponent } from './pages/new-season/prl-club/newcastle/newcastle.component';
import { BayernComponent } from './pages/new-season/bundesliga-club/bayern/bayern.component';
import { DortmundComponent } from './pages/new-season/bundesliga-club/dortmund/dortmund.component';
import { FrankfurtComponent } from './pages/new-season/bundesliga-club/frankfurt/frankfurt.component';
import { LeipzigComponent } from './pages/new-season/bundesliga-club/leipzig/leipzig.component';
import { UnionComponent } from './pages/new-season/bundesliga-club/union/union.component';
import { WolfsburgComponent } from './pages/new-season/bundesliga-club/wolfsburg/wolfsburg.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ContinueShoppingComponent } from './pages/continue-shopping/continue-shopping.component';
import { ShirtsComponent } from './pages/home-page/shirts/shirts.component';
import { OthersComponent } from './pages/home-page/others/others.component';
import { NationsComponent } from './pages/nations/nations.component';
import { AcMilanComponent } from './pages/new-season/seriea-club/ac-milan/ac-milan.component';
import { InterMilanComponent } from './pages/new-season/seriea-club/inter-milan/inter-milan.component';
import { JuventusComponent } from './pages/new-season/seriea-club/juventus/juventus.component';
import { NapoliComponent } from './pages/new-season/seriea-club/napoli/napoli.component';
import { RomaComponent } from './pages/new-season/seriea-club/roma/roma.component';
import { AtalantaComponent } from './pages/new-season/seriea-club/atalanta/atalanta.component';
import { ParisComponent } from './pages/new-season/ligue1-club/paris/paris.component';
import { LyonComponent } from './pages/new-season/ligue1-club/lyon/lyon.component';
import { MarseilleComponent } from './pages/new-season/ligue1-club/marseille/marseille.component';
import { LilleComponent } from './pages/new-season/ligue1-club/lille/lille.component';
import { NiceComponent } from './pages/new-season/ligue1-club/nice/nice.component';
import { MonacoComponent } from './pages/new-season/ligue1-club/monaco/monaco.component';


@NgModule({
  declarations: [
    AppComponent,
    NewSeasonComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    LaligaClubComponent,
    RealmadridComponent,
    LoginPageComponent,
    RegisterPageComponent,
    BallsPageComponent,
    StadiumPageComponent,
    ClassicsComponent,
    BarcelonaComponent,
    ValenciaComponent,
    AtleticoComponent,
    SociedadComponent,
    VillarealComponent,
    CartComponent,
    PrlClubComponent,
    BundesligaClubComponent,
    Ligue1ClubComponent,
    SerieaClubComponent,
    LiverpoolComponent,
    MancityComponent,
    ManutdComponent,
    ArsenalComponent,
    TottenhamComponent,
    NewcastleComponent,
    BayernComponent,
    DortmundComponent,
    FrankfurtComponent,
    LeipzigComponent,
    UnionComponent,
    WolfsburgComponent,
    UserProfileComponent,
    ContinueShoppingComponent,
    ShirtsComponent,
    OthersComponent,
    NationsComponent,
    AcMilanComponent,
    InterMilanComponent,
    JuventusComponent,
    NapoliComponent,
    RomaComponent,
    AtalantaComponent,
    ParisComponent,
    LyonComponent,
    MarseilleComponent,
    LilleComponent,
    NiceComponent,
    MonacoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NewSeasonComponent, CartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
