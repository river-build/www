import 'tailwindcss/tailwind.css'
import '../src/styles/global.css'
import './tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'dark',
        value: '#141F2F',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
}
