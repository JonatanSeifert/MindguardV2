import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.mindguard.app',
  appName: 'Mindguard',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
