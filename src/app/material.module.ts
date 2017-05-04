import { NgModule } from '@angular/core';

// some components from @angular/material need this
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Import all required @angular/material component modules
import {MdButtonModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule, MdButtonModule, MdIconModule],
  exports: [BrowserAnimationsModule, MdButtonModule, MdIconModule],
})
export class MaterialModule { }
