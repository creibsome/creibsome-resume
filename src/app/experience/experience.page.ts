import { Component } from '@angular/core';
import { Configuration } from '../models/configuration.model';
import { ConfigurationService } from '../services/configuration-service';

@Component({
  selector: 'experience-tab',
  templateUrl: 'experience.page.html',
  styleUrls: ['experience.page.scss']
})
export class ExperiencePage {
  config: Configuration = new Configuration();

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit() {
    this.configurationService.getConfiguration().subscribe(data => {
      this.config = data as Configuration;
    });
  }
}
