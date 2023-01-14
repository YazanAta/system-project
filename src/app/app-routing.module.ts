import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallsPageComponent } from './pages/balls-page/balls-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { ClassicsComponent } from './pages/classics/classics.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BayernComponent } from './pages/new-season/bundesliga-club/bayern/bayern.component';
import { DortmundComponent } from './pages/new-season/bundesliga-club/dortmund/dortmund.component';
import { FrankfurtComponent } from './pages/new-season/bundesliga-club/frankfurt/frankfurt.component';
import { LeipzigComponent } from './pages/new-season/bundesliga-club/leipzig/leipzig.component';
import { UnionComponent } from './pages/new-season/bundesliga-club/union/union.component';
import { WolfsburgComponent } from './pages/new-season/bundesliga-club/wolfsburg/wolfsburg.component';
import { AtleticoComponent } from './pages/new-season/laliga-club/atletico/atletico.component';
import { BarcelonaComponent } from './pages/new-season/laliga-club/barcelona/barcelona.component';
import { LaligaClubComponent } from './pages/new-season/laliga-club/laliga-club.component';
import { RealmadridComponent } from './pages/new-season/laliga-club/realmadrid/realmadrid.component';
import { SociedadComponent } from './pages/new-season/laliga-club/sociedad/sociedad.component';
import { ValenciaComponent } from './pages/new-season/laliga-club/valencia/valencia.component';
import { VillarealComponent } from './pages/new-season/laliga-club/villareal/villareal.component';
import { NewSeasonComponent } from './pages/new-season/new-season.component';
import { ArsenalComponent } from './pages/new-season/prl-club/arsenal/arsenal.component';
import { LiverpoolComponent } from './pages/new-season/prl-club/liverpool/liverpool.component';
import { MancityComponent } from './pages/new-season/prl-club/mancity/mancity.component';
import { ManutdComponent } from './pages/new-season/prl-club/manutd/manutd.component';
import { NewcastleComponent } from './pages/new-season/prl-club/newcastle/newcastle.component';
import { TottenhamComponent } from './pages/new-season/prl-club/tottenham/tottenham.component';
import { StadiumPageComponent } from './pages/stadium-page/stadium-page.component';
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

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'new-season', component:NewSeasonComponent},
  {path:'new-season/laliga', component:LaligaClubComponent},
  {path:'new-season/real-madrid', component:RealmadridComponent},
  {path:'new-season/Barcelona', component: BarcelonaComponent},
  {path:'new-season/Valencia', component:ValenciaComponent},
  {path:'new-season/Atletico', component:AtleticoComponent},
  {path:'new-season/sociedad', component:SociedadComponent},
  {path:'new-season/villareal', component:VillarealComponent},
  {path:'login-page', component:LoginPageComponent},
  {path:'login-page/register-page', component:RegisterPageComponent},
  {path:'classics', component:ClassicsComponent},
  {path:'balls', component:BallsPageComponent},
  {path:'stadium', component:StadiumPageComponent},
  {path:'cart', component:CartComponent},
  {path:'new-season/Liverpool', component:LiverpoolComponent},
  {path:'new-season/mancity', component: MancityComponent},
  {path:'new-season/manutd', component:ManutdComponent},
  {path:'new-season/arsenal', component:ArsenalComponent},
  {path:'new-season/tottenham', component:TottenhamComponent},
  {path:'new-season/newcastle', component:NewcastleComponent},
  {path:'new-season/bayern', component:BayernComponent},
  {path:'new-season/dortmund', component: DortmundComponent},
  {path:'new-season/frankfurt', component:FrankfurtComponent},
  {path:'new-season/leipzig', component:LeipzigComponent},
  {path:'new-season/unionBerlin', component:UnionComponent},
  {path:'new-season/wolfsburg', component:WolfsburgComponent},
  {path:'profile', component:UserProfileComponent},
  {path:'continue-shopping', component:ContinueShoppingComponent},
  {path:'shirts', component:ShirtsComponent},
  {path:'others', component:OthersComponent},
  {path:'stadium', component:StadiumPageComponent},
  {path:'balls', component:BallsPageComponent},
  {path:'nations', component:NationsComponent},
  {path:'new-season/ac-milan', component:AcMilanComponent},
  {path:'new-season/inter-milan', component:InterMilanComponent},
  {path:'new-season/juventus', component:JuventusComponent},
  {path:'new-season/napoli', component:NapoliComponent},
  {path:'new-season/roma', component:RomaComponent},
  {path:'new-season/atalanta', component:AtalantaComponent},
  {path:'new-season/paris-saint-germain', component:ParisComponent},
  {path:'new-season/olympique-lyonnaisn', component:LyonComponent},
  {path:'new-season/olympique-de-marseille', component:MarseilleComponent},
  {path:'new-season/losc-lille', component:LilleComponent},
  {path:'new-season/ogc-nice', component:NiceComponent},
  {path:'new-season/monaco', component:MonacoComponent}

 





];

@NgModule({
  imports: [RouterModule.forRoot(routes,
           {scrollPositionRestoration: 'enabled'})
           ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

