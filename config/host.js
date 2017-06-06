const hostConfig = {
  dev: {
    BASE_HOST: 'https://test-api.ilovelook.cn',
    SHOP_HOST: 'https://test-shopapi.ilovelook.cn',
    PORT: 3000,
  },
  test: {
    BASE_HOST: 'https://test-api.ilovelook.cn',
    SHOP_HOST: 'https://test-shopapi.ilovelook.cn',
    PORT: 3000,
  },
  production: {
    BASE_HOST: 'http://api.ilovelook.cn',
    SHOP_HOST: 'http://shopapi.ilovelook.cn',
    PORT: 3000,
  },
};

module.exports = hostConfig;