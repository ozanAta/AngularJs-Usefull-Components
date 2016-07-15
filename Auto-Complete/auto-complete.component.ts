/// <reference path="../typings/tsd.d.ts" />
import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ControlGroup, FormBuilder} from 'angular2/common';
import {AutoCompleteService} from './auto-complete.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
@Component({
    selector: 'auto-complete',
    template: `
        <form [ngFormModel]='form'>
            <input class='form-control' type="text" ngControl='search' placeholder="Search query...">
        </form>
    `,
    providers: [AutoCompleteService],
    styles:[`
        form{
            margin:5px;
            padding:15px;
            background-color:#ccc;
            border-radius:15px;

        }
    `]
})
export class AutoCompleteComponent {
    form: ControlGroup;
    constructor(autocomplete:AutoCompleteService, fb:FormBuilder) {
        this.form = fb.group({
            search: []
        });
        var search = this.form.find('search');
        search.valueChanges
            .filter(text => text.length>=3)
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '-'))
            .distinctUntilChanged()
            .flatMap(searchQuery => autocomplete.getArtists(searchQuery))
            .subscribe(element => console.log(element));
    }
}