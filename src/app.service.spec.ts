import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('Neversitup Test', () => {
  let service: AppService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  describe('Test Permutations', () => {
    it('input a', () => {
      expect(service.permutations('a')).toStrictEqual(['a']);
    });

    it('input ab', () => {
      expect(service.permutations('ab').sort()).toStrictEqual(
        ['ab', 'ba'].sort(),
      );
    });

    it('input abc', () => {
      expect(service.permutations('abc').sort()).toStrictEqual(
        ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort(),
      );
    });

    it('input aabb', () => {
      expect(service.permutations('aabb').sort()).toStrictEqual(
        ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort(),
      );
    });
  });

  describe('Find the odd int', () => {
    it('input [7] should return 7', () => {
      expect(service.findOdd([7])).toEqual(7);
    });

    it('input [0] should return 0', () => {
      expect(service.findOdd([0])).toEqual(0);
    });

    it('input [1,1,2] should return 2', () => {
      expect(service.findOdd([1, 1, 2])).toEqual(2);
    });

    it('input [0,1,0,1,0] should return 0', () => {
      expect(service.findOdd([0, 1, 0, 1, 0])).toEqual(0);
    });

    it('input [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4', () => {
      expect(service.findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toEqual(
        4,
      );
    });
  });

  describe('Count the smiley faces!', () => {
    it("input [':)', ';(', ';}', ':-D'] should return 2", () => {
      expect(service.countSmileys([':)', ';(', ';}', ':-D'])).toEqual(2);
    });

    it("input [';D', ':-(', ':-)', ';~)'] should return 3", () => {
      expect(service.countSmileys([';D', ':-(', ':-)', ';~)'])).toEqual(3);
    });

    it("input [';]', ':[', ';*', ':$', ';-D'] should return 1", () => {
      expect(service.countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
    });
  });
});
