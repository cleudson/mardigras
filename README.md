<div align="center">
  <img src="https://i.imgur.com/gr1giyP.png" alt="Mardi Gras" width="320">
  <p>A lightweight tool for single and multiple <b>masks</b>.</p>
  <p>
    :sparkles:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :sparkles:
  </p>
  <p>
  :ghost:
  </p>
  <p>
  :dancing_men::dancing_women:&nbsp;&nbsp;:dancing_women::dancing_men:
  </p>
  <p>
    Mardigras (MdG) uses a template system that takes a value and tranform it into a masked one. Apply it to DOM input fields or use the results the way you want. You can easily create masks for telephones, zip codes, vehicle plates, dates, etc.
  </p>
</div>


## Starting

```bash
# Install
npm install -D mardigras
```

```javascript
/* Import */
import mdg from 'mardigras';
```

```javascript
/* Initialize */
const someMask = mdg(options:Object);
```
<details>
<summary><b>Options</b></summary>
<br>
<p>Mdg initial options is a Javascript Object with the following values:</p>
<br>

| Value | Type | Description | required |
| --- | --- | --- | :---: |
| `pattern`    | Array \| String | Sequence of templating characters and separators. [More details](#template-system) | Yes |
| `onError`    | Function | Method that will be called when the mask is NOT COMPLETED or INVALID. * | No |
| `onSucess`   | Function | Method that will be called when the mask is COMPLETED or VALID. ** | No |
| `validation` | Function | Method that check if the mask´s value is valid. [More details](#validation) | No |

 \* If `validation` is set, will be called only when the mask is INVALID.<br>
\*\* If `validation` is set, will be called only when the mask is VALID.

</details>

### Example - Phone mask

In the following example, we create a phone number <b>multi-mask</b>. The sequence accepts 10 or 11 digits.

```javascript
const phoneMask = mdg({
  pattern: [
  '(##)####-####', // 10 digits
  '(##)#####-####' // 11 digits
  ],
  onError: () => {
    console.log('Almost There.');
  },
  onSuccess: () => {
    console.log('Yayyy! The mask is completed.')
  }
});
```

## Applying to DOM input fields(`checkField` method)

The `checkField` method inserts the result of a mask directly on a HTML input field during its manipulation.

```javascript
someMask.checkField(
  inputField:HTMLInputElement, /* required */
  eventType:string /* default: input */
);
```

<br>

...continuing the [example](#example---phone-mask):

```javascript
/*
  HTML file ->
  <input type="text" class="js-mdg" value=""/>
*/
const inputField = document.querySelector('.js-mdg');
phoneMask.checkField(inputField);
```

## Extracting output data(`checkValue` method)

With `checkValue` method you can get mask´s output data and use it the way you want. Best choice for Front-end Frameworks and another tools.

```javascript
someMask.checkValue(inputValue:string)
```

When the method `checkValue` is called, it expose a Javascript Object.

<details>
<summary><b>Output Data</b></summary>
<br>

| Value | Type | Description |
| --- | --- | --- |
|  `input`   | String | The initial value. |
|  `output`   | String | The best final value. |
|  `completed`   | Boolean | If the `output` value completes the mask. |
|  `isValid`   | Boolean \| Null | If the `output` value is valid. * |

\* Null if `validation` is not defined.

</details>
<br>

...continuing the [example](#example---phone-mask):

```javascript
phoneMask.checkValue('12345'); // 5 digits long
/*
{input: "12345", output: "(12)345", completed: false, isValid: null}
*/
phoneMask.checkValue('1234512345'); // 10 digits long
/*
{input: "1234512345", output: "(12)3451-2345", completed: true, isValid: null}
*/
phoneMask.checkValue('12-34576-1234576') // 14 digits long
/*
{input: "12-34576-1234576", output: "(12)34576-1234", completed: true, isValid: null}
*/
```

## Template system

A `pattern` in MdG is a sequence of templating characters and separators.

### Templating characters

|Number|Letter|Alphanumeric|Special Character|
|:---:|:---:|:---:|:---:|
| # | & | @ | $ |


### Separators

Separators are literal characters that separates each templating character to shape the mask.<br>
The allowed separators are:


| \ | [ |  ( | : | - | { | } | . |\| | ) | ] | / |
|---|---|----|---|---|---|---|---|---|---|---|---|

Other separators:

 _ * ^ ; — ¯

<details>
<summary><b>Examples</b></summary>
<br>
<p>Here are some examples of masks, using the template system:</p>

* Brazilian Zip Code (CEP) - #####-###
* Californian Driver License - @########
* Date (with month abbreviation) - ##/&&&/####
* Canadian Zip Code - &#&#&#
* French Car Plate - &&-###-&&
* ISBN Code - ###-##-#####-##-#
* Serial Number - ####@@@@@####
* Spanish Car Plate - ####-&&&
* Telephone Number - (##)#####-####

</details>


## Validation

If the mask needs to pass through validation, the `validation` value must be set during the MdG initialization.<br>
It´s a function that must receive a single String and return a Boolean value.<br>
Taking the example above, let´s assume that the two first digits represent the country calling code and the only acceptable codes are from Argentina(54), Chile (56) and Colombia (57).

``` javascript
const countryValidation = (output:String):Boolean =>{
  const rule = /\(5[4|6|7]/;
  return rule.test(output)
}
```
<br><br><br>
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
<br><br><br><br><br>
Enjoy. Have yourself a lot of beads.
