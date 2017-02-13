import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[markdown]',
    inputs: ['markdown'],
})
export class Markdown {
    md: any;

    constructor(private elementRef: ElementRef) {
        this.md = (window as any).markdownit();
    }

    set markdown(text: string) {
        if (text) {
            this.elementRef.nativeElement.innerHTML = this.md.render(text);
        }
    }
}
