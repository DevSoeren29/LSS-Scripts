// ==UserScript==
// @name         Einsatz Anzahl
// @namespace    http://tampermonkey.net/
// @version      0.3.5
// @description  Zeigt an, wie viele Einsätze du insgesamt offen hast.
// @author       Dev_Sören29#1385 aka. SJ_Luftpumpe
// @match        https://www.operacni-stredisko.cz/*
// @match        https://policie.operacni-stredisko.cz/*
// @match        https://www.alarmcentral-spil.dk/*
// @match        https://politi.alarmcentral-spil.dk/*
// @match        https://www.leitstellenspiel.de/*
// @match        https://polizei.leitstellenspiel.de/*
// @match        https://www.missionchief-australia.com/*
// @match        https://police.missionchief-australia.com/*
// @match        https://www.missionchief.co.uk/*
// @match        https://police.missionchief.co.uk/*
// @match        https://www.missionchief.com/*
// @match        https://police.missionchief.com/*
// @match        https://www.centro-de-mando.es/*
// @match        https://www.centro-de-mando.mx/*
// @match        https://www.hatakeskuspeli.com/*
// @match        https://poliisi.hatakeskuspeli.com/*
// @match        https://www.operateur112.fr/*
// @match        https://police.operateur112.fr/*
// @match        https://www.operatore112.it/*
// @match        https://polizia.operatore112.it/*
// @match        https://www.missionchief-japan.com/*
// @match        https://www.missionchief-korea.com/*
// @match        https://www.nodsentralspillet.com/*
// @match        https://politiet.nodsentralspillet.com/*
// @match        https://www.meldkamerspel.com/*
// @match        https://politie.meldkamerspel.com/*
// @match        https://www.operatorratunkowy.pl/*
// @match        https://policja.operatorratunkowy.pl/*
// @match        https://www.operador193.com/*
// @match        https://www.jogo-operador112.com/*
// @match        https://policia.jogo-operador112.com/*
// @match        https://www.jocdispecerat112.com/*
// @match        https://www.dispetcher112.ru/*
// @match        https://www.dispecerske-centrum.com/*
// @match        https://www.larmcentralen-spelet.se/*
// @match        https://polis.larmcentralen-spelet.se/*
// @match        https://www.112-merkez.com/*
// @match        https://www.dyspetcher101-game.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leitstellenspiel.de
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';
    const missionMakerAddOrig = unsafeWindow.missionMakerAdd;
    const foundtext = document.querySelector(
        '.missions-panel-head.big_map_window_head strong'
    );

    if (!foundtext) return;

    const updateEinsatzzahl = () => {
        //class1
        const foundclass1 = document.querySelector('#mission_select_emergency');
        let str1main = 0;
        if (foundclass1) {
            const str1 = foundclass1.innerText;
            const str1sp = str1.split('/');
            const str1re = str1sp[1].replace(')', ' ');
            const str1pi = parseInt(str1re);
            str1main = str1pi;
        }

        //class2
        const foundclass2 = document.querySelector(
            '#mission_select_krankentransport'
        );
        let str2main = 0;
        if (foundclass2) {
            const str2 = foundclass2.innerText;
            const str2sp = str2.split('/');
            const str2re = str2sp[1].replace(')', ' ');
            const str2pi = parseInt(str2re);
            str2main = str2pi;
        }

        //class3
        const foundclass3 = document.querySelector(
            '#mission_select_sicherheitswache'
        );
        let str3main = 0;
        if (foundclass3) {
            const str3 = foundclass3.innerText;
            const str3sp = str3.split('/');
            const str3re = str3sp[1].replace(')', ' ');
            const str3pi = parseInt(str3re);
            str3main = str3pi;
        }

        //main
        console.log(str1main + str2main + str3main);
        foundtext.innerText += `: ${str1main + str2main + str3main}`;
    };

    unsafeWindow.missionMakerAdd = function (...args) {
        missionMakerAddOrig(...args);

        updateEinsatzzahl();
    };
    updateEinsatzzahl();
})();