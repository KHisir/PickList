import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CcPicklistComponent } from './cc-picklist/cc-picklist.component';
import { HighlightSearchPipe } from './cc-picklist/pipes/highlightSearch.pipe';

@NgModule({
  declarations: [	
    AppComponent,
      CcPicklistComponent,
      HighlightSearchPipe
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
