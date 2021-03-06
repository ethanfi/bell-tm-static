import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {RestModule} from 'core/rest';

import {CourseClassAttendanceModule} from './course-class.module';
import {CourseClassRoutingModule} from './course-class.routing';
import {CourseClassAttendanceService} from './course-class.service';
import {TeacherCourseClassComponent} from './teacher.component';
import {TeacherCourseClassService} from './teacher.service';

@NgModule({
    bootstrap: [TeacherCourseClassComponent],
    declarations: [
        TeacherCourseClassComponent,
    ],
    imports: [
        BrowserModule,
        RestModule.for('/api/here/teachers/${userId}/courseClasses'),
        CourseClassRoutingModule,
        CourseClassAttendanceModule,
    ],
    providers: [
        TeacherCourseClassService,
        {provide: CourseClassAttendanceService, useExisting: TeacherCourseClassService},
        {provide: 'COURSE_CLASS_API_URL', useValue: '/api/here/courseClasses'},
    ],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
