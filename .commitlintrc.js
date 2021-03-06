module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [2, 'always'],
        'body-max-line-length': [2, 'always', 72],
        'footer-leading-blank': [2, 'always'],
        'footer-max-line-length': [2, 'always', 72],
        'header-max-length': [2, 'always', 60],
    },
};
