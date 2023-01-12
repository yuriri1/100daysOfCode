const restoreIPAdress = require('./restoreIPAdress')

test('Dado a string "25525511135" deve retornar ["255.255.11.135","255.255.111.35"] ', () =>{
    expect(restoreIPAdress("25525511135")).toEqual(["255.255.11.135","255.255.111.35"])
})

test('Dado a string "0000" deve retornar ["0.0.0.0"]', () =>{
    expect(restoreIPAdress("0000")).toEqual(["0.0.0.0"])
})

test('Dado a string "1111" deve retornar ["1.1.1.1"] ', () =>{
    expect(restoreIPAdress("1111")).toEqual(["1.1.1.1"])
})

test('Dado a string 101023 de retornar ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]', () =>{
    expect(restoreIPAdress("101023")).toEqual(["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"])
})