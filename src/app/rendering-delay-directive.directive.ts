import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rendering-delay]',
})
export class RenderingDelayDirective {
  @Input('rendering-delay') delay: number = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, this.delay);
  }
}
