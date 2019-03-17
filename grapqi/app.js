const express = require('express');
const db = require('./model/db');
const graphqlHTTP = require('express-graphql');
const defaultGraphQLSchema = require('./schema/default');


let app = express();

app.use('/graphql',graphqlHTTP({
    schema: defaultGraphQLSchema,
    graphiql: true
}))

app.get('/',(req,res) => {
    res.send('你好')
});

app.get('/getNavList',async(req,res) => {
    let result = await db.find('admin',{});
    console.log(result);

})

app.listen(8082,() => {
    console.log('run localhost 8082');

});

