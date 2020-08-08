const path = require('path');

const nextConfig = {
    webpack(config, options) {
        config.resolve.alias['@components'] = path.join(__dirname, 'components');
        config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
        config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
        return config;
    },
}

module.exports = nextConfig;