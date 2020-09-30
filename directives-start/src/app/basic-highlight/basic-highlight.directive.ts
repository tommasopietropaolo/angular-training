import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({ selector: "[appBaseHighlight]" }) //if i put the square brackets here whe i call it i don't use it
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
