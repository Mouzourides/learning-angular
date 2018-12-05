import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import {Hero} from './Hero';
import { Observable, of } from 'rxjs';
import {MessageService} from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}