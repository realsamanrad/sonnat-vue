/// <reference types="vite/client" />
/// <reference types="vite-plugin-svg4vue/client" />

declare module '@/assets/icons/*.svg' {
  import { DefineComponent, SVGAttributes } from 'vue'
  const component: DefineComponent<SVGAttributes>
  export default component
}
