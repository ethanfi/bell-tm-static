import {Pipe} from '@angular/core';

import {LeaveType, LeaveTypeNames} from './form.model';

@Pipe({name: 'leaveType'})
export class LeaveTypePipe {
    transform(type: LeaveType) {
        console.log(LeaveTypeNames)
        return LeaveTypeNames[type];
    }
}
