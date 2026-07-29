import { RailwayConfig } from '@railwayapp/types'

export default {
  build: {
    builder: 'NIXPACKS',
  },
  deploy: {
    startCommand: 'npm run build && npm run preview -- --host 0.0.0.0 --port $PORT',
    healthcheckPath: '/',
    healthcheckTimeout: 100,
    restartPolicyType: 'ON_FAILURE',
    restartPolicyMaxRetries: 10,
  },
} satisfies RailwayConfig
