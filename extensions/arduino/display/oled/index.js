const oled = formatMessage => ({
    name: 'OLED',
    extensionId: 'oled',
    version: '0.0.1',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/oled.png`,
    description: formatMessage({
        id: 'oled.description',
        default: 'I2C oled display based on SSD1306 drivers.'
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

module.exports = oled;
