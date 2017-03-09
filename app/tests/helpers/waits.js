
export const waitForUrl = url => (
  browser.waitUntil(() => browser.url().value === url)
);

export const waitForUrlToChange = () => {
  const url = browser.url().value;
  return browser.waitUntil(() => browser.url().value !== url);
};
