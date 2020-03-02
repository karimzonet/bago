var Rest = require('./rest');
module.exports = {
    sendMessageRest: function (content, to) {
        var rest = new Rest();
        var sendMessageRest = rest.sendMessage(content, to)
        return sendMessageRest;
    }
}
