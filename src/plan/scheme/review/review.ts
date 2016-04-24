import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';

import {REST_PROVIDERS, API_URL} from '../../../core/http';
import {SchemeReviewService} from './review.service';
import {SchemeReviewComponent} from './review.component';

bootstrap(SchemeReviewComponent, [
    provide(API_URL, {useValue: '/api/schemes'}),
    REST_PROVIDERS,
    SchemeReviewService,
]);
