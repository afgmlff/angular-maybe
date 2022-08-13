import { Component, Input, OnInit } from '@angular/core';
import { WordsComponent } from '../words/words.component';


@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent {

  @Input() secretWord = '' //recebe rndWord do pai

  secretChArr: any [] = []
  
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
    this.checkCharPresence()
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
  checkCharPresence() {
    var index = "ch"
    var tempCh
    this.secretChArr = this.secretWord.split('').slice(0, 5)
    var tempSecret = this.secretWord
    
    var matchPosition = "green"
    var presentDiffPosition = "yellow"

    for(let i=0; i<5; i++){
      if(this.secretChArr[i] == this.charArr1[i]){
        tempCh = document.getElementById(index + (i+1).toString())
        if(tempCh != null)
          tempCh.style.color = matchPosition

        console.log(this.secretChArr[i])
        tempSecret = tempSecret.replace(this.secretChArr[i], '')
      }
    }

    for(let i=0; i<5; i++){
      if(tempSecret.includes(this.charArr1[i])){
  //      console.log("Contém " + this.charArr1[i])
        tempCh = document.getElementById(index + (i+1).toString())

        if(tempCh != null && tempCh.style.color != matchPosition)
          tempCh.style.color = presentDiffPosition
      }
    }

 
  }

  changeYellow(i: number) {
    //join ch + i -> ch1, ch2...
  }



  constructor() { }

  ngOnInit(): void {
 
  }

}
