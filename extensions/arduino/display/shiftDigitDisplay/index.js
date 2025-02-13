const shiftDigitDisplay = formatMessage => ({
    name: formatMessage({
        id: 'shiftDigitDisplay.name',
        default: 'Shift Digit Display'
    }),
    extensionId: 'shiftDigitDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'ArthurZheng',
    iconURL: `asset/shiftDigitDisplay.png`,
    description: formatMessage({
        id: 'shiftDigitDisplay.description',
        default: 'Digital dislapy based on 74HC595 with dynamic scanning display.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'https://github.com/vcloudblock/vcloudblock-wiki'
});

module.exports = shiftDigitDisplay;
