const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const { default : mongoose} = require('mongoose')





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://surajxxx:MetEma4V1FgQslG7@cluster0.ik33b.mongodb.net/surajxxxx-DB?retryWrites=true&w=majority" , { useNewUrlParser: true})

.then( () => console.log("mongoDb is connected"))
.catch ( err => console.log(err))




app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
