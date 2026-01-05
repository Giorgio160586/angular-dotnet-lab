import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    globals: false,
    setupFiles: ['./vitest.setup.ts'],
    browser: {
       instances: [
        {
          browser: 'chromium',
          headless: false,
        },
      ],
      provider: playwright()
    }
  },
});
