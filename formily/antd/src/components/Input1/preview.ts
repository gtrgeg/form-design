import React from 'react'
import { Input as FormilyInput } from '@formily/antd'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
debugger
export const Input1: DnFC<React.ComponentProps<typeof FormilyInput>> =
  FormilyInput

Input1.Behavior = createBehavior(
  {
    name: 'Input1',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Input',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Input),
    },
    designerLocales: AllLocales.Input,
  },
  {
    name: 'Input.TextArea',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Input.TextArea',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.Input.TextArea),
    },
    designerLocales: AllLocales.TextArea,
  }
)

Input1.Resource = createResource(
  {
    icon: 'InputSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'Input',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    ],
  },
  {
    icon: 'TextAreaSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          title: 'TextArea',
          'x-decorator': 'FormItem',
          'x-component': 'Input.TextArea',
        },
      },
    ],
  }
)
