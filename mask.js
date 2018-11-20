function numberFormat(input, mask, callbackSuccess) {
    const MASK_PATTERN = "#";
    const MASK_REGEX = /#/g; 
    const ONLY_NUMBERS = /\d/g; 
    const INPUT = (input.match(ONLY_NUMBERS)|| []).join("");
    let MASK_ARRAY= "";
    let OUTPUT = "";
    
    if(!Array.isArray(mask)){
      MASK_ARRAY = mask;
    }else{
      const MASK_SORTED = mask.sort(function(a, b) {
      if(a.match(MASK_REGEX).length == b.match(MASK_REGEX).length){
       throw "Two masks or more have de same amount of input characters.";
        return {error: true}
      }
      return a.match(MASK_REGEX).length - b.match(MASK_REGEX).length;
      });
      MASK_ARRAY = MASK_SORTED[0];
      for (let i = 0; i < MASK_SORTED.length; i++) {
        if(MASK_SORTED[i].match(MASK_REGEX).length < INPUT.length){
          if(MASK_SORTED[i+1] !== undefined && MASK_SORTED[i+1].match(MASK_REGEX).length >= INPUT.length){
              MASK_ARRAY = MASK_SORTED[i+1];
              break;
          }
          
          MASK_ARRAY = MASK_SORTED[i];
          
        }
      }
       
    }
  
   MASK_ARRAY = MASK_ARRAY.toString().split('');

    
    function runCallback(){
        if(callbackSuccess){
           callbackSuccess();
        }
    }
    for (var i = 0; i < INPUT.length; i++) {
       let INDEX = MASK_ARRAY.indexOf(MASK_PATTERN);
        MASK_ARRAY[INDEX] = INPUT.charAt(i);
        const NEW_STR = MASK_ARRAY.join("");
        const MASK_PATTERN_INDEX = NEW_STR.indexOf(MASK_PATTERN);
      OUTPUT = NEW_STR + "";
        if(MASK_PATTERN_INDEX > -1){
            OUTPUT = NEW_STR.replace(NEW_STR.substr(MASK_PATTERN_INDEX),"");
        }
        if(OUTPUT.slice(-1) !== INPUT.charAt(i)){
          OUTPUT = OUTPUT.slice(0, -1);
        }
    }
    let COMPLETED = MASK_ARRAY.length === OUTPUT.length ? true : false;
    if(COMPLETED == true) runCallback();
    
  
    return{
      input: input,
      mask: mask,
      callback: callbackSuccess,
      completed: COMPLETED,
      output: OUTPUT
    }
}