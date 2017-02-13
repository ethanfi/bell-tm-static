import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {CommonDialogsModule} from 'core/common-dialogs';
import {CommonDirectivesModule} from 'core/common-directives';

import {HereScheduleModule} from '../../../shared/schedule/schedule.module';
import {FreeFormEditorComponent} from './form-editor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CommonDirectivesModule,
        CommonDialogsModule,
        HereScheduleModule,
    ],
    declarations: [
        FreeFormEditorComponent,
    ],
    exports: [
        FreeFormEditorComponent,
    ],
})
export class LeaveFormEditorModule {}
