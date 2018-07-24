var softDelete = require('mongoose-softdelete');
var timestamps = require('mongoose-timestamp');

var BlogSchema = new mongooseSchema({
  title:{
    type: String,
    default: '',
    required: true,
    trim: true
  },
  matter: {
    type: String,
    default: '',
    required: true,
    trim: true
  },
  created:{
    type:Date,
    default:Date.now
  }
});

BlogSchema.plugin(timestamps);
BlogSchema.plugin(softDelete);

function stringNotNull(obj){
   return obj.length
}



var Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog
