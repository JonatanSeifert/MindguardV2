import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramPageRoutingModule } from './program-routing.module';

import { ProgramPage } from './program.page';
import { Program1Component } from '../programs/program1/program1.component';
import { Program2Component } from '../programs/program2/program2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramPageRoutingModule
  ],
  declarations: [ProgramPage, Program1Component, Program2Component]
})
export class ProgramPageModule {
  @Input() customData: any;

}
