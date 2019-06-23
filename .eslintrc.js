module.exports = {
  extends: ["eslint-config-airbnb-base"],
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    'import/prefer-default-export': 0,
  },
};
