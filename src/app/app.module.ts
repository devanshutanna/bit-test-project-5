import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { DepTestModule } from './dep-test/dep-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloWorldModule,
    DepTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
