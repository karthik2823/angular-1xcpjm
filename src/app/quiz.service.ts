import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  // the list of questions and their answers
  questions = [
    {
      category: 'Coding',
      question: 'Which is the largest country in the world by population? :',
      answers: ['India', 'USA','China','Russia']
    },
    {
      category: 'Coding',
      question: 'When did the second world war end? : ',
      answers: ['1945', '1939','1944','1942']
    },
    {
      category: 'Coding',
      question: 'Which was the first country to issue paper currency? : ',
      answers: ['USA', 'France','Italy','China']
    },
    {
      category: 'Coding',
      question: 'Which city hosted the 1996 Summer Olympics? : ',
      answers: ['Atlanta', 'Sydney','Athens','Beijing']
    },
        {
      category: 'Coding',
      question: 'Who invented telephone? : ',
      answers: ['Albert Einstein', 'Alexander Graham Bell','Isaac Newton','Marie Curie']
    },
  ];

  // the ID of the current question displayed. Used to navigate and query a specific question.
  questionId: number;

  // The list of answers. 
  answers = [];

  constructor() { }

  /*
    4. Store the answer. Called when the user clicks on an answer. 
    Because we are already checking if the question ID isn't greater than the total of questions, we don't need to check if the answer given by the user is the last one. 

    Go to answer.component.html
  */
  validate(answer) {
    this.answers.push({ question: this.questions[this.questionId].question, answer });
  }

}