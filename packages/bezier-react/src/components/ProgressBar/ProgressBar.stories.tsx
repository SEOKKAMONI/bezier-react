import React, { useState } from 'react'

import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import { Button } from '~/src/components/Button'
import {
  HStack,
  Spacer,
  StackItem,
  VStack,
} from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

import { ProgressBar } from './ProgressBar'
import mdx from './ProgressBar.mdx'
import type ProgressBarProps from './ProgressBar.types'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
    },
    variant: {
      control: {
        type: 'radio',
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  },
}
export default meta

export const Playground: StoryObj<ProgressBarProps> = {
  args: {
    size: 'm',
    variant: 'green',
    width: '36',
    value: 0.5,
  },
}

export const Overview: StoryFn<{}> = () => {
  const [values, setValues] = useState<number[]>([0.25, 0.5, 0.75, 1])

  const handleSetRandomValues = () => {
    setValues([...Array(4)].map(() => Math.random()))
  }

  return (
    <VStack spacing={12} align="center">
      <StackItem>
        <VStack spacing={6} align="stretch">
          <StackItem>
            <ProgressBar
              size="m"
              variant="green"
              width={200}
              value={values[0]}
            />
          </StackItem>
          <StackItem>
            <ProgressBar
              size="m"
              variant="monochrome"
              width={200}
              value={values[1]}
            />
          </StackItem>
          <StackItem>
            <ProgressBar
              size="s"
              variant="green"
              width={200}
              value={values[2]}
            />
          </StackItem>
          <StackItem>
            <ProgressBar
              size="s"
              variant="monochrome"
              width={200}
              value={values[3]}
            />
          </StackItem>
        </VStack>
      </StackItem>
      <StackItem>
        <Button
          text="Set random values"
          onClick={handleSetRandomValues}
        />
      </StackItem>
    </VStack>
  )
}

export const UsageWidth: StoryObj<{}> = {
  render: () => (
    <VStack spacing={6} align="stretch">
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">36px (default)</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar value={0.5} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">80px</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={80} value={0.5} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">200px</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={200} value={0.5} />
          </StackItem>
        </HStack>
      </StackItem>
    </VStack>
  ),

  name: 'Usage (width)',
}

export const UsageValue: StoryObj<{}> = {
  render: () => (
    <VStack spacing={6} align="stretch">
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">0 (default)</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={200} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">0.25</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={200} value={0.25} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">0.5</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={200} value={0.5} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">0.75</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={200} value={0.75} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">1</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={200} value={1} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">-1 (invalid value)</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={200} value={-1} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem style={{ width: 120 }}>
            <Text color="txt-black-darkest">3 (invalid value)</Text>
          </StackItem>
          <StackItem grow shrink weight={1}>
            <ProgressBar width={200} value={3} />
          </StackItem>
        </HStack>
      </StackItem>
    </VStack>
  ),

  name: 'Usage (value)',
}

export const SizeVariant: StoryObj<{}> = {
  render: () => (
    <VStack spacing={16} align="stretch">
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem>
            <Text color="txt-black-darkest">M (6px)</Text>
          </StackItem>
          <Spacer />
          <StackItem>
            <ProgressBar size="m" variant="green" width={200} value={0.5} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem>
            <Text color="txt-black-darkest">S (4px)</Text>
          </StackItem>
          <Spacer />
          <StackItem>
            <ProgressBar size="s" variant="green" width={200} value={0.5} />
          </StackItem>
        </HStack>
      </StackItem>
    </VStack>
  ),

  name: 'Variant (size)',
}

export const Variant: StoryObj<{}> = {
  render: () => (
    <VStack spacing={16} align="stretch">
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem>
            <Text color="txt-black-darkest">green</Text>
          </StackItem>
          <Spacer />
          <StackItem>
            <ProgressBar size="m" variant="green" width={200} value={0.5} />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem>
            <Text color="txt-black-darkest">monochrome</Text>
          </StackItem>
          <Spacer />
          <StackItem>
            <ProgressBar
              size="m"
              variant="monochrome"
              width={200}
              value={0.5}
            />
          </StackItem>
        </HStack>
      </StackItem>
      <StackItem>
        <HStack spacing={8} align="center">
          <StackItem>
            <Text color="txt-black-darkest">green-alt</Text>
          </StackItem>
          <Spacer />
          <StackItem>
            <ProgressBar size="m" variant="green-alt" width={200} value={0.5} />
          </StackItem>
        </HStack>
      </StackItem>
    </VStack>
  ),

  name: 'Variant (color)',
}
