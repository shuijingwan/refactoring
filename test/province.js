import {Province} from '../4/modules/province.js';
import chai from 'chai';

function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [{name: "Byzantium", cost: 10, production: 9}, {
            name: "Attalia",
            cost: 12,
            production: 10
        }, {name: "Sinope", cost: 10, production: 6},],
        demand: 30,
        price: 20
    };
}

var expect = chai.expect;
describe('province', function () {
    let asia;
    beforeEach(function () {
        asia = new Province(sampleProvinceData());
    });
    it('shortfall', function () {
        expect(asia.shortfall).equal(5);
    });
    it('profit', function () {
        expect(asia.profit).equal(230);
    });
    it('change production', function() {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });
});