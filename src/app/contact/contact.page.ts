import { Component, OnInit } from '@angular/core';
import { Configuration } from '../models/configuration.model';
import { ConfigurationService } from '../services/configuration-service';

@Component({
  selector: 'contact-tab',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {
  config: Configuration = new Configuration();

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit() {
    this.configurationService.getConfiguration().subscribe(data => {
      this.config = data as Configuration;
    });
  }

}
