import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepTestComponent } from './dep-test.component';
import { HelloWorldModule } from '../hello-world/hello-world.module';



@NgModule({
  declarations: [
    DepTestComponent,
  ],
  imports: [
    CommonModule,
    HelloWorldModule,
  ],
  exports: [
    DepTestComponent,
  ],
})
export class DepTestModule { }
