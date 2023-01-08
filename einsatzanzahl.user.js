// ==UserScript==
// @name         Einsatz Anzahl
// @namespace    http://tampermonkey.net/
// @version      0.3.1
// @description  Zeigt an, wie viele Einsätze du insgesamt offen hast.
// @author       Dev_Sören29#1385 aka. SJ_Luftpumpe
// @match        https://www.leitstellenspiel.de/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leitstellenspiel.de
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    const missionMakerAddOrig = unsafeWindow.missionMakerAdd;
    const foundtext = document.querySelector('.missions-panel-head.big_map_window_head strong');
    
    const updateEinsatzzahl = () => {
       //class1
       const foundclass1 = document.querySelector('#mission_select_emergency')
       const str1 = foundclass1.innerText
       const str1sp = str1.split('/')
       const str1re = str1sp[1].replace(')', ' ')
       const str1pi = parseInt(str1re)
       const str1main = str1pi
    
       //class2
      const foundclass2 = document.querySelector('#mission_select_krankentransport')
      const str2 = foundclass2.innerText
      const str2sp = str2.split('/')
      const str2re = str2sp[1].replace(')', ' ')
      const str2pi = parseInt(str2re)
      const str2main = str2pi
    
      //class3
      const foundclass3 = document.querySelector('#mission_select_sicherheitswache')
      const str3 = foundclass3.innerText
      const str3sp = str3.split('/')
      const str3re = str3sp[1].replace(')', ' ')
      const str3pi = parseInt(str3re)
      const str3main = str3pi

      //main
      console.log(str1main+str2main+str3main)
      foundtext.innerText = 'Einsätze: '+(str1main+str2main+str3main) 
    };

    unsafeWindow.missionMakerAdd = function (...args) {
        missionMakerAddOrig(...args);
        
        updateEinsatzzahl();
    };
    updateEinsatzzahl();
})();
