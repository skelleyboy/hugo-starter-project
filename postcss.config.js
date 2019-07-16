const plugins = [];

if (`production` === process.env.NODE_ENV) {
    plugins.push(
        require('@fullhuman/postcss-purgecss')({
            content: [`${__dirname}/layouts/**/*.html`],
            whitelist: [],
        })
    );
}

plugins.push(
    require('autoprefixer')({
        browsers: ['ie >= 8', 'last 3 versions']
    })
);

module.exports = { plugins };
