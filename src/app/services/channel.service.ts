import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private channelSubject!: BehaviorSubject<any>

  constructor() {
    this.channelSubject = new BehaviorSubject(null)
  }

  get ChannelSubject() {
    return this.channelSubject
  }

  //un metodo che ci consente di effettuare la push dei vari eventi

  public setCurrentChannel(channel: any) {
    if (this.channelSubject.value == null || this.channelSubject.value.id !== channel.id) {
      this.channelSubject.next(channel)
    }
  }

}
