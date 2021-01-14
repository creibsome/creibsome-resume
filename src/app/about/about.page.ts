import { Component } from '@angular/core';
import { Configuration } from '../models/configuration.model';
import { ConfigurationService } from '../services/configuration-service';

@Component({
  selector: 'about-tab',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  config: Configuration = new Configuration();

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit() {
    this.configurationService.getConfiguration().subscribe(data => {
      this.config = data as Configuration;
    });
  }
}
