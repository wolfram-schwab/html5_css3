let kalender = {
  _wochentage  : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  _wochentage2 : ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  _monate      : ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  _monate3     : ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],


  get heute()       { let datum  = new Date();
                      let offset = datum.getTimezoneOffset();
                          datum  = datum.getTime();
                          datum -= offset*1000*60;
                          datum -= datum%(1000*60*60*24);


                      return new Date(datum); },

  get tag()         { return this.heute.getDate(); },

  get wochentag()   { return { nr       : this.heute.getDay(),
                               name     : this._wochentage[this.heute.getDay()],
                               nameKurz : this._wochentage2[this.heute.getDay()] 
                              };
                     },

  get monat()        { return { nr : this.heute.getMonth()+1,
                                name : this._monate[this.heute.getMonth()],
                                nameKurz : this._monate3[this.heute.getMonth()]
                              };
                     },

  
  get tageDerWoche() { let daten = [];

                       for(let i=0; i<6; i+=1) {
                         datumI = this.heute
                                      .setTime(
                                          this.heute.getTime()
                                          - (this.wochentag.nr-(1+i))
                                             *1000*60*60*24);
                           datumI = new Date(datumI);
                         daten.push({ datum     : datumI,
                                      tag       : datumI.getDate(),
                                      monat     : datumI.getMonth()+1,
                                      monatName : this._monate[datumI.getMonth()],
                                      jahr      : datumI.getFullYear()
                                    });
                       }
                       return daten;
                     },

  get kalenderwoche() { let donnerstag = new Date(this.heute.getTime()
                                                + (4 - this.wochentag.nr)
                                                   * 1000*60*60*24);
                        console.log("aktueller Do", donnerstag);
                        let jahr       = donnerstag.getFullYear();
                        let erster     = new Date(new Date(jahr,0,4).getTime() +(3-((new Date(jahr,0,4).getDay()+6) % 7)) * 86400000);
                        console.log("erster Do", erster);
                        return           Math.floor(1 + 0.5 + (donnerstag.getTime() - erster.getTime()) / 86400000/7);
                      }
}