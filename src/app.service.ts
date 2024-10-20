import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    // this.permutations('a');
    // this.permutations('ab');
    // this.permutations('abc');
    // this.permutations('aabb');
    // this.findOdd([7]);
    // this.findOdd([0]);
    // this.findOdd([1, 1, 2]);
    // this.findOdd([0, 1, 0, 1, 0]);
    // this.findOdd([1, 2, 2, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
    // this.countSmileys([':)', ';(', ';}', ':-D']);
    // this.countSmileys([';D', ':-(', ':-)', ';~)']);
    // this.countSmileys([';]', ':[', ';*', ':$', ';-D']);
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  permutations(str: string, maxIteration: number = 1000) {
    const shuffledList = [];

    for (let i = 0; i < maxIteration; i++) {
      let shuffledStr = '';
      const shuffledIndexList = [];

      for (let j = 0; j < str.length; j++) {
        const randomIndex = this.randomIntFromInterval(0, str.length - 1);

        if (shuffledIndexList.includes(randomIndex)) {
          j--;

          continue;
        }

        shuffledIndexList.push(randomIndex);
        shuffledStr += str[randomIndex];
      }

      if (!shuffledList.includes(shuffledStr)) {
        shuffledList.push(shuffledStr);
      }
    }

    return shuffledList;
  }

  findOdd(numArr: number[]) {
    const checkOddArr = [];

    numArr.forEach((num) => {
      checkOddArr[num] = (checkOddArr[num] || 0) + 1;
    });

    let oddNum = null;
    checkOddArr.forEach((count, index) => {
      if (count % 2 === 1) {
        oddNum = index;
      }
    });

    return oddNum;
  }

  countSmileys(faceList: string[]) {
    let count = 0;
    faceList.forEach((face) => {
      if ([':', ';'].includes(face[0])) {
        if (['-', '~'].includes(face[1])) {
          if ([')', 'D'].includes(face[2])) {
            count++;
          }
        } else {
          if ([')', 'D'].includes(face[1])) {
            count++;
          }
        }
      }
    });

    return count;
  }
}
