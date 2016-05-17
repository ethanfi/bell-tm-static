import {Injectable} from '@angular/core';
import {ApiUrl, Rest, Observable} from '../../core/http';
@Injectable()
export class ProgramSettingsService {
    constructor(
        private rest: Rest,
        private api: ApiUrl
    ) {}

    loadList(grade: number): Observable<any[]> {
        if (grade !== 0) {
            return this.rest.get(`${this.api.list()}?grade=${grade}`);
        } else {
            return this.rest.get(`${this.api.list()}`);
        }
    }

    loadGrades(): Observable<any[]> {
        return this.rest.get(`${this.api.list()}/grades`);
    }

    update(programId: number, field: string, value: any): Observable<void> {
        return this.rest.patch(this.api.item(programId), {field, value});
    }
}
