var net = require('net');

var client = net.connect(3000);
client.on('connect', function () {
    client.write('Hello, I am the client!');
});
client.on('data', function (message) {
    console.log(message.toString());
});
client.on('end', function () {
    process.exti();
});
process.stdin.on('readable', function () {
    while (true) {
        var message = process.stdin.read();
        if (!message) return;
        message = message.toString().replace(/\s\n/, '');
        client.write(message);
    }
});