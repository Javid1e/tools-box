import localFont from 'next/font/local';

const IRANSansBlack = localFont({
  src: [
    { path: './fonts/woff2/IRANSansWeb_Black.woff2', weight: '900' },
    { path: './fonts/woff/IRANSansWeb_Black.woff', weight: '900' },
    { path: './fonts/ttf/IRANSansWeb_Black.ttf', weight: '900' },
  ],
  fallback: ['sans-serif'],
});

const IRANSansBold = localFont({
  src: [
    { path: './fonts/woff2/IRANSansWeb_Bold.woff2', weight: 'bold' },
    { path: './fonts/woff/IRANSansWeb_Bold.woff', weight: 'bold' },
    { path: './fonts/ttf/IRANSansWeb_Bold.ttf', weight: 'bold' },
  ],
  fallback: ['sans-serif'],
});

const IRANSansSemiBold = localFont({
  src: [
    { path: './fonts/woff2/IRANSansWeb_Medium.woff2', weight: '500' },
    { path: './fonts/woff/IRANSansWeb_Medium.woff', weight: '500' },
    { path: './fonts/ttf/IRANSansWeb_Medium.ttf', weight: '500' },
  ],
  fallback: ['sans-serif'],
});

const IRANSansSmall = localFont({
  src: [
    { path: './fonts/woff2/IRANSansWeb_Light.woff2', weight: '300' },
    { path: './fonts/woff/IRANSansWeb_Light.woff', weight: '300' },
    { path: './fonts/ttf/IRANSansWeb_Light.ttf', weight: '300' },
  ],
  fallback: ['sans-serif'],
});

const IRANSansThin = localFont({
  src: [
    { path: './fonts/woff2/IRANSansWeb_UltraLight.woff2', weight: '200' },
    { path: './fonts/woff/IRANSansWeb_UltraLight.woff', weight: '200' },
    { path: './fonts/ttf/IRANSansWeb_UltraLight.ttf', weight: '200' },
  ],
  fallback: ['sans-serif'],
});

const IRANSansBasic = localFont({
  src: [
    { path: './fonts/woff2/IRANSansWeb.woff2', weight: 'normal' },
    { path: './fonts/woff/IRANSansWeb.woff', weight: 'normal' },
    { path: './fonts/ttf/IRANSansWeb.ttf', weight: 'normal' },
  ],
  fallback: ['sans-serif'],
});
export {
  IRANSansBlack,
  IRANSansBold,
  IRANSansSemiBold,
  IRANSansSmall,
  IRANSansThin,
  IRANSansBasic,
};
