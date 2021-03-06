import {Component, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {Scheme} from '../../shared/scheme.model';
import {SchemePublicService} from '../public.service';

import '../../shared/public-viewer/scheme-viewer.model';

/**
 * 教学计划（公共）。
 */
@Component({
    selector: 'public-scheme',
    templateUrl: 'public-item.component.html',
})
export class SchemePublicItemComponent {
    private vm: Scheme;

    constructor(
        private elementRef: ElementRef,
        private service: SchemePublicService,
        private title: Title) {
        // TODO: see https://github.com/angular/angular/issues/1858
        const id = elementRef.nativeElement.getAttribute('id');
        this.service.loadItem(id).subscribe(dto => {
            this.vm = new Scheme(dto);
            this.vm.normalize();
            this.title.setTitle(`${this.vm.departmentName} - ${this.vm.title}`);
        });
    }
}
