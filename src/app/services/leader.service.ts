import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaderes(): Leader[] {
    return LEADERS;
  }
  
  getLeader(id: number): Leader {
    return LEADERS.filter((leader) => ( leader.id === id.toString()))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}