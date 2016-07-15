import {Observable} from 'rxjs/Rx';
export class AutoCompleteService{
    getArtists(searchQuery){
        var url = 'https://api.spotify.com/v1/search?type=artist&q=' + searchQuery;
        var promise = $.getJSON(url);
        return Observable.fromPromise(promise);
    }
}