const db = require('../model/db');
const { GraphQLObjectType,GraphQLString } = require('graphql');

let AdminSchema = new GraphQLObjectType({
    name:'admin',
    fields:{
        _id:{ type:GraphQLString },
        username:{ type:GraphQLString },
        password:{ type:GraphQLString },
        add_time:{ type:GraphQLString },
    }
});


let RootSchema = new GraphQLObjectType({
    name:'root',
    fields:{
        type:AdminSchema,
        args:{id:{type:GraphQLString}},
        async resolve(parent,args) {
            let admin = await db.find('admin',{});
            return admin[0];
        }
    }
});

module.exports = {
    
}

