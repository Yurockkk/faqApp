import { Injectable } from '@angular/core';
import { Question } from '../models/Question'
@Injectable()
export class DataService {
  questions: Question[];
  constructor() { 
    // we'll load from localStorage
    // this.questions = [
      
    //         {
    //           text: 'what is your name?',
    //           answer: 'My name is Yubo',
    //           hide: true
    //         },
    //         {
    //           text: 'what is your favorite color?',
    //           answer: 'My favorite color is red',
    //           hide: true
    //         },
    //         {
    //           text: 'what is your favorite language?',
    //           answer: 'My favorite language is JavaScript',
    //           hide: true
    //         }
      
    //       ];
  }

  //get questions from localStorage
  getQuestions(){

    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  //add questions from localStorage
  addQuestion(question:Question){

    //dealing with showing added question immediately
    this.questions.unshift(question);
    //init local var
    let questions;
    if(localStorage.getItem('questions') === null){
      questions = [];

      //push new question
      questions.unshift(question);
      //set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));

    }else{
      //get the questions array from local storage
      questions = JSON.parse(localStorage.getItem('questions'));
      //Add new question
      questions.unshift(question);

      //reset local storage

      localStorage.setItem('questions',JSON.stringify(questions));
    }
  }

  //remove questions from localStorage
  removeQuestion(question:Question){
    for(let i = 0 ; i < this.questions.length; i++){
      if(question == this .questions[i]){
        this.questions.splice(i,1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
