import { type IconName } from '@channel.io/bezier-icons'

import {
  getObjectFromEnum,
  getTitle,
  iconList,
} from './story'
import { isArray } from './type'

describe('storyUtils Test >', () => {
  describe('getTitle Test >', () => {
    it('정상 동작 테스트들', () => {
      expect(getTitle('/src/layout/GlobalHeader/')).toBe('layout/GlobalHeader')
      expect(getTitle('/foo/bar/ipsum/')).toBe('bar/ipsum')
    })
  })

  describe('iconList Test >', () => {
    it('iconList는 리스트이다', () => {
      expect(isArray(iconList)).toBe(true)
    })

    it('iconList는 IconName type인 string을 가지고 있다', () => {
      const sampleIconName: IconName = 'arrow-hook-left-down'
      expect(iconList.includes(sampleIconName)).toBe(true)
    })

    it('iconList는 IconName이 아닌 것들은 가지고 있지 않다', () => {
      // @ts-ignore
      expect(iconList.includes(undefined)).toBe(false)
      // @ts-ignore
      expect(iconList.includes(null)).toBe(false)
      // @ts-ignore
      expect(iconList.includes('iphone')).toBe(false)
    })
  })

  describe('getObejctFromEnum Test >', () => {
    it('getObjectFromEnum 정상 동작', () => {
      enum FooEnum {
        A = 'A',
        B = 'B',
        C = 'C',
      }
      expect(getObjectFromEnum(FooEnum)).toMatchObject({ A: 'A', B: 'B', C: 'C' })
    })

    it('Empty Enum이 들어가면 {} 을 뱉는다', () => {
      enum EmptyEnum {}
      expect(getObjectFromEnum(EmptyEnum)).toMatchObject({})
    })
  })
})