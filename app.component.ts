import { Component, ViewEncapsulation } from '@angular/core';
import { reduce } from 'rxjs';
import { Sampleclass } from './sampleclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  panelOpenState = false;
  title = 'TO DO List App';

  message = 'Welcome to our application';

  fun(){
    return this.message;
  }

  isDisabled:boolean = false;
   

  todotitle="";
  todotext="";
  todos:Sampleclass[]=[new Sampleclass("todo1","text1")];
  todolist:Sampleclass[]=[new Sampleclass("todo1","todo2")];
  selectedObjects = this.todos;

  Add(){
    let todo = new Sampleclass(this.todotitle,this.todotext);
    this.todos.push(todo);
      for(let i of this.todos)
      {
        console.log(i);
        
      }
  }

  // *ngSwitch
  // todolist Array<string>["todo1","todo2","todo3","todo4"];
  // public choose = "";
  // set Value(drp any){
  //   this.choose = drp.target.value;
  // }

  //Attribute Directives ngStyle
  colorFlag:boolean= true;
  getColorFunction(){
    if(this.colorFlag){
      return "green";
    }
    else{
      return "red";
    }
  }

  // PIPES IN ANGULAR
  name="sravan";
  amount=100000;
  date= new Date();

}


