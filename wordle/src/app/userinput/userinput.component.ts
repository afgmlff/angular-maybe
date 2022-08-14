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

  tempSecret1: string = ''
  
  value: string = ''

  valueArr: string[] = []
  charArr1: any[] = []
  charArr2: any[] = []
  charArr3: any[] = []
  charArr4: any[] = []
  charArr5: any[] = []
  charArr6: any[] = []

/**
 * Check input size box 1
 */
  checkEntry1(value: string) {
    if(value.length == 5){
      this.onEnter1(value)
      this.checkBefore1()

    }
  }


/**
 * Display nova box se a anterior for preenchida corretamente
 */
  checkBefore1() {
    var tempDiv = document.getElementById("hiddenBox2")
    var showHide = document.getElementById("show-hide1")
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
    this.tempSecret1 = this.secretWord
    this.checkCharPresence1()
  }





  /**
   * Lógica para as cores de retorno pós enter
   */
  checkCharPresence1() {
    var index = "ch"
    var tempCh
    this.secretChArr = this.secretWord.split('').slice(0, 5)
    
    var matchPosition = "green"         //char certo na posicao certa
    var presentDiffPosition = "yellow"  //char certo na posicao errada


    //troca cor pra verde caso acerte
    for(let i=0; i<5; i++){
      if(this.secretChArr[i] == this.charArr1[i]){
        this.changeGreenBox1(i)
      }
    }


    //troca o restante pra amarelo case semi-acerte e já não esteja verde
    for(let i=0; i<5; i++){
      if(this.tempSecret1.includes(this.charArr1[i])){
        console.log("secret1: " + this.tempSecret1 + ", char identificado: " + this.charArr1[i])
        this.changeYellowBox1(i)
      }
    }

 
  }



  //função pra detectar char que deve ser amarelo
  changeYellowBox1(i: number) {
    var index = "b1ch"
    var tempCh
    var presentDiffPosition = "yellow" 
    var matchPosition = "green"

    tempCh = document.getElementById(index + (i+1).toString())

      if(tempCh != null && tempCh.style.color != matchPosition)
        tempCh.style.color = presentDiffPosition
  }


  //função pra detectar char que deve ser verde
  changeGreenBox1(i: number){
    var index = "b1ch"
    var tempCh
    var matchPosition = "green" 
    
    tempCh = document.getElementById(index + (i+1).toString())
    if(tempCh != null)
      tempCh.style.color = matchPosition

    this.tempSecret1 = this.tempSecret1.replace(this.secretChArr[i], '')
  }




  /**
   * Segundo input, mesmas funções
   */



  /**
    * Check input size box 2
    */
   checkEntry2(value: string) {
    if(value.length == 5){
      this.onEnter2(value)
      this.checkBefore2()
    }
  }


  /**
   * Get input box 2
   */
   onEnter2(value: string) {
    this.valueArr[1] = value.toUpperCase()
    this.charArr2 = this.valueArr[1].split('').slice(0, 5)
    console.log("box 2:" + this.charArr2)
    this.checkCharPresence2()
    this.tempSecret1 = this.secretWord
  }

  checkCharPresence2() {
    var index = "b2ch"
    var tempCh
    this.secretChArr = this.secretWord.split('').slice(0, 5)
    
    var matchPosition = "green"         //char certo na posicao certa
    var presentDiffPosition = "yellow"  //char certo na posicao errada


    //troca cor pra verde caso acerte
    for(let i=0; i<5; i++){
      if(this.secretChArr[i] == this.charArr2[i]){
        this.changeGreenBox2(i)
      }
    }


    //troca o restante pra amarelo case semi-acerte e já não esteja verde
    for(let i=0; i<5; i++){
      if(this.tempSecret1.includes(this.charArr2[i])){
        this.changeYellowBox2(i)
      }
    }
  }

  checkBefore2() {
    var tempDiv = document.getElementById("hiddenBox3")
    var showHide = document.getElementById("show-hide2")
    if (this.valueArr[1] != null && tempDiv != null && showHide != null){
      tempDiv.style.display = "block"
      showHide.style.display = "none"
    }
  }


    //função pra detectar char que deve ser amarelo
    changeYellowBox2(i: number) {
      var index = "b2ch"
      var tempCh
      var presentDiffPosition = "yellow" 
      var matchPosition = "green"
  
      tempCh = document.getElementById(index + (i+1).toString())
  
        if(tempCh != null && tempCh.style.color != matchPosition)
          tempCh.style.color = presentDiffPosition
    }
  
  
    //função pra detectar char que deve ser verde
    changeGreenBox2(i: number){
      var index = "b2ch"
      var tempCh
      var matchPosition = "green" 
      
      tempCh = document.getElementById(index + (i+1).toString())
      if(tempCh != null)
        tempCh.style.color = matchPosition
  
      console.log(this.secretChArr[i])
      this.tempSecret1 = this.tempSecret1.replace(this.secretChArr[i], '')
    }
  




  /**
   * Terceiro input, mesmas funções
   */



  /**
    * Check input size box 3
    */
   checkEntry3(value: string) {
    if(value.length == 5){
      this.onEnter3(value)
      this.checkBefore3()
    }
  }

  checkBefore3() {
    var tempDiv = document.getElementById("hiddenBox4")
    var showHide = document.getElementById("show-hide3")
    if (this.valueArr[2] != null && tempDiv != null && showHide != null){
      tempDiv.style.display = "block"
      showHide.style.display = "none"
    }
  }

  /**
   * Get input box 2
   */
   onEnter3(value: string) {
    this.valueArr[2] = value.toUpperCase()
    this.charArr3 = this.valueArr[2].split('').slice(0, 5)
    console.log("box 3:" + this.charArr3)
    this.checkCharPresence3()
    this.tempSecret1 = this.secretWord
  }

  checkCharPresence3() {
    var index = "b3ch"
    var tempCh
    this.secretChArr = this.secretWord.split('').slice(0, 5)
    
    var matchPosition = "green"         //char certo na posicao certa
    var presentDiffPosition = "yellow"  //char certo na posicao errada


    //troca cor pra verde caso acerte
    for(let i=0; i<5; i++){
      if(this.secretChArr[i] == this.charArr3[i]){
        this.changeGreenBox3(i)
      }
    }


    //troca o restante pra amarelo case semi-acerte e já não esteja verde
    for(let i=0; i<5; i++){
      if(this.tempSecret1.includes(this.charArr3[i])){
        this.changeYellowBox3(i)
      }
    }
  }


    //função pra detectar char que deve ser amarelo
    changeYellowBox3(i: number) {
      var index = "b3ch"
      var tempCh
      var presentDiffPosition = "yellow" 
      var matchPosition = "green"
  
      tempCh = document.getElementById(index + (i+1).toString())
  
        if(tempCh != null && tempCh.style.color != matchPosition)
          tempCh.style.color = presentDiffPosition
    }
  
  
    //função pra detectar char que deve ser verde
    changeGreenBox3(i: number){
      var index = "b3ch"
      var tempCh
      var matchPosition = "green" 
      
      tempCh = document.getElementById(index + (i+1).toString())
      if(tempCh != null)
        tempCh.style.color = matchPosition
  
      console.log(this.secretChArr[i])
      this.tempSecret1 = this.tempSecret1.replace(this.secretChArr[i], '')
    }
  

