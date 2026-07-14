import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo, useEffect} from 'react';

const alphaXivPattern = /(?:view\s+on\s+)?alphaxiv/i;

const hideElement = (element: HTMLElement) => {
  element.classList.add('hide-alphaxiv');
  element.setAttribute('aria-hidden', 'true');
};

const hideAlphaXivWidgets = () => {
  const selector = [
    'a[href*="alphaxiv"]',
    'a[href*="alphaXiv"]',
    '[id*="alphaxiv"]',
    '[id*="alphaXiv"]',
    '[class*="alphaxiv"]',
    '[class*="alphaXiv"]',
    '[title*="alphaxiv"]',
    '[title*="alphaXiv"]',
    '[aria-label*="alphaxiv"]',
    '[aria-label*="alphaXiv"]',
  ].join(',');

  document.querySelectorAll<HTMLElement>(selector).forEach(hideElement);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const matches: HTMLElement[] = [];
  let node = walker.nextNode();

  while (node) {
    if (node.textContent && alphaXivPattern.test(node.textContent)) {
      const parent = node.parentElement;
      const target = parent?.closest<HTMLElement>('a, button, span, small, p') ?? parent;
      const text = target?.textContent?.trim() ?? '';

      if (target && text.length <= 120) {
        matches.push(target);
      }
    }

    node = walker.nextNode();
  }

  matches.forEach(hideElement);
};

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  useEffect(() => {
    hideAlphaXivWidgets();

    const observer = new MutationObserver(hideAlphaXivWidgets);
    observer.observe(document.body, {childList: true, subtree: true});

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
