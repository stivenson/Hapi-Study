function validate(request, username, password, callback) {
    if (password != 'root') {
        return callback(null, false);
    }
    callback(null, true, { username: username })
}

function auth(server, options, next) {
    server.auth.strategy('simple', 'basic', {
        validateFunc: validate
    })

    next()
}

auth.attributes = {
    name: 'auth'
}

module.exports = auth