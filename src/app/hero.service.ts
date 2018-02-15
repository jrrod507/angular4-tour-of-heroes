import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()

export class HeroService {

    constructor(private messageService: MessageService) { }
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHeroesObservable(): Observable<Hero[]>  {
        // Todo: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
}