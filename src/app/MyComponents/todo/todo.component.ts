import { Component } from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todos!:Todo[];
  constructor()
  {

    this.todos=[
      {
        serialNo:1,
        title: "My Title",
        description: "My Description",
        active:true
      },
      {
        serialNo:2,
        title: "My Title2",
        description: "My Description2",
        active:true
      },
      {
        serialNo:3,
        title: "My Title3",
        description: "My Description3",
        active:true
      },

    ]

  }

}
