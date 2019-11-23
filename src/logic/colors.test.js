import { COLORS } from './colors'

describe('colors', () => {
  describe('are a circular linked list', () => {
    test('each links to exactly one other', () => {
      Object.values(COLORS).forEach(({ nextColor }) => {
        const nextLink = COLORS[nextColor]
        expect(nextLink).toBeTruthy()
      })
    })
    test('each is linked to by exactly one other', () => {
      Object.keys(COLORS).forEach(color => {
        const prevLinks = Object.values(COLORS).filter(({ nextColor }) => nextColor === color)
        expect(prevLinks.length).toEqual(1)
      })
    })
  })
})