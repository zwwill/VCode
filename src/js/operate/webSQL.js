


let db = openDatabase(' mydatabase', '1.0', 'test table', 2 * 1024 * 1024);
let name = [2, 'ouven'];
db.transaction( function (table) {
    table.executeSql(' CREATE TABLE IF NOT EXISTS t1 (id unique, msg)');
    table.executeSql(' INSERT INTO t1 (id, msg) VALUES (1, "hello")');
    table.executeSql(' INSERT INTO t1 (id, msg) VALUES (?, ?)', name);
});
