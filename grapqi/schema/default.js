const db = require('../model/db');
const { GraphQLObjectType,GraphQLString,GraphQLSchema } = require('graphql');

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
        oneAdminList:{
            type:AdminSchema,
            args:{id:{type:GraphQLString}},
            async resolve(parent,args) {
                let result = await db.find('admin',{});
                return result[0]
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query:RootSchema
})

