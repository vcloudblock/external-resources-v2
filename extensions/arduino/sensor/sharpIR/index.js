const sharpIR = formatMessage => ({
    name: formatMessage({
        id: 'sharpIR.name',
        default: 'Sharp IR Sensor'
    }),
    extensionId: 'sharpIR',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/sharpIR.png`,
    description: formatMessage({
        id: 'sharpIR.description',
        default: 'Infrared distance sensor based on the principle of triangle ranging.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: 'https://github.com/vcloudblock/vcloudblock-wiki'
});

module.exports = sharpIR;
