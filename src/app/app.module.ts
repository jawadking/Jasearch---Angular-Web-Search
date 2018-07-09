import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JaresultsComponent } from './jaresults/jaresults.component';
import { JaresultGuardService } from './jaresults/jaresult-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    JaresultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: AppComponent},
    //{path: 'results', redirectTo:'welcome', pathMatch:'full'},
      {path: 'results/:searchText', component: JaresultsComponent, canActivate: [JaresultGuardService ]}
      
     // {path : '', redirectTo:'welcome', pathMatch:'full'}
      //{path : '**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  providers: [JaresultGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
