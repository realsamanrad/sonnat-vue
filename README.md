<div align="center">
    <img src="docs/logo.svg" height="136">
</div>

# Sonnat Vue

A Vue 3 component library using Sonnat Design System with TailwindCSS 4, providing elegant and accessible web components.

## Installation

```bash
npm install sonnat-vue
# or
yarn add sonnat-vue
```

## Usage

### Global Registration

```typescript
import { createApp } from 'vue'
import SonnatVue from 'sonnat-vue'
import 'sonnat-vue/dist/style.css'

const app = createApp(App)
app.use(SonnatVue)
app.mount('#app')
```

### Individual Components

```vue
<script setup>
import { SButton, SInput } from 'sonnat-vue'
</script>

<template>
  <div>
    <s-button variant="primary">Click me</s-button>
    <s-input placeholder="Enter text..." />
  </div>
</template>
```

## Components

- `SButton` - Button component with primary and secondary variants
- `SInput` - Text input component
- `SCard` - Card container component
- `SCheckbox` - Checkbox input component
- `SRadio` - Radio input component
- `SSelect` - Select dropdown component
- `SModal` - Modal dialog component
- `STooltip` - Tooltip component

## Features

- 🎨 Beautiful design based on Sonnat Design System
- 🌟 Modern Vue 3.5 Composition API
- 🎯 Written in TypeScript
- 🎭 Fully accessible components
- 📦 TailwindCSS 4 integration
- 🚀 Tree-shakeable exports
- 📱 Responsive and mobile-friendly

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Run tests
yarn test

# Lint code
yarn lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details 