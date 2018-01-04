import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-extract-form',
  templateUrl: './extract-form.component.html',
  styleUrls: ['./extract-form.component.css']
})
export class ExtractFormComponent implements OnInit {
	value: Date;

  constructor() { }

  ngOnInit() {
  }

  
}
