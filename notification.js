NotificationSchema   = new Schema({
    seaker: {type:mongoose.Schema.Types.ObjectId, ref:'User'}, //information of seaker
    owner: [{type:mongoose.Schema.Types.ObjectId, ref:'House'}], // information of owner 
    message: String, // any description of the notification message 
    created_at:{type: Date, default: Date.now},
});