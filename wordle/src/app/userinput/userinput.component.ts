import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent {

  value = '';
  onEnter(value: string){
    this.value = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
