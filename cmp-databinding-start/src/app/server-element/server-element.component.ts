import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, 
  OnDestroy, 
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})


export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  //type definition for property we want to use in our html code (inside the poarentesis),
  // we need to add @Input() and export frome angular/core to expose the property that we need
  //you can put inside the parentesis of Input('.....') an alias to point at instead to use the name of the property, if you put an alias you have to point at the alias no more at the name
  @Input('srvElement') element:{type: string, name: string, content: string}; 

  @Input() name: string;

  @ViewChild('heading',{static:true}) header:ElementRef;

  @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef; // @ContentChild we use when the elemente is of another component but we want to pass on another



  //called before OnInit
  constructor(){
    console.log('constructor call');
  }

  //called after every chages when there is the decorato @INput and that property change
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges call');
    console.log(changes)
  }

  //called when initialized a component
  ngOnInit(){
    console.log('ngOnInit call');
    
    //with ngOnInit  you can't check calu of ViewChild elements
    console.log('Text Content: '+ this.header.nativeElement.textContent); 
    console.log('Text Content of paragraph: '+ this.paragraph.nativeElement.textContent); 
  }

  //every time during the check detection, whenever something change
  ngDoCheck(){
    console.log('ngDoCheck call');
  }

  //called after ng content was initialized
  ngAfterContentInit(){
    console.log('ngAfterContentInit call');
    
    console.log('Text Content of paragraph: '+ this.paragraph.nativeElement.textContent); 
  }

  //called everytime ng content was checked
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked call');
  }

  //called when the view is initialized
  ngAfterViewInit(){
    console.log('ngAfterViewInit call');
  //with ngAfterViewInit  you can check calu of ViewChild elements
    console.log('Text Content: '+ this.header.nativeElement.textContent);
  }

  //called everytime view is check
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked call');
  }

  //called when a component was destroyed
  ngOnDestroy(){
    console.log('ngOnDestroy call');
  }

}
