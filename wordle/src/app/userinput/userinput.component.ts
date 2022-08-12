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

/**
 * Check input size box 1
 */
  checkEntry1(value: string) {
    if(value.length == 5){
      this.onEnter1(value)
      this.checkBefore()
    }
  }



/**
 * Check input size box 2
 */
  checkEntry2(value: string) {
    if(value.length == 5){
      this.onEnter2(value)
    }
  }

/**
 * Display nova box se a anterior for preenchida corretamente
 */
  checkBefore() {
    var tempDiv = document.getElementById("hidden")
    var showHide = document.getElementById("show-hide")
    if (this.valueArr[0] != null && tempDiv != null && showHide != null){
      tempDiv.style.display = "block"
      showHide.style.display = "none"
    }
  }


  /**
   * Get input box 1
   */
  onEnter1(value: string) {
    this.valueArr[0] = value.toUpperCase()  //string palavra 1

    this.charArr1 = this.valueArr[0].split('').slice(0, 5)  //array palavra 1
    console.log("box 1: " + this.charArr1)
  }



  /**
   * Get input box 2
   */
  onEnter2(value: string) {
    this.valueArr[1] = value.toUpperCase()
    console.log(this.valueArr[1])
    this.charArr2 = this.valueArr[1].split('').slice(0, 5)
    console.log("box 2:" + this.charArr2)
  }





  /**
   * Lógica para as cores de retorno pós enter
   */






  constructor() { }

  ngOnInit(): void {
 
  }

}
