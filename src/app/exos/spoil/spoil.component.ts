import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spoil',
  templateUrl: './spoil.component.html',
  styleUrls: ['./spoil.component.scss']
})
export class SpoilComponent implements OnInit {
	spoil: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
