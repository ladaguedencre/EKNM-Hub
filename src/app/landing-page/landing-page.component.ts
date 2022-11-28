import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
    mainText: string = '';
    currentLanguage = '';

    constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {
        this.currentLanguage = this.translate.currentLang;
        let langParam = this.route.snapshot?.routeConfig?.path
        if (langParam == 'en' || langParam == 'ua') {
            this.translate.use(langParam);
            localStorage.setItem('language', langParam);
            this.currentLanguage = langParam;
        }
        this.updateHeaderText();
    }

    ngOnInit(): void {}

    updateHeaderText() {
        var texts = [
            "is an organization that throws their modest diary into the hands of first-year students! Do you know how it ends? Terror! And imagine the secrecy! Because fear leaves only microscopic marks on the tongue, the names of the participants and the class schedule.",
            "is an organization that announces its intention to do the impossible and at the same time fundamentally change the world! Now imagine that after the first push in history with a global financial scam, there is a version that the ultimate goal of all these manipulations is the complete end of history. Imagine what will happen then.",
            "is a company that supports volunteers like you! In our idiotic notes, we have already clarified everything with the rudiments of your talent, and then... Eh, I don't know, we don't have any dissidents at all.",
            "looks like a sect, but there is no sect there. We are simply an eclectic association of magicians, and at the same time, an alternative body to society, systematically contributing to Ukraine's exit from the industrial crisis. You are absolutely correct in saying that the state would be stronger from such a conformist caste system...",
            "aims to be an ideal abstraction that completely ignores the fundamental features of the human psyche. It allows us to contemplate this mysterious world with an almost mystical ease. The point is that we are unable to see the concept as such.",
        ];
        if (this.currentLanguage == 'ua') {
            texts = [
                'це організація, яка кидає студентам-першокурсникам до рук їх скромний щоденник! Знаете, чим це закінчується? Террором! И уявіть – секретність! Тому що від страху лишаються лиш мікроскопічні сліди на язиці, імена учасників і розклад занять.',
                'це организація, яка оголошує про наміри здійснити неможливе і одночасно в корні змінити світ! Тепер уявіть, що після першого поштовху в історії з глобальною фінансовою аферою зʼявляється версія про те, що кінцевою ціллю всіх цих маніпуляцій є повний кінець історії. Уявіть, що тоді станеться.',
                'це компанія, яка підтримує добровольців накшталт тебе! В своїх ідіотських нотах ми зачатками твого таланта вже все зʼясували, а уж далі… Ех, я не знаю, в нас взагалі ніяких інакодумців немає.',
                'схожа на секту, але ніякої секти там немає. Ми просто еклектичне обʼєднання магів, ну і разом з тим альтернативний суспільству орган, планомірно сприяючий виходу України з індустріальної кризи. Ви абсолютно правильно сказали – держава була б сильнішою від такої конформістсько-кастової системи...',
                'має мету бути ідеальною абстракцією, що повністю ігнорує фундаментальні особливості людської психіки. Вона дозволяє нам міркувати про цей таємничий світ із майже містичною легкістю. Справа в тому, що ми не здатні побачити концепцію як таку.',
            ];
        }
        let textIndex = Math.floor(Math.random() * texts.length);
        this.mainText = texts[textIndex];
    }

    navigate(path: string) {
        this.router.navigate([path]);
    }
}
