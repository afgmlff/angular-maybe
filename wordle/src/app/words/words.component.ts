import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { wordlist } from './test';



@Component({ //decorator, passa um obj de metadados
  selector: 'app-words', //tag html que uso pra representar o componente
  templateUrl: './words.component.html', 
  styleUrls: ['./words.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WordsComponent implements OnInit {
  test: number
  rndWord: string
  constructor() { 

    const listLength = wordlist.length
    console.log("size: " + listLength)
    this.test = listLength

    /*

    filtrar p 5 letter words.

    */

    this.rndWord = wordlist[Math.floor(Math.random()*this.test)]

  }

  ngOnInit(): void {
  }

}
