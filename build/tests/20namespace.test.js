import { MathUtil } from 'src/math-util';
describe('Namespace', () => {
    it('should be able to implement namespace', () => {
        expect(MathUtil.PI).toBe(3.14);
        expect(MathUtil.sum(1, 2, 3, 4, 5)).toBe(15);
    });
});
