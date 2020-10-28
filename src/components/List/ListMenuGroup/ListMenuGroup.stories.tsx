/* External dependencies */
import React, { useCallback, useState } from 'react'
import base from 'paths.macro'
import { v4 as uuid } from 'uuid'
import { range } from 'lodash-es'

/* Internal dependencies */
import { Navigation } from '../../../layout/Navigation'
import { getTitle } from '../../../utils/utils'
import { ListItem } from '../ListItem'
import ListMenuGroup from './ListMenuGroup'

export default {
  title: getTitle(base),
  component: ListMenuGroup,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const SIDEBAR_WIDTH = 240

const Template = ({ ...otherListMenuGroupProps }) => {
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(null)

  const handleToggle = useCallback(() => {
    setOpen(v => !v)
    //  if you want to automatically activate specific elemenmt
    // setIdx(0)
  }, [])

  const handleClickGroup = useCallback((name: string) => {
    // eslint-disable-next-line no-console
    console.log(name)
    handleToggle()
  }, [handleToggle])

  const handleClickItem = useCallback((name, key, index) => {
    // eslint-disable-next-line no-console
    console.log(name, key, index)
    setIdx(index)
  }, [])

  return (
    <Navigation
      withScroll
      disableResize
      title="사이드바"
      minWidth={SIDEBAR_WIDTH}
    >
      <ListMenuGroup
        open={open}
        selectedMenuItemIndex={idx}
        onClick={handleClickGroup}
        onClickArrow={handleToggle}
        onChangeOption={handleClickItem}
        {...otherListMenuGroupProps}
      >
        { range(0, 4).map(n => (
          <ListItem
            key={uuid()}
            optionKey={`menu-item-${n}`}
            content={`아이템 ${n}`}
          />
        )) }
        <ListItem
          key={uuid()}
          optionKey="item-with-a"
          href="https://naver.com"
          content="네이버 가기"
        />
      </ListMenuGroup>
    </Navigation>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  name: 'sample group',
  content: '전체 상태',
  leftIcon: 'sent',
  selectedOptionIndex: null,
}
