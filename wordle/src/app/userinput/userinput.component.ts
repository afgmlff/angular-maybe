import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent {

  value: string = ''
  charArr: any[] = []

  onEnter(value: string) {
    this.value = value;
    this.charArr = this.value.split('').slice(0, 5)
    console.log(this.charArr)
  }


  constructor() { }

  ngOnInit(): void {
 
  }

}
