import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService { 
    constructor(private httpClient: HttpClient) {}

    getConfiguration() {
        return this.httpClient.get("assets/configuration.json");
    }
  }