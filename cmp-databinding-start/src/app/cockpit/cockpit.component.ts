import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }

}
