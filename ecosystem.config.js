module.exports = {
    apps: [{
        name: 'BACKEND-PROYECTO-WEB',
        script: 'src/server.js',

        // Gestión Avanzada de Reinicios
        watch: ['src'], // Para reiniciar si hay cambios en el código fuente
        ignore_watch: ['node_modules', 'logs', '*.log'], 
        autorestart: true, 
        restart_delay: 30000, 
        max_restarts: 10, 
        exp_backoff_restart_delay: 100, 

        // Manejo de Logs
        log_date_format: "YYYY-MM-DD HH:mm:ss",
        combine_logs: true, 
        error_file: 'logs/err.log', 
        out_file: 'logs/out.log', 
        merge_logs: true 
    }]
};
