import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-intro-header',
  template: `
    <div class="intro-header">
		<div class="col-xs-12 text-center abcen1">
			<h1 class="h1_home wow fadeIn" data-wow-delay="0.4s">{{titleName}}</h1>
			<h3 class="h3_home wow fadeIn" data-wow-delay="0.6s">Any Damn Framework</h3>
			<ul class="list-inline intro-social-buttons">
				<li><a href="https://twitter.com/galantiandrea" class="btn  btn-lg mybutton_cyano wow fadeIn" data-wow-delay="0.8s"><span class="network-name">Twitter</span></a>
				</li>
				<li id="download" ><a href="#downloadlink" class="btn  btn-lg mybutton_standard wow swing wow fadeIn" data-wow-delay="1.2s"><span class="network-name">Free Download</span></a>
				</li>
			</ul>
		</div>    
        <!-- /.container -->
		<div class="col-xs-12 text-center abcen wow fadeIn">
			<div class="button_down "> 
				<a class="imgcircle wow bounceInUp" data-wow-duration="1.5s"  href="#whatis"> <img class="img_scroll" src="assets/img/icon/circle.png" alt=""> </a>
			</div>
		</div>
    </div>
  `,
  styles: []
})
export class IntroHeaderComponent implements OnInit {
  private titleName: string;
  
	constructor(private appService: AppService) { }

  ngOnInit() {
		this.titleName = this.appService.getTitleName();
  }

}
