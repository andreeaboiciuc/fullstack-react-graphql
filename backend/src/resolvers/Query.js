//const Query = {
//    dogs(parent, args, ctx, info) {
//        global.dogs = global.dogs || [];

//        return global.dogs;
//    }
 //   items() {
 //       return [{ id: 'xablau',  title: 'foo'}]
 //   }
//};
//module.exports = Query;
const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),



//   async items(parent, args, ctx, info) {
//     console.log('Getting Items!!');
//     const items = await ctx.db.query.items();
//     return items;
 //   }
};

module.exports = Query;