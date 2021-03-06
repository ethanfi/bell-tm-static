import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Direction, RecordStatus, Scheme, SchemeCourse} from '../../shared/scheme.model';
import './department-toes.model';

@Component({
    selector: '[scheme-course]',
    styleUrls: ['scheme-course.component.scss'],
    templateUrl: 'scheme-course.component.html',
})
export class SchemeCourseToesComponent {
    @Input('scheme-course') schemeCourse: SchemeCourse;
    @Input() scheme: Scheme;
    @Input() direction: Direction;

    @Output() edit: EventEmitter<null> = new EventEmitter();

    get directionName(): string {
        return this.direction ? this.direction.name : '';
    }

    get departmentName(): string {
        if (this.schemeCourse.departmentName) {
            return this.schemeCourse.departmentName;
        } else {
            return this.scheme.departmentName;
        }
    }

    get startWeekType(): number {
        if (this.schemeCourse.theoryPeriod === 0 && this.schemeCourse.experimentPeriod === 0) {
            return 0;
        } else {
            return 1;
        }
    }
}
