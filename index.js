const applyMask = require('./src/fn/applyMask');



const mdg = function ({pattern, onError, onSuccess, validation}){
  let args = {pattern, onError, onSuccess, validation}
  const check = ( input )=>(applyMask({input, ...args}))
  const settings = {...args, check}
  Object.freeze(settings);
  return settings;
};

const telephoneMask = mdg({
  pattern:['###.###-###.##', '###-##'],
onError: function(){
  console.log("falhou")
},
onSuccess: function(){
  console.log("deu certo")
}
});


const result = telephoneMask.check('12345678900')
console.log(result)
