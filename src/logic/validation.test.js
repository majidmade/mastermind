import { getGuessChecker } from './validation'

const _ = 'XYZ';
describe('guess validation', () => {

  describe('basic paths', () => {

    // by no means exhaustive, but fairly robust
    describe('[ 0, 1, 2, 3 ]', () => {
      test('{ red: 0, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([_, _, _, _])).toEqual({ red: 0, white: 0 })
      })

      test('{ red: 1, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([0, _, _, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([_, 1, _, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([_, _, 2, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([_, _, _, 3])).toEqual({ red: 1, white: 0 })
      })

      test('{ red: 2, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([0, 1, _, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([0, _, _, 3])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([_, 1, 2, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([_, _, 2, 3])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([0, _, 2, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([_, 1, _, 3])).toEqual({ red: 2, white: 0 })
      })

      test('{ red: 3, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([0, 1, 2, _])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([_, 1, 2, 3])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([0, _, 2, 3])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 1, 2, 3])([0, 1, _, 3])).toEqual({ red: 3, white: 0 })
      })

      test('{ red: 4, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([0, 1, 2, 3])).toEqual({ red: 4, white: 0 })
      })

      test('{ red: 0, white: 1 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([1, _, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 1, 2, 3])([_, 2, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 1, 2, 3])([_, _, 3, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 1, 2, 3])([_, _, _, 0])).toEqual({ red: 0, white: 1 })
      })

      test('{ red: 0, white: 2 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([1, 2, _, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([1, _, _, 0])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([_, 2, 3, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([_, _, 3, 0])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([1, _, 3, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([_, 2, _, 0])).toEqual({ red: 0, white: 2 })

      })

      test('{ red: 0, white: 3 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([1, 2, 3, _])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 1, 2, 3])([1, 2, _, 0])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 1, 2, 3])([1, _, 3, 0])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 1, 2, 3])([_, 2, 3, 0])).toEqual({ red: 0, white: 3 })
      })

      test('{ red: 0, white: 4 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([3, 0, 1, 2])).toEqual({ red: 0, white: 4 })
        expect(getGuessChecker([0, 1, 2, 3])([2, 3, 0, 1])).toEqual({ red: 0, white: 4 })
        expect(getGuessChecker([0, 1, 2, 3])([1, 2, 3, 0])).toEqual({ red: 0, white: 4 })
      })

      test('{ red: 3, white: 1 }', () => {
        // not possible!
      })

      test('{ red: 2, white: 2 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([0, 1, 3, 2])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([0, 2, 1, 3])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([3, 1, 2, 0])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([1, 0, 2, 3])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([0, 3, 2, 1])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 1, 2, 3])([2, 1, 0, 3])).toEqual({ red: 2, white: 2 })

      })

      test('{ red: 1, white: 3 }', () => {
        expect(getGuessChecker([0, 1, 2, 3])([0, 3, 1, 2])).toEqual({ red: 1, white: 3 })
        expect(getGuessChecker([0, 1, 2, 3])([3, 1, 0, 2])).toEqual({ red: 1, white: 3 })
        expect(getGuessChecker([0, 1, 2, 3])([1, 3, 2, 0])).toEqual({ red: 1, white: 3 })
        expect(getGuessChecker([0, 1, 2, 3])([1, 2, 0, 3])).toEqual({ red: 1, white: 3 })
      })
    })

    describe('[ 0, 1, 1, 2 ]', () => {

      test('{ red: 0, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([_, _, _, _])).toEqual({ red: 0, white: 0 })
      })

      test('{ red: 1, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([0, _, _, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([_, 1, _, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([_, _, 1, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([_, _, _, 2])).toEqual({ red: 1, white: 0 })
      })

      test('{ red: 2, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([0, 1, _, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([0, _, _, 2])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([_, 1, 1, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([_, _, 1, 2])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([0, _, 1, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([_, 1, _, 2])).toEqual({ red: 2, white: 0 })
      })

      test('{ red: 3, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([0, 1, 1, _])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([_, 1, 1, 2])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([0, _, 1, 2])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 1, 1, 2])([0, 1, _, 2])).toEqual({ red: 3, white: 0 })
      })

      test('{ red: 4, white: 0 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([0, 1, 1, 2])).toEqual({ red: 4, white: 0 })
      })

      test('{ red: 0, white: 1 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([2, _, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 1, 1, 2])([1, _, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 1, 1, 2])([_, 2, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 1, 1, 2])([_, _, 2, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 1, 1, 2])([_, _, _, 0])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 1, 1, 2])([_, _, _, 1])).toEqual({ red: 0, white: 1 })
      })

      test('{ red: 0, white: 2 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([1, 2, _, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 1, 2])([1, _, _, 1])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 1, 2])([_, 0, 2, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 1, 2])([_, _, 2, 1])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 1, 2])([1, _, 2, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 1, 1, 2])([_, 2, _, 1])).toEqual({ red: 0, white: 2 })

      })

      test('{ red: 0, white: 3 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([1, 2, 0, _])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 1, 1, 2])([1, 2, _, 0])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 1, 1, 2])([1, _, 2, 0])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 1, 1, 2])([_, 2, 0, 1])).toEqual({ red: 0, white: 3 })
      })

      test('{ red: 0, white: 4 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([1, 0, 2, 1])).toEqual({ red: 0, white: 4 })
        expect(getGuessChecker([0, 1, 1, 2])([1, 2, 0, 1])).toEqual({ red: 0, white: 4 })
      })

      test('{ red: 3, white: 1 }', () => {
        // not possible!
      })

      test('{ red: 2, white: 2 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([0, 1, 2, 1])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 1, 1, 2])([1, 0, 1, 2])).toEqual({ red: 2, white: 2 })

      })

      test('{ red: 1, white: 3 }', () => {
        expect(getGuessChecker([0, 1, 1, 2])([2, 1, 0, 1])).toEqual({ red: 1, white: 3 })
        expect(getGuessChecker([0, 1, 1, 2])([2, 0, 1, 1])).toEqual({ red: 1, white: 3 })
      })

    })

    describe('[ 0, 0, 1, 1 ]', () => {

      test('{ red: 0, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([_, _, _, _])).toEqual({ red: 0, white: 0 })
      })

      test('{ red: 1, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([0, _, _, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([_, 0, _, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([_, _, 1, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([_, _, _, 1])).toEqual({ red: 1, white: 0 })
      })

      test('{ red: 2, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([0, 0, _, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([0, _, _, 1])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([_, 0, 1, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([_, _, 1, 1])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([0, _, 1, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([_, 0, _, 1])).toEqual({ red: 2, white: 0 })
      })

      test('{ red: 3, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([0, 0, 1, _])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([_, 0, 1, 1])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([0, _, 1, 1])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 0, 1, 1])([0, 0, _, 1])).toEqual({ red: 3, white: 0 })
      })

      test('{ red: 4, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([0, 0, 1, 1])).toEqual({ red: 4, white: 0 })
      })

      test('{ red: 0, white: 1 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([1, _, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 0, 1, 1])([_, 1, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 0, 1, 1])([_, _, 0, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 0, 1, 1])([_, _, _, 0])).toEqual({ red: 0, white: 1 })
      })

      test('{ red: 0, white: 2 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([1, 1, _, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 0, 1, 1])([1, _, _, 0])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 0, 1, 1])([_, 1, 0, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 0, 1, 1])([_, _, 0, 0])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 0, 1, 1])([1, _, 0, _])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 0, 1, 1])([_, 1, _, 0])).toEqual({ red: 0, white: 2 })

      })

      test('{ red: 0, white: 3 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([1, 1, 0, _])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 0, 1, 1])([1, 1, _, 0])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 0, 1, 1])([1, _, 0, 0])).toEqual({ red: 0, white: 3 })
        expect(getGuessChecker([0, 0, 1, 1])([_, 1, 0, 0])).toEqual({ red: 0, white: 3 })
      })

      test('{ red: 0, white: 4 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([1, 1, 0, 0])).toEqual({ red: 0, white: 4 })
      })

      test('{ red: 3, white: 1 }', () => {
        // not possible!
      })

      test('{ red: 2, white: 2 }', () => {
        expect(getGuessChecker([0, 0, 1, 1])([0, 1, 0, 1])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 0, 1, 1])([1, 0, 1, 0])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 0, 1, 1])([0, 1, 1, 0])).toEqual({ red: 2, white: 2 })
        expect(getGuessChecker([0, 0, 1, 1])([1, 0, 0, 1])).toEqual({ red: 2, white: 2 })

      })

      test('{ red: 1, white: 3 }', () => {
        // not possible!
      })

    })

    describe('[ 0, 0, 0, 1 ]', () => {

      test('{ red: 0, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 0, 1])([_, _, _, _])).toEqual({ red: 0, white: 0 })
      })

      test('{ red: 1, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 0, 1])([0, _, _, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([_, 0, _, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([_, _, 0, _])).toEqual({ red: 1, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([_, _, _, 1])).toEqual({ red: 1, white: 0 })
      })

      test('{ red: 2, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 0, 1])([0, 0, _, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([0, _, _, 1])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([_, 0, 0, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([_, _, 0, 1])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([0, _, 0, _])).toEqual({ red: 2, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([_, 0, _, 1])).toEqual({ red: 2, white: 0 })
      })

      test('{ red: 3, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 0, 1])([0, 0, 0, _])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([_, 0, 0, 1])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([0, _, 0, 1])).toEqual({ red: 3, white: 0 })
        expect(getGuessChecker([0, 0, 0, 1])([0, 0, _, 1])).toEqual({ red: 3, white: 0 })
      })

      test('{ red: 4, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 0, 1])([0, 0, 0, 1])).toEqual({ red: 4, white: 0 })
      })

      test('{ red: 0, white: 1 }', () => {
        expect(getGuessChecker([0, 0, 0, 1])([1, _, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 0, 0, 1])([_, 1, _, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 0, 0, 1])([_, _, 1, _])).toEqual({ red: 0, white: 1 })
        expect(getGuessChecker([0, 0, 0, 1])([_, _, _, 0])).toEqual({ red: 0, white: 1 })
      })

      test('{ red: 0, white: 2 }', () => {
        expect(getGuessChecker([0, 0, 0, 1])([_, _, 1, 0])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 0, 0, 1])([_, 1, _, 0])).toEqual({ red: 0, white: 2 })
        expect(getGuessChecker([0, 0, 0, 1])([1, _, _, 0])).toEqual({ red: 0, white: 2 })
      })

      test('{ red: 0, white: 3 }', () => {
        // not possible!
      })

      test('{ red: 0, white: 4 }', () => {
        // not possible!
      })

      test('{ red: 3, white: 1 }', () => {
        // not possible!
      })

      test('{ red: 2, white: 2 }', () => {
        expect(getGuessChecker([0, 0, 0, 1])([0, 0, 1, 0])).toEqual({ red: 2, white: 2 })
      })

      test('{ red: 1, white: 3 }', () => {
        // not possible!
      })

    })

    describe('[ 0, 0, 0, 0 ]', () => {

      test('{ red: 0, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 0, 0])([1, 1, 1, 1])).toEqual({ red: 0, white: 0 })
      })

      test('{ red: 4, white: 0 }', () => {
        expect(getGuessChecker([0, 0, 0, 0])([0, 0, 0, 0])).toEqual({ red: 4, white: 0 })
      })
    })

  })

  describe('de-duping', () => {

    test('no double-credit for duplicates in solution (red)', () => {
      expect(getGuessChecker([0, 0, 1, 2])([0, _, _, _])).toEqual({ red: 1, white: 0 })
      expect(getGuessChecker([0, 0, 1, 2])([0, 0, _, _])).toEqual({ red: 2, white: 0 })
      expect(getGuessChecker([0, 0, 1, 2])([0, _, 1, _])).toEqual({ red: 2, white: 0 })
    })

    test('no double-credit for duplicates in solution (white)', () => {
      expect(getGuessChecker([0, 0, 1, 2])([_, _, 0, _])).toEqual({ red: 0, white: 1 })
      expect(getGuessChecker([0, 0, 1, 2])([_, _, 0, 0])).toEqual({ red: 0, white: 2 })
    })

    test('no double-credit for duplicates in solution (red/white)', () => {
      expect(getGuessChecker([0, 0, 1, 2])([_, 0, 2, _])).toEqual({ red: 1, white: 1 })
      expect(getGuessChecker([0, 0, 1, 2])([_, 0, 0, _])).toEqual({ red: 1, white: 1 })
    })

    test('no double-credit for duplicates in guesses (red)', () => {
      expect(getGuessChecker([0, 1, 2, 3])([0, 0, _, _])).toEqual({ red: 1, white: 0 })
    })

    test('no double-credit for duplicates in guesses (white)', () => {
      expect(getGuessChecker([0, 1, 2, 3])([3, 3, _, _])).toEqual({ red: 0, white: 1 })
    })

  })

})