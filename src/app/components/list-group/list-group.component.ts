import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
