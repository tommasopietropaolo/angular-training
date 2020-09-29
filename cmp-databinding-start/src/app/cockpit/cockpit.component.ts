import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //add two new properties and define as events.
  //using: event name =new EventEmitter<{return type}>();
  //EventEmitter is a object in angular which allows you to emit your own events
  //we need add the decorator @Output() to make the properties listenable from outside

  @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();//we can add an alias just writing it inside parentesis @Output('alias')
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('ServerContentInput',{static:true}) serverContentInput:ElementRef; //@ViewChild get access to some elements from our DOM

  constructor() { }


  //life cycle hooks ngOnInit
  ngOnInit(): void {
  }

  onAddServer(nameInput :HTMLInputElement) {
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput :HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value});
  }

}
