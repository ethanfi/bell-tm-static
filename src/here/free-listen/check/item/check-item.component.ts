import {Component, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';

import {Workflow} from 'core/workflow';

import {Schedule, ScheduleDto} from '../../../shared/schedule/schedule.model';
import {FreeListenForm} from '../../shared/form.model';
import {FreeListenCheckService} from '../check.service';

import '../../shared/form-viewer.model';

/**
 * 审核补办学生证申请项。
 */
@Component({
    templateUrl: 'check-item.component.html',

})
export class FreeListenCheckItemComponent {
    schedules: Schedule[];
    form: FreeListenForm;

    private id: string;
    private wi: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: FreeListenCheckService,
        private workflow: Workflow,
    ) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.wi = params['wi'];
            this.loadData();
        });
    }

    loadData() {
        this.service.loadItem(this.id, this.wi).subscribe(dto => {
            const studentSchedules: Schedule[] = dto.studentSchedules.map((s: ScheduleDto) => new Schedule(s));
            const checkerSchedules: Schedule[] = dto.checkerSchedules.map((s: ScheduleDto) => new Schedule(s));
            const departmentSchedules: Schedule[] = dto.departmentSchedules.map((s: ScheduleDto) => new Schedule(s));

            this.form = new FreeListenForm(dto.form, studentSchedules);
            if (this.wi === undefined) {
                this.wi = dto.form.workitemId;
            }

            studentSchedules.forEach(it => it.belongsTo = 'student');
            checkerSchedules.forEach(it => it.belongsTo = 'checker');
            departmentSchedules.forEach(it => it.belongsTo = 'department');
            this.schedules = _.concat(studentSchedules, checkerSchedules, departmentSchedules);
        });
    }

    accept() {
        this.workflow.accept(this.id, this.wi, 'check', this.form.title).then(() => {
            this.loadData();
        }, (error) => {
            alert(error.json().message);
        });
    }

    reject(title: string) {
        this.workflow.reject(this.form.id, this.wi, 'check', this.form.title).then(() => {
            this.loadData();
        }, (error) => {
            alert(error.json().message);
        });
    }

    showWorkitems() {
        this.workflow.workitems(this.form.workflowInstanceId);
    }
}
