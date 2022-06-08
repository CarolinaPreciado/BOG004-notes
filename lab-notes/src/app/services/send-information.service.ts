import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendInformationService {
@Output() dispatchSendInformation: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
