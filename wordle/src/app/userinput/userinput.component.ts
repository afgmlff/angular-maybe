import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent {

  value: string = ''

  valueArr: string[] = []
  charArr1: any[] = []
  charArr2: any[] = []


  checkEntry1(value: string) {
    if(value.length == 5){
      this.onEnter1(value)
    }
  }

  checkEntry2(value: string) {
    if(value.length == 5){
      this.onEnter2(value)
    }
  }

  onEnter1(value: string) {
    this.valueArr[0] = value.toUpperCase()

//    console.log("box 1: " + this.valueArr[0])
    this.charArr1 = this.valueArr[0].split('').slice(0, 5)
    console.log("box 1: " + this.charArr1)
  }

  onEnter2(value: string) {
    this.valueArr[1] = value.toUpperCase()
    console.log(this.valueArr[1])
    this.charArr2 = this.valueArr[1].split('').slice(0, 5)
    console.log("box 2:" + this.charArr2)
  }

  constructor() { }

  ngOnInit(): void {
 
  }

}
