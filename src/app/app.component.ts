import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';
import { Utilities } from './utilities';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'my-first-project';

  mediaTags: any = {
    ogUrl: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: "",
    twitterTitle: "",
    twitterDescription: "",
    twitterImage: ""
  };
  ngOnInit() {
    this.getHeaderBannerImg();
  }

  constructor(
    private platformLocation: PlatformLocation,
    private router: Router,
    private commonService: CommonService) { }



getHeaderBannerImg() {
   
 
        this.mediaTags.ogUrl = (this.platformLocation as any).location.origin + this.router.url;
        this.mediaTags.ogTitle = "SocialMediaTitle";
        this.mediaTags.twitterTitle = "SocialMediaTitle";
        this.mediaTags.ogImageUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg";
        this.mediaTags.twitterImage = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg";
        this.mediaTags.ogDescription = "Section Description";
        this.mediaTags.twitterDescription = "Section Description";
        this.commonService.setMediaTags(this.mediaTags);
      }
}
