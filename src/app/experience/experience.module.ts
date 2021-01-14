import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExperiencePage } from './experience.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ExperiencePageRoutingModule } from './experience-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ExperiencePageRoutingModule
  ],
  declarations: [ExperiencePage]
})
export class ExperiencePageModule {}
