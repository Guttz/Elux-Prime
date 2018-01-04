import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable }            from 'rxjs/Observable';

@Component({
  template: `
list
    <ul class="items">
      <li *ngFor="let crisis of crises$ | async"
        [class.selected]="crisis.id === selectedId">
        <a [routerLink]="[crisis.id]">
          <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
        </a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class CrisisListComponent implements OnInit {
  selectedId: number;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/