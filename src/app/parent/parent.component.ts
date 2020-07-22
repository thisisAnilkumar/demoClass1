import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() childCount;
 familyName: string = "Gurram";
 fatherName: string = 'Sankar Rao';
 motherName: string = 'Nirmala';
 child1Name: string;

 childrenName=[{childOrder: 1, name: "Anil"}, {childOrder:2, name:"Ravi"}, {childOrder:3, name:"Kiran"}]
  constructor() { }

  ngOnInit(): void {
  }

  getChild1Name(val){
    this.child1Name = val;
  }

  btnClicked(val: HTMLInputElement){
    console.log(val.value);
    let newElement = {childOrder: this.childrenName.length+1, name: val.value };
    this.childrenName.push(newElement);
    console.log(this.childrenName);
  }
}
