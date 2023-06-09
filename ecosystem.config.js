module.exports = {
    apps: [{
        name: "admin-api",
        exec_mode: 'cluster',
        instances: 'max',
        script: 'npm',
        args: 'start'
    }]
}