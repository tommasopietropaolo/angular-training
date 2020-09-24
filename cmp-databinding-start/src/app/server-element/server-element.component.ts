import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent  {

  //type definition for property we want to use in our html code (inside the poarentesis),
  // we need to add @Input() and export frome angular/core to expose the property that we need
  //you can put inside the parentesis of Input('.....') an alias to point at instead to use the name of the property, if you put an alias you have to point at the alias no more at the name
  @Input('srvElement') element:{type: string, name: string, content: string}; 



  

}
