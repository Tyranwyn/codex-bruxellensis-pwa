import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../../services/song-service';
import { Observable } from 'rxjs';
import { Song } from '../../models/song';
import { switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  $song: Observable<Song>;

  constructor(private route: ActivatedRoute,
              private songService: SongService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.$song = this.route.paramMap.pipe(
      switchMap(params => {
        return this.songService.getSongById(params.get('id'));
      })
    );
    this.$song.subscribe(song => this.titleService.setTitle(song.title));
  }

}
