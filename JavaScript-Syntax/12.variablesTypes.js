function variablesTypes(input) {
    return ('My name: ' + input[0] + ' //type is ' + typeof (input[0]) + '\n' +
            'My age: ' + input[1] + ' //type is ' + typeof (input[1]) + '\n' +
            'I am male: ' + input[2] + ' //type is ' + typeof (input[2]) + '\n' +
             'My favorite foods are:  ' + input[3]+ ' //type is ' + typeof (input[3]) 
      )
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));