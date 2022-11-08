import { Component, OnInit } from '@angular/core';
import { filter, Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  public channels$!: Observable<any[]>

  constructor(private api: ApiService, private channelSrv: ChannelService) { }

  ngOnInit(): void {
        this.channels$ = this.api.getVideoList()
  }

  public selectChannelCommand( channel: any) {
    this.channelSrv.setCurrentChannel(channel)
    console.log('channel', channel)
  }

}
