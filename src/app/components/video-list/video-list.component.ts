import { Component, OnInit } from '@angular/core';
import { filter, Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  public videoList!: any[]

  public currentChannel: any
  

  constructor(private api: ApiService, private channelSrv: ChannelService) { }

  ngOnInit(): void {
    this.channelSrv.ChannelSubject.subscribe( x => {
      this.currentChannel = x
      console.log('this.currentChannel', this.currentChannel)
    })

    var obs = this.channelSrv.ChannelSubject.asObservable()

    obs.pipe(
      filter( x => x != null),
      switchMap(x=> this.api.getSingleVideo(x.id))
    ).subscribe( x => this.videoList = x)


  }


}
