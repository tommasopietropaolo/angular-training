import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";
//I used the Angular Renderer class to change the style of a HTML element.You should use the Renderer for any DOM manipulations.
//Of course, you can do more than simply change the styling of an element via setStyle(). Learn more about the available Renderer methods
// https://angular.io/api/core/Renderer2
@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  //with this we can bind from outside the color
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  @HostBinding("style.backgroundColor") backgroundColor: string; //With this, we're telling Angular is on the element this directive sits, please access the style

  constructor(private elRef: ElementRef, private render: Renderer2) {}
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.render.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }

  //With @HostListener("name") eventName(){} You can change some element of the DOM by an event
  @HostListener("mouseenter") mousover(eventData: Event) {
    //this.render.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.highlightColor; //we can use this after we use HostBinding
  }

  @HostListener("mouseleave") mousleave(eventData: Event) {
    //this.render.setStyle(this.elRef.nativeElement,"background-color","transparent");
    this.backgroundColor = this.defaultColor;
  }
}
