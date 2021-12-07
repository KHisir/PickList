import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CcPicklistComponent } from './cc-picklist/cc-picklist.component';

@NgModule({
  declarations: [	
    AppComponent,
      CcPicklistComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
