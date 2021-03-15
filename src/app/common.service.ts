import { Injectable, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit {

 

  constructor(   
    private meta: Meta) {
  }

  async ngOnInit() {
  }
   
  setMediaTags(mediaTag) {
    this.meta.addTags([
      { name: 'og:url', content: mediaTag.ogUrl },
      { name: 'og:title', content: mediaTag.ogTitle },
      { name: 'og:description', content: mediaTag.ogDescription },
      { name: 'og:image', content: mediaTag.ogImageUrl },
      { name: 'og:image:width', content: "400" },
      { name: 'og:image:height', content: "300" },
      { name: 'twitter:title', content: mediaTag.twitterTitle },
      { name: 'twitter:description', content: mediaTag.twitterDescription },
      { name: 'twitter:image', content: mediaTag.twitterImage },
      { name: 'twitter:image:height', content: "400" },
      { name: 'twitter:image:width', content: "300" },
      { name: 'twitter:card', content: "summary" }]);
  }

 
}
