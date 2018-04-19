import * as mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: process.env.USER_NAME,
    password: process.env.PWD,
    database: process.env.DB
});

exports.pool = pool;

exports.row = function(procedure, values) {
    return callProcedure(procedure, values).then(function(data) {
        return data[0][0];
    })
}

exports.rows = function(procedure, values) {
    return callProcedure(procedure, values).then(function(data) {
        return data[0];
    })
}

exports.empty = function(procedure, values) {
    return callProcedure(procedure, values).then(function() {
        return;
    });
}

function callProcedure(procedure, values) {
    return new Promise(function(fulfill, reject) {
        pool.getConnection(function(err, connection) {
            if(err) {
                reject(err);
            } else {
                pool.query(createQueryString(procedure, values),
                 values, function(err, results) {
                     connection.release();
                    if(err) {
                        reject(err);
                    } else {
                        fulfill(results);
                    }
                })
            }
        })
    });
}

function createQueryString(procedure, values) {
    var query = 'CALL ' + procedure + "(";
    for(var i = 0; i < values.length; i++) {
        query += (i >= values.length - 1 ? "?" : "?,");
    }
    return query += ")";
}