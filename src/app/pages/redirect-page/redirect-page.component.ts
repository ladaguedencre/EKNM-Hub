import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-home-page',
    templateUrl: './redirect-page.component.html',
    styleUrls: ['./redirect-page.component.css'],
})
export class RedirectPageComponent {

    path: string = "";
    timer: NodeJS.Timeout;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.path = router.url;
        this.timer = setTimeout(function(component: RedirectPageComponent) { 
            return function() {
                component.redirect_fail();
            };
        }(this), 5000);
        this.ping_hub("https://hub.eknm.in/s/zDp0xak3hnjShHi/download");
    }

    redirect_hub(path: string) {
        this.clear_timer();
        this.document.location.href = 'https://hub.eknm.in' + path;
    }

    redirect_fail() {
        this.clear_timer();
        this.router.navigate(['reserve'], { queryParams: {lang: 'en'}});
    }

    redirect_reserve(url: string) {
        this.clear_timer();
        this.router.navigateByUrl('reserve' + url);
    }

    ping_hub(url: string) {
        let img = new Image();

        img.src = url;

        img.onload = (event) => {
            this.redirect_hub(this.path);
        }

        img.onerror = (event) => {
            console.log(this.path)
            this.redirect_fail()
        };
    }

    clear_timer() {
        clearTimeout(this.timer);
    }
}
