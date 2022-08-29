import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  mainText: string = '';
  currentLanguage = '';

  items: MenuItem[] = [];

  constructor(private router: Router,
              private translate: TranslateService) {
    this.items.push({
      tag: 'home.projects',
      path: '/workshop'
    });
    this.items.push({
      tag: 'home.articles',
      path: '/library'
    });
    this.items.push({
      tag: 'home.beer',
      path: '/brewery'
    });
    this.items.push({
      tag: 'home.entertainment',
      path: '/gamery'
    });
    this.items.push({
      tag: 'home.warehouse',
      path: '/warehouse'
    });
    this.items.push({
      tag: 'home.info',
      path: '/info'
    });
  }

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
    this.updateHeaderText();
  }

  updateHeaderText() {
    var texts = [
      'What can we say... Just welcome',
    ];
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
    } else if (this.currentLanguage == 'ru') {
      texts = [
        '- Шо по русні? - Русні пизда!',
        'Русский военный корабль, иди нахуй',
      ];
    }

    let textIndex = Math.floor(Math.random() * (texts.length));
    this.mainText = texts[textIndex];
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
    this.currentLanguage = language;
    this.updateHeaderText();
  }

}
