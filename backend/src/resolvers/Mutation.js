const mutations = {
    createDog(parent, args, ctx, info) {
        global.dogs = global.dogs || [];

        const newDog = { name: args.name };
        global.dogs.push(newDog);
        console.log(args);
        return newDog;
    }
};

module.exports = mutations;
