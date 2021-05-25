import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseBibleComponent } from './components/choose-bible/choose-bible.component';
import { BiblesService } from './services/bibles.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionServiceModule } from 'ng-connection-service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [AppComponent, ChooseBibleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ConnectionServiceModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
  ],
  providers: [BiblesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
