const {repair, succeed, fail, get} = require('./enhancer.js');

describe('enhancer', function (){
    describe('repair()', function(){
        it('Should return a new item with the durability restored to 100', function() {

            const item = {
                name: 'Sword',
                durability: 10,
                enhancement: 15
            };

            const expected = {
                name: 'Sword',
                durability: 100,
                enhancement: 15
            };

            const repairedItem = repair(item)

            expect(repairedItem).toEqual(expected)

        })
    })
}) 
