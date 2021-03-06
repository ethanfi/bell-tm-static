import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CommonDirectivesModule} from 'core/common-directives';

import {ReissueOrderListComponent} from './order-list.component';

@NgModule({
    imports: [
        CommonModule,
        CommonDirectivesModule,
        RouterModule,
    ],
    declarations: [
        ReissueOrderListComponent,
    ],
    exports: [ReissueOrderListComponent],
})
export class ReissueOrderListModule {}
