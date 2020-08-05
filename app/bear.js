var mongoose=require ("mongoose");
var schema= mongoose.schema;

var BearSchema= new schema({
    name :String
});

module.exports = mongoose.model('Bear',BearSchema);