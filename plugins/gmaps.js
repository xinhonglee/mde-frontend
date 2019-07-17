export default function init() {
  if (process.browser) {
    const API_KEY = 'AIzaSyCKOy_lv2WT1D1YIlNFR_HA7UKbnZBxJ0s';
    const CALLBACK_NAME = 'gmapsCallback';
    let initialized = !!window.google;
    let resolveInitPromise;

    let rejectInitPromise;

    const initPromise = new Promise((resolve, reject) => {
      resolveInitPromise = resolve;
      rejectInitPromise = reject;
    });


    if (initialized) return initPromise;

    initialized = true;

    window[CALLBACK_NAME] = () => resolveInitPromise(window.google);

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
    script.onerror = rejectInitPromise;
    document.querySelector('head').appendChild(script);

    return initPromise;
  }
}