/**
   * Quarto input, mesmas funções
   */



  /**
    * Check input size box 4
    */
   checkEntry4(value: string) {
    if(value.length == 5){
      this.onEnter4(value)
      this.checkBefore4()
    }
  }

  checkBefore4() {
    var tempDiv = document.getElementById("hiddenBox5")
    var showHide = document.getElementById("show-hide4")
    if (this.valueArr[3] != null && tempDiv != null && showHide != null){
      tempDiv.style.display = "block"
      showHide.style.display = "none"
    }
  }

  /**
   * Get input box 4
   */
   onEnter4(value: string) {
    this.valueArr[3] = value.toUpperCase()
    this.charArr4 = this.valueArr[3].split('').slice(0, 5)
    console.log("box 4:" + this.charArr4)
    this.checkCharPresence4()
    this.tempSecret1 = this.secretWord
  }

  checkCharPresence4() {
    var index = "b4ch"
    var tempCh
    this.secretChArr = this.secretWord.split('').slice(0, 5)
    
    var matchPosition = "green"         //char certo na posicao certa
    var presentDiffPosition = "yellow"  //char certo na posicao errada


    //troca cor pra verde caso acerte
    for(let i=0; i<5; i++){
      if(this.secretChArr[i] == this.charArr4[i]){
        this.changeGreenBox4(i)
      }
    }


    //troca o restante pra amarelo case semi-acerte e já não esteja verde
    for(let i=0; i<5; i++){
      if(this.tempSecret1.includes(this.charArr4[i])){
        this.changeYellowBox4(i)
      }
    }
  }


    //função pra detectar char que deve ser amarelo
    changeYellowBox4(i: number) {
      var index = "b4ch"
      var tempCh
      var presentDiffPosition = "yellow" 
      var matchPosition = "green"
  
      tempCh = document.getElementById(index + (i+1).toString())
  
        if(tempCh != null && tempCh.style.color != matchPosition)
          tempCh.style.color = presentDiffPosition
    }
  
  
    //função pra detectar char que deve ser verde
    changeGreenBox4(i: number){
      var index = "b4ch"
      var tempCh
      var matchPosition = "green" 
      
      tempCh = document.getElementById(index + (i+1).toString())
      if(tempCh != null)
        tempCh.style.color = matchPosition
  
      console.log(this.secretChArr[i])
      this.tempSecret1 = this.tempSecret1.replace(this.secretChArr[i], '')
    }
  

  /**
   * Quinto input, mesmas funções
   */



  /**
    * Check input size box 5
    */
   checkEntry5(value: string) {
    if(value.length == 5){
      this.onEnter5(value)
      this.checkBefore5()
    }
  }

  checkBefore5() {
    var tempDiv = document.getElementById("hiddenBox6")
    var showHide = document.getElementById("show-hide5")
    if (this.valueArr[4] != null && tempDiv != null && showHide != null){
      tempDiv.style.display = "block"
      showHide.style.display = "none"
    }
  }

  /**
   * Get input box 5
   */
   onEnter5(value: string) {
    this.valueArr[4] = value.toUpperCase()
    this.charArr5 = this.valueArr[4].split('').slice(0, 5)
    console.log("box 5:" + this.charArr5)
    this.checkCharPresence5()
    this.tempSecret1 = this.secretWord
  }

  checkCharPresence5() {
    var index = "b5ch"
    var tempCh
    this.secretChArr = this.secretWord.split('').slice(0, 5)
    
    var matchPosition = "green"         //char certo na posicao certa
    var presentDiffPosition = "yellow"  //char certo na posicao errada


    //troca cor pra verde caso acerte
    for(let i=0; i<5; i++){
      if(this.secretChArr[i] == this.charArr5[i]){
        this.changeGreenBox5(i)
      }
    }


    //troca o restante pra amarelo case semi-acerte e já não esteja verde
    for(let i=0; i<5; i++){
      if(this.tempSecret1.includes(this.charArr5[i])){
        this.changeYellowBox5(i)
      }
    }
  }


    //função pra detectar char que deve ser amarelo
    changeYellowBox5(i: number) {
      var index = "b5ch"
      var tempCh
      var presentDiffPosition = "yellow" 
      var matchPosition = "green"
  
      tempCh = document.getElementById(index + (i+1).toString())
  
        if(tempCh != null && tempCh.style.color != matchPosition)
          tempCh.style.color = presentDiffPosition
    }
  
  
    //função pra detectar char que deve ser verde
    changeGreenBox5(i: number){
      var index = "b5ch"
      var tempCh
      var matchPosition = "green" 
      
      tempCh = document.getElementById(index + (i+1).toString())
      if(tempCh != null)
        tempCh.style.color = matchPosition
  
      console.log(this.secretChArr[i])
      this.tempSecret1 = this.tempSecret1.replace(this.secretChArr[i], '')
    }
  


  constructor() { }

  ngOnInit(): void {
 
  }

}
