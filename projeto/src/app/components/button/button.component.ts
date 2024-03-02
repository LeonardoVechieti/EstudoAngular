import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {


  text: string = 'Click me!';
  constructor() { }

  ngOnInit() {
  }

}
