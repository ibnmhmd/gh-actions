import SumNumbers from '../sum';

describe('Test Sum module', () => {
    it('expects SumNumbers function to be defined', () => {
      expect(SumNumbers).toBeDefined();
    });

    it('expects SumNumbers to be a function', () => {
      expect(typeof SumNumbers).toBe('function');
    });
    
    it('expects SumNumbers to return number', () => {
      expect(typeof SumNumbers(1,2)).toBe('number');
    });

    it('adds 1 + 2 to equal 3', () => {
      expect(SumNumbers(1,2)).toBe(3);
    });

    it('adds 2 + 3 to equal 5', () => {
      expect(SumNumbers(2,3)).toBe(5);
    });

    it('expects SumNumbers to throw error if a non-number is passed', () => {
      expect(() => { SumNumbers(1, 'a' as any) }).toThrow();   
    });

    it('expects SumNumbers to throw specific error if a non-number is passed', () => {
        let _error = '';
        try {
            SumNumbers(1, 'a' as any);
        } catch (error) {
           _error = (error as Error).message;
        }
      expect(_error).toBe('Both arguments must be numbers');   
    });
});
