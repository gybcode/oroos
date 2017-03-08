(function () {
  'use strict';

  angular
    .module('app')
    .controller('OroosController', OroosController);

  OroosController.inject = ['$state', '$stateParams'];
  function OroosController($state, $stateParams) {
    var vm = this;
    vm.next = next;
    vm.subs = [];
    vm.sub = [];
    function next() {
      $state.go('dashboard.oroos', { "q": (vm.q + 1 < 20 ? vm.q + 1 : 20) });
    }
    vm.aid = [
      "Kérjük, értékelje, hogy az alábbi párhuzamos állítások közül melyik milyen mértékben igaz Önre! Amelyik állításhoz közelebb érzi a véleményét, a skálán ahhoz közelebbi számot válasszon!",
      "Kérjük, értékelje 1-től 5-ig, hogy a felsorolt állításokkal mennyire ért egyet a GE P&W oroszlányi gyárára  (továbbiakban „Gyár”), végzett munkájára vonatkozóan!"
    ];
    vm.questions = [
      {
        title: "1",
        left: "Úgy gondolom, hogy pontosan annyit teljesítek, amennyit elvárnak tólem",
        right: "Úgy gondolom, hogy rendszeresen magasabb szinvonalú teljesítményt nyújtok (minőségben, eredményességben) az elvártnál"
      },
      {
        title: "2",
        left: "A munkám elvégzésén kívül nem fordítok extra időt, energiát a vállalatra",
        right: "Rendszeresen teszek a normál munkámon kívül extra erőfeszítéseket a vállalat érdekében"
      },
      {
        title: "3",
        left: "Az utóbbi időben megfordult a fejemben, hogy új munkahelyet kellene keresnem",
        right: "Nem gondolok arra, hogy munkahelyet váltsak"
      },
      {
        title: "4",
        left: "Jelenlegi munkahelyemet nem ajánlanám szívesen ismerőseimnek, barátaminak",
        right: "Szívesen ajánlanám ismerőseimnek, barátaminak jelenlegi munkahelyemet"
      },
      {
        title: "5",
        left: "A megszokott, jól bevált módszerek szerint dolgozom, nem próbálkozom új megoldásokkal",
        right: "Saját hatáskörömben, a munkakörömön belül rendszeresen keresem a hatékonyabb megoldási lehetőségeket"
      },
      {
        title: "6",
        left: "Munkám minősége olykor - különböző okok miatt - kifogásolható",
        right: "Munkámat minden esetben a lehető legmagasabb minőségben végzem"
      },
      {
        title: "7",
        question: "Elégedett vagyok a Gyárban a munkavégzésem körülményeivel"
      },
      {
        title: "7.A",
        question: "Mennyire fontosak az Ön számára ÁLTALÁBAN az alábbi tényezők?",
        questions: [
          "Fontos számomra, hogy vezetőmmel rendszeresen beszéljünk arról, hogy mit várnak el tőlem",
          "Fontos számomra, hogy munkavégzésem helye biztonságos legyen",
          "Fontos számomra a kulturált, tiszta, higiénikus környezetben történő munkavégzés",
          "Fontos számomra, hogy tudjam, hoygan kell jelenteni a munkahelyi baleseteket",
          "Fontos számomra, hogy a vállalat biztosítsa a munkavégzéshez szükséges ismeretek megszerzését (tréningek és vizsgalehetőségek)",
          "Fontos számomra, hogy megfelelő védőeszközök álljanak rendelkezésre a bitzonságos munkvégzéshez",
          "Fontos számomra, hogy munkámat önállóan végezhessem"
        ]
      },
      {
        title: "7.B",
        question: "Ön szerint mennyire jellemzóek az alábbi állítások a Gyárban végzett munkája során?",
        questions: [
          "Jelenlegi munkám során rendszeresen beszélünk a vezetőmmel arról, hogy mit várnak el tőlem",
          "A Gyárban mukavégzésem helye biztonságos",
          "A Gyárban kulturált, tiszta, higiénikus környezetben (iroda, szociális helyiségek, öltözők stb.) végzem a munkámat",
          "Tisztában vaogy azzal, hogyan kell jelenteni a munkahelyi baleseteket",
          "A Gyár biztosítja, hogy megszerezhessem a munkavégzésemhez szükséges ismereteket",
          "A Gyár biztosítja a megfelelő védőezsközöket a munkavégzésemhez",
          "Munkámat önállóan végzem a Gyárban"
        ]
      },
      {
        title: "8",
        question: "Elégedett vagyok a Gyárban a juttatásaimmal"
      },
      {
        title: "9",
        question: "A Gyárban végzett munkám során elégedett vagyok a szakmai fejlődési és a munka - magánélet összehangolási lehetőségeimmel"
      },
      {
        title: "10",
        question: "A Vezetők a Gyárban igazságosan, egyenlően bánnak a munkatársakkal"
      },
      {
        title: "11",
        question: "A Gyárban szervezetten folyik a munka"
      },
      {
        title: "12",
        question: "A Gyárban befogadó a légkör és segítik egymást a kollégák"
      }
    ];

    activate();

    ////////////////

    function activate() {
      vm.q = $stateParams['q'];
    }
  }
})();