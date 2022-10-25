# new JS-feature

## trimStart() method

### definite
De trimStart() methode houdt in dat de eerste spaties (vaak onnodige spaties) van een string worden verwijderd. Hierdoor is het eerste karakter van een string een letter en geen spatie.

### voorbeeld
const voorbeeldString = '   Dit is een voorbeeld    ';</br>
const resultaat = voorbeeldString.trimStart();

console.log(voorbeeldstring) => '   Dit is een voorbeeld    '; </br>
console.log(resultaat) => 'Dit is een resultaat     ';

### extra
Het omgekeerde bestaat ook. Dit is een trimEnd(), hierbij worden de laatste spaties verwijderd.

### extra voorbeeld
const voorbeeldString = '   Dit is een voorbeeld    ';</br>
const resultaat = voorbeeldString.trimEnd();

console.log(voorbeeldstring) => '   Dit is een voorbeeld    ';</br>
console.log(resultaat) => '     Dit is een resultaat';
