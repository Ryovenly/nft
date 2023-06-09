import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  //process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
  plugins: [react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        sourcemap: true
      },
      manifest: {
        name: 'NFC',
        short_name: 'NFC',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })]
});
}