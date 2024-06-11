const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: '123456'
});

connection.connect((err) => {
  if (err) {
    console.error('连接失败:', err);
    return;
  }
  console.log('连接成功');
});

connection.end();

