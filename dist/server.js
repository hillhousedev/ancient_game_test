(()=>{var e={888:(e,t,n)=>{"use strict";var r=new(n(121))(n(83));r.authenticate().then((function(){console.log("Successfully connected to db")})).catch((function(e){console.error(" Error cant connect to db..",e)})),e.exports=r},83:e=>{"use strict";e.exports={username:"postgres",password:"root",database:"ancient_game_dev",host:"127.0.0.1",dialect:"postgres"}},519:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(232),s=r(n(981)),o=r(n(820));new a.ApolloServer({resolvers:s.default,typeDefs:o.default}).listen().then((function(e){var t=e.url;return console.log("Server ready at "+t+". ")}))},981:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(189),a=n(29),s=n(970).Tuser;t.default={Query:{getUserList:function(){return r.findAll()},getUser:function(e,t){var n=t.id;return r.findOne({where:{id:n}})},getBet:function(e,t){var n=t.id;return a.findOne({where:{id:n}})},getBetList:function(){return a.findAll()},getTusers:function(){return s.findAll()}},Mutation:{createUser:function(e,t){var n=t.name,a=t.balance;return r.create({name:n,balance:a})},createBet:function(e,t){var n=t.userId,r=t.betAmount,s=t.chance;return a.create({userId:n,betAmount:r,chance:s})}}}},820:function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(232);t.default=s.gql(a||(a=r(["\n    type User {\n        id: ID!\n        name: String\n        balance: Float\n        bets: [Bet!]!\n    }\n\n    type Bet {\n        betAmount: Float\n        chance: Float\n        payOut: Float\n        win: Boolean\n    }\n\n    type Tuser {\n        firstName: String\n        lastName: String\n        email: String\n    }\n\n    type Task {\n        title: String\n        complete: Boolean\n\n    }\n\n    type Query {\n        getUser(id: ID): User\n        getUserList: [User]\n        getBetList: [Bet!]\n        getBet(id: ID): Bet\n        getTusers: [Tuser!]\n    }\n\n   type Mutation {\n       createUser(name: String, balance: Float): User\n       createBet(userId: Int, betAmount: Float, chance: Float): Bet\n    \n   }\n\n"],["\n    type User {\n        id: ID!\n        name: String\n        balance: Float\n        bets: [Bet!]!\n    }\n\n    type Bet {\n        betAmount: Float\n        chance: Float\n        payOut: Float\n        win: Boolean\n    }\n\n    type Tuser {\n        firstName: String\n        lastName: String\n        email: String\n    }\n\n    type Task {\n        title: String\n        complete: Boolean\n\n    }\n\n    type Query {\n        getUser(id: ID): User\n        getUserList: [User]\n        getBetList: [Bet!]\n        getBet(id: ID): Bet\n        getTusers: [Tuser!]\n    }\n\n   type Mutation {\n       createUser(name: String, balance: Float): User\n       createBet(userId: Int, betAmount: Float, chance: Float): Bet\n    \n   }\n\n"])))},29:(e,t,n)=>{const r=n(121),a=n(888),s=(n(189),a.define("Bets",{betAmount:{allowNull:!1,type:r.FLOAT},chance:{allowNull:!1,type:r.FLOAT},payout:{type:r.FLOAT},win:{type:r.BOOLEAN},userId:{allowNull:!1,type:r.INTEGER}}));s.associate=function(e){s.belongsTo(e.User,{foreignKey:"userId",as:"user"})},e.exports=s},970:e=>{"use strict";e.exports=function(e,t){const n=e.define("User",{firstName:{type:t.STRING,allowNull:!1},lastName:{type:t.STRING,allowNull:!1},email:{type:t.STRING,allowNull:!1,validate:{isEmail:!0},unique:!0}},{paranoid:!0});return User.associate=function(e){User.hasMany(e.Task,{foreignKey:{name:"userId",allowNull:!1},as:"tasks"})},n}},189:(e,t,n)=>{const r=n(121),a=n(888).define("Users",{name:{allowNull:!1,type:r.STRING},balance:{allowNull:!1,type:r.FLOAT}});a.associate=function(e){a.hasMany(e.Bets)},e.exports=a},232:e=>{"use strict";e.exports=require("apollo-server")},121:e=>{"use strict";e.exports=require("sequelize")}},t={};!function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(519)})();
//# sourceMappingURL=server.js.map