module.exports = {
    apps: [{
        name: 'BACKEND-PROYECTO-WEB:5000',
        script: 'app.js',

        // Gestión Avanzada de Reinicios
        watch: false, 
        ignore_watch: ['node_modules', 'logs', 'err.log', 'out.log'], 
        autorestart: false, 
        restart_delay: 30000, 
        max_restarts: 10, 
        exp_backoff_restart_delay: 100, 

        // Manejo de Logs
        log_date_format: "YYYY-MM-DD HH:mm:ss",
        combine_logs: true, 
        error_file: 'err.log', 
        out_file: 'out.log', 
        merge_logs: true 
    }]
};