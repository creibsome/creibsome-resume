import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContactPageRoutingModule } from './contact-routing.module';
import { ConfigurationService } from '../services/configuration-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ContactPage }]),
    ContactPageRoutingModule,
  ],
  declarations: [ContactPage],
  providers: [ConfigurationService]
})
export class ContactPageModule {}
