var granimInstance = new Granim({
    element: '#gradientBackground',
    direction: 'radial',
    states : {
        "default-state": {
            gradients: [
                ['#4447f2', '#6f44f2'],
                ['#db2a41', '#8f2184'],
            ]
        },
        transitionSpeed: 7000
    }
});