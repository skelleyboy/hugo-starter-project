module.exports = {
    plugins: [
        require('@fullhuman/postcss-purgecss')({
            content: [`${__dirname}/layouts/**/*.html`],
            whitelist: [],
        }),
        require('autoprefixer')({
            browsers: ['ie >= 8', 'last 3 versions']
        }),
    ]
};
