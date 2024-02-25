import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.mindguard.app',
  appName: 'app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
