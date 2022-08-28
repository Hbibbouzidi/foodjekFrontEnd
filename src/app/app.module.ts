import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { RestaurantsModule} from './restaurants/restaurants.module';
import { LivreursModule} from './livreurs/livreurs.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RestaurantsModule,
    LivreursModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
