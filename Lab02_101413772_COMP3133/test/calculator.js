import { expect } from 'chai'; 
import { add, sub, mul, div } from '../calculator.js'; 

describe('Calculator Tests', () => {
    it('should return 7 for add(5, 2)', () => {
        const result = add(5, 2);
        expect(result).to.equal(7);
    });

    it('should fail for add(5, 2) expecting 8', () => {
        const result = add(5, 2);
        expect(result).to.equal(8);
    });

    it('should return 3 for sub(5, 2)', () => {
        const result = sub(5, 2);
        expect(result).to.equal(3);
    });

    it('should fail for sub(5, 2) expecting 5', () => {
        const result = sub(5, 2);
        expect(result).to.equal(5);
    });

    it('should return 10 for mul(5, 2)', () => {
        const result = mul(5, 2);
        expect(result).to.equal(10);
    });

    it('should fail for mul(5, 2) expecting 12', () => {
        const result = mul(5, 2);
        expect(result).to.equal(12);
    });

    it('should return 5 for div(10, 2)', () => {
        const result = div(10, 2);
        expect(result).to.equal(5);
    });

    it('should fail for div(10, 2) expecting 2', () => {
        const result = div(10, 2);
        expect(result).to.equal(2);
    });
});
