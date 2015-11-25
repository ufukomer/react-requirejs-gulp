requirejs.config({
    baseUrl: 'js/components',
    paths: {
        react: '/js/bower_components/react/react',
        'react-dom': '/js/bower_components/react/react-dom'
    },
    shim: {
        'react': {
            exports: 'React'
        }
    }

});