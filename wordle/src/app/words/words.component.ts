import { Component, OnInit } from '@angular/core';
import { wordlist } from './test';



@Component({ //decorator, passa um obj de metadados
  selector: 'app-words', //tag html que uso pra representar o componente
  templateUrl: './words.component.html', 
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor() { 

    const listLength = wordlist.length;
    console.log("size: " + listLength)

  }

  ngOnInit(): void {
  }

}
