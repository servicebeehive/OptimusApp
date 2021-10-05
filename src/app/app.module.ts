import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigInit } from './services/config/config.init';
import { ConfigService } from './services/config/config.service';
import { Controllers } from './models/controllers';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpIntercertor } from './common/interceptor/http-intercertor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigInit.loadConfig,
      deps: [ConfigService],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercertor, multi: true },
    Controllers,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
