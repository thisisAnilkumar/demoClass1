import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstDemoApp';
  name = "Anil"
  noOfChildren = 1;

  inputChanged(event){
    console.log('vall',event);
    this.title = event.target.value;
  }

  counterChild(){
    ++this.noOfChildren;
  }

}