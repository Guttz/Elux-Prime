import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  title = 'Dashboard';
  extractData = '';
  results = '';

  //O problema é não conseguir instalar inicializar o httpclient no construtor, 
   constructor(private http: HttpClient, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
   	iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
  	}

  extracaoDados(){
  		console.log("Sent http get to http://10.128.156.89:8080");

		  this.http.get('http://10.128.156.89:8080/data').subscribe(data => console.log(data));

	    };

  	}

