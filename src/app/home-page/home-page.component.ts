import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Highlight } from 'src/app/models/highlight';
import { SharedService } from 'src/app/common/shared.service';
import { HubStyler } from 'src/app/common/styler';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
    titleText: string = '';
    mainText: string = '';
    contactsText: string = '';
    currentLanguage = '';

    highlights = [] as Highlight[];

    constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {
        this.currentLanguage = this.translate.currentLang;
        let langParam = this.route.snapshot?.routeConfig?.path
        if (langParam == 'en' || langParam == 'ua') {
            this.translate.use(langParam);
            localStorage.setItem('language', langParam);
            this.currentLanguage = langParam;
        }
        this.updateHeaderText();
        this.getHighlights()
            .toPromise()
            .then((highlights) => {
                this.highlights = highlights ?? [];
            });
        HubStyler.clearStyling(document);
        HubStyler.setStyling(
            document,
            HubStyler.getGradientBackgroundCss('./../../../assets/backgrounds/bg_landing_top.jpg')
        );
    }

    ngOnInit(): void {
    }

    updateHeaderText() {
        var texts = [
            "We are an organization that throws their modest diary into the hands of first-year students! Do you know how it ends? Terror! And imagine the secrecy! Because fear leaves only microscopic marks on the tongue, the names of the participants and the class schedule.",
            "We are an organization that announces its intention to do the impossible and at the same time fundamentally change the world! Now imagine that after the first push in history with a global financial scam, there is a version that the ultimate goal of all these manipulations is the complete end of history. Imagine what will happen then.",
            "We are a company that supports volunteers like you! In our idiotic notes, we have already clarified everything with the rudiments of your talent, and then... Eh, I don't know, we don't have any dissidents at all.",
            "We look like a sect, but there is no sect there. We are simply an eclectic association of magicians, and at the same time, an alternative body to society, systematically contributing to Ukraine's exit from the industrial crisis. You are absolutely correct in saying that the state would be stronger from such a conformist caste system...",
            "We aim to be an ideal abstraction that completely ignores the fundamental features of the human psyche. It allows us to contemplate this mysterious world with an almost mystical ease. The point is that we are unable to see the concept as such.",
        ];
        if (this.currentLanguage == 'ua') {
            texts = [
                'Ми - організація, яка кидає студентам-першокурсникам до рук їх скромний щоденник! Знаете, чим це закінчується? Террором! И уявіть – секретність! Тому що від страху лишаються лиш мікроскопічні сліди на язиці, імена учасників і розклад занять.',
                'Ми - организація, яка оголошує про наміри здійснити неможливе і одночасно в корні змінити світ! Тепер уявіть, що після першого поштовху в історії з глобальною фінансовою аферою зʼявляється версія про те, що кінцевою ціллю всіх цих маніпуляцій є повний кінець історії. Уявіть, що тоді станеться.',
                'Ми - компанія, яка підтримує добровольців накшталт тебе! В своїх ідіотських нотах ми зачатками твого таланта вже все зʼясували, а уж далі… Ех, я не знаю, в нас взагалі ніяких інакодумців немає.',
                'Ми схожі на секту, але ніякої секти тут немає. Ми просто еклектичне обʼєднання магів, ну і разом з тим альтернативний суспільству орган, планомірно сприяючий виходу України з індустріальної кризи. Ви абсолютно правильно сказали – держава була б сильнішою від такої конформістсько-кастової системи...',
                'Ми маємо мету бути ідеальною абстракцією, що повністю ігнорує фундаментальні особливості людської психіки. Вона дозволяє нам міркувати про цей таємничий світ із майже містичною легкістю. Справа в тому, що ми не здатні побачити концепцію як таку.',
            ];
        }
        let textIndex = Math.floor(Math.random() * texts.length);
        this.mainText = texts[textIndex];
        if (this.currentLanguage == 'ua') {
            this.titleText = 'ЛАСКАВО ПРОСИМО НА ЗАВОД';
            this.contactsText = 'ПРИЄДНУЙСЯ ДО НАС';
        } else {
            this.titleText = 'WELCOME TO THE FACTORY';
            this.contactsText = 'JOIN US';
        }
        
    }

    navigate(path: string) {
        this.router.navigate([path]);
    }

    private getHighlights(): Observable<Highlight[]> {
        const highlights: Highlight[] = [
            {
                index: 0,
                title: { 'ua': 'НОВА УНІФОРМА', 'en': 'NEW UNIFORM' },
                description: { 'ua': 'Ми завжди намагаємось поєднати дизайн та функцію, елегантність та прямолінійність. І саме цим характеризується наша нова лінійка мерчу. Футболка підкреслить ваш статус на заводі і поповнить ваш гардероб повсякденних речей. А стікери дадуть всім зрозуміти які речі краще не чіпати. І можливо це ще не все...', 'en': 'We always try to combine design and function, elegance and straightforwardness. And this is exactly what our new merch line is characterized by. The T-shirt will emphasize your status at the factory and complement your wardrobe of everyday items. And the stickers will let everyone understand which things are better not to touch. And maybe that\'s not all...' },
                imageUrl: SharedService.BaseAssetUrl + '/s/iyaio3SW8IWFH2P/download',
                buttonText: { 'ua': 'Відвідати склад', 'en': 'Visit the warehouse'},
                link: '/warehouse',
            },
            {
                index: 0,
                title: { 'en': 'BACK 2 BEER' },
                description: { 'ua': 'Попри всі негаразди та складності ми відновили наш експериментальний пивний цех. Деякий час він був у зоні бойових дій, але завдіки ЗСУ обладнання залишилось неушкодженим. Тепер пивний казан знову кипить і незрівнянний аромат наповнює приміщення. Зустрічайте Auferstehung Verschnitt 01!', 'en': 'Despite all the troubles and difficulties, we have restored our experimental brewery. For some time it was in the combat zone, but the equipment remained intact because of the Armed Forces. Now the beer cauldron is boiling again and an incomparable aroma fills the room. Meet Auferstehung Verschnitt 01!' },
                imageUrl: SharedService.BaseAssetUrl + '/s/uFhfztdLumrNbaH/download',
                buttonText: { 'ua': 'Відвідати пивоварню', 'en': 'Visit the brewery'},
                link: '/brewery',
            }
        ];
        return new Observable<Highlight[]>((observer) => {
            observer.next(highlights);
            observer.complete();
        });
    }
}
