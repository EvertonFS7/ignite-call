import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    color: 'white',
  },

  body: {
    backgroundColor: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
  },
})
