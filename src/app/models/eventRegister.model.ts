import { Platform } from './plataforma.model';
import { Event } from './eventos.model';

export interface EventRegister{
  id: number,
  date: number,
  amount: number | null,
  cost: number,
  platform: Platform,
  event:Event
}

