import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from '../models/menu-item';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
    mainText: string = '';
    currentLanguage = '';

    items: MenuItem[] = [];

    constructor(private router: Router, private translate: TranslateService) {
        this.currentLanguage = this.translate.currentLang;
        this.items.push({
            tag: 'home.projects',
            path: '/workshop',
        });
        this.items.push({
            tag: 'home.articles',
            path: '/library',
        });
        this.items.push({
            tag: 'home.beer',
            path: '/brewery',
        });
        this.items.push({
            tag: 'home.entertainment',
            path: '/gamery',
        });
        this.items.push({
            tag: 'home.warehouse',
            path: '/warehouse',
        });
        this.updateHeaderText();
    }

    updateHeaderText() {
        var texts = ['What can we say... Just welcome'];
        if (this.currentLanguage == 'ua') {
            texts = [
                'EKNM це організація, яка кидає студентам-першокурсникам до рук їх скромний щоденник! Знаете, чим це закінчується? Террором! И уявіть – секретність! Тому що від страху лишаються лиш мікроскопічні сліди на язиці, імена учасників і розклад занять.',
                'EKNM це организація, яка оголошує про наміри здійснити неможливе і одночасно в корні змінити світ! Тепер уявіть, що після першого поштовху в історії з глобальною фінансовою аферою зʼявляється версія про те, що кінцевою ціллю всіх цих маніпуляцій є повний кінець історії. Уявіть, що тоді станеться.',
                'EKNM - компанія, яка підтримує добровольців накшталт тебе! В своїх ідіотських нотах ми зачатками твого таланта вже все зʼясували, а уж далі… Ех, я не знаю, в нас взагалі ніяких інакодумців немає.',
                'EKNM схожа на секту, але є і відмінність. У деякому сенсі це схоже на жарт, але не те. Вони вірять в майбутнє, хоч і не бачать, як воно зʼявляється. Вони вірять, що можливо, через десять мільярдів років ви чи вони прийдуть на Землю, несучи в собі частинку божества, яке зробили ви самі.',
                'EKNM схожа на секту, але ніякої секти там немає. Ми просто еклектичне обʼєднання магів, ну і разом з тим альтернативний суспільству орган, планомірно сприяючий виходу України з індустріальної кризи. Ви абсолютно правильно сказали – держава була б сильнішою від такої конформістсько-кастової системи...',
                'EKNM був створений щоб інтегрувати в себе компʼютерну мережу підтримки Windows 2000 та створити резервм керуючого контенту. Щоб можна було перезаписати ці елементи та почати працювати з ними знову. Нічого подібного не було, і вони не змогли б створюватю віруси, якби були в них винні.',
                'Мета EKNM полягає в тому, щоб бути ідеальною абстракцією, що повністю ігнорує фундаментальні особливості людської психіки. Вона дозволяє нам міркувати про цей таємничий світ із майже містичною легкістю. Справа в тому, що ми не здатні побачити концепцію як таку.',
                'Ціль EKNM полягає в наступному: життя на Землі протікає не так, як було задумано Творцем – коли люди мають душі, у них може народитися новий мирний член керівництва. Навіщо ангелам втрачати душі?',
                'Мета EKNM полягає в тому, щоб розділити сприйняття на послідовність безпосереднього та опосередкованого досвіду. Першою є сама подія. Під час першого виходу по каналу смерті кожен з наших дітей отримає від Бога нематеріальну допомогу.',
            ];
        } else if (this.currentLanguage == 'en') {
            texts = [
                `EKNM is an organization that puts their modest diary in the hands of first-year students! Do you know how it ends? Terror! And imagine the secrecy! Because fear leaves only microscopic traces on the tongue, the names of participants and the schedule of classes.`,
                `EKNM is an organization that announces its intention to do the impossible and fundamentally change the world at the same time! Now imagine that after the first push in history with a global financial scam, there is a version that the ultimate goal of all these manipulations is the complete end of history. Imagine what will happen then.`,
                `EKNM is a company that supports volunteers like you! In our idiotic notes, we have already clarified everything with the rudiments of your talent, and then... Eh, I don't know, we don't have any dissidents at all.`,
                `EKNM is similar to a sect, but there is a difference. In some ways, it's like a joke, but it's not. They believe in the future, although they do not see how it appears. They believe that perhaps in ten billion years you or they will come to Earth carrying a piece of the divinity that you yourself have made.`,
                `EKNM is like a sect, but there is no sect. We are simply an eclectic association of magicians, and at the same time, an alternative body to society, systematically contributing to Ukraine's exit from the industrial crisis. You are absolutely right - the state would be stronger from such a conformist caste system...`,
                `EKNM was created to integrate into itself the Windows 2000 support computer network and create a reserve of management content. So that you can overwrite these items and start working with them again. There was nothing like that, and they would not have been able to create viruses if they were guilty of them.`,
                `EKNM aims to be a perfect abstraction that completely ignores the fundamental features of the human psyche. It allows us to contemplate this mysterious world with an almost mystical ease. The fact is that we are not able to see the concept as such.`,
                `The goal of EKNM is this: life on Earth is not as the Creator intended it to be - when people have souls, a new peaceful member of leadership can be born into them. Why do angels lose their souls?`,
                `The purpose of EKNM is to separate perception into a sequence of direct and indirect experience. The first is the event itself. During the first exit through the channel of death, each of our children will receive immaterial help from God.`,
            ];
        } else if (this.currentLanguage == 'ru') {
            texts = [
                'Текст недоступен по причине наложенных сакций',
            ];
        }

        let textIndex = Math.floor(Math.random() * texts.length);
        this.mainText = texts[textIndex];
    }

    navigate(path: string) {
        this.router.navigate([path]);
    }

    useLanguage(language: string): void {
        this.translate.use(language);
        localStorage.setItem('language', language);
        this.currentLanguage = language;
        this.updateHeaderText();
    }
}
