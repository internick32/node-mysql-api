const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/employees'));

app.listen(app.get('port'), () => {
    console.log('server init in port ', app.get('port'));
});