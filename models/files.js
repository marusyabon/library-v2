import mongoose from 'mongoose';
const {Schema} = mongoose;

const FilesSchema = new Schema({
	name: String,
	size: String,
	url: String,
	bookId: {type: Schema.Types.ObjectId, ref: 'Book'},
	dataType: String
});

FilesSchema.set('toJSON', {
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.__v;
	}
});

const File = mongoose.model('File', FilesSchema);

export default File;