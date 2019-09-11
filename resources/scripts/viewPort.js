let stand = "2019-07-29";
console.log("Stand: ", stand);

let content = { _width  : 'device-width',
                _scale  : 1.0,
                _shrink : false,

                update : function(value) {
                           let parts    = value.split(",");
                           this._width  = parts[0]
                                          .split("=")[1]
                                          .trim();
                           this._scale  = parts[1]
                                          .split("=")[1]
                                          .trim();
                           this._shrink = parts[2]
                                          .split("=")[1]
                                          .trim() === 'on';
                         },
                
                toString : function() {
                             return `width=${this.width}, initial-scale=${this.scale}, shrink-to-fit=${this.shrink}`;
                },
                
                get width()  { return this._width; },
                get scale()  { return this._scale; },
                get shrink() { return this._shrink?'on':'off'; },

                set width(w)  { this._width = w; },
                set scale(s)  { this._scale = s; },
                set shrink(s) { this._shrink = s==='on'; },
                
}


let meta       = document.querySelector("meta[name='viewport']");
let properties = meta.getAttribute("content");

content.update(properties);

document.getElementById("width-select")
        .addEventListener("change", selectWidth);
document.getElementById("scale-select")
        .addEventListener("change", selectScale);
document.getElementById("shrinkOn")
        .addEventListener("change", selectShrink);
document.getElementById("shrinkOff")
        .addEventListener("change", selectShrink);

console.log("Eigenschaften:", content.toString());

function selectWidth(event) {
  let widthNew = this.selectedOptions[0].value;
  content.width = widthNew;
  meta.setAttribute('content', content.toString());

  console.log("Content: ", content.toString());
}

function selectScale(event) {
  let scaleNew = this.selectedOptions[0].value;
  content.scale = scaleNew;
  meta.setAttribute('content', content.toString());

  console.log("Content: ", content.toString());
}

function selectShrink(event) {
  let shrinkNew = this.value;
  content.shrink = shrinkNew;
  meta.setAttribute('content', content.toString());

  console.log("Content: ", content.toString());
}