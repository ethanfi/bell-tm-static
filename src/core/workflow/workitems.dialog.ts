import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {BaseDialog} from '../dialogs';
import {Rest} from '../http';

/**
 * options: {instance: string}
 */
@Component({
    selector: 'workflow-workitems-dialog',
    template: require('./workitems.html'),
})
export class WorkflowWorkitemsDialog extends BaseDialog {
    constructor(private rest: Rest) {
        super();
    }

    protected onOpening(): Observable<any> {
        return this.rest.get(`/api/workflows/${this.options.instance}/workitems`);
    }
}
