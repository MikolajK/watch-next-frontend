import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: 'https://mikolajk.dev/auth',
            realm: 'WatchNext',
            clientId: 'watch-next',
          },
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false,
            responseMode: 'fragment',
            flow: 'standard',
          },
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
