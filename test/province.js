import {Province} from '../4/modules/province.js';
import assert from 'assert';

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

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    });
});