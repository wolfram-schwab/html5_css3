/*
console.log("heute:", kalender.heute);
console.log("tag:", kalender.tag);
console.log("wochentag:", kalender.wochentag);
console.log("Monat:", kalender.monat);
console.log("Wochenstart:", kalender.wochenstart);
console.log("WochenEnde:", kalender.wochenende);
console.log("Kalenderwoche:", kalender.kalenderwoche);
*/

( function init() {
  document.getElementById("kw").textContent     = kalender.kalenderwoche;
  document.getElementById("vonTag").textContent = kalender.tageDerWoche[0].tag;

  if(kalender.tageDerWoche[0].monat === kalender.tageDerWoche[5].monat)
    document.getElementById("vonMonat").textContent = " ";
  else
    document.getElementById("vonMonat").textContent = kalender.tageDerWoche[0].monatName;

  if(kalender.tageDerWoche[0].jahr === kalender.tageDerWoche[5].jahr)
    document.getElementById("vonJahr").textContent = " ";
  else
    document.getElementById("vonJahr").textContent = kalender.tageDerWoche[0].jahr;

  document.getElementById("bisTag").textContent   = kalender.tageDerWoche[5].tag;
  document.getElementById("bisMonat").textContent = kalender.tageDerWoche[5].monatName;
  document.getElementById("bisJahr").textContent  = kalender.tageDerWoche[5].jahr;

  for(let nr=0; nr<6; nr+=1) 
    document.getElementById("tag"+nr)
            .querySelector("h2")
            .textContent = kalender.tageDerWoche[nr].tag
                        + ". "
                        + kalender.tageDerWoche[nr].monatName;
})();
