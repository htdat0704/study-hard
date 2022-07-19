module.exports = {
    mutipleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map((moogose) => moogose.toObject());
    },

    mongooseToObject: (moongose) => {
        return moongose ? moongose.toObject : moongose;
    },
};
