export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      min: 0,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  const grade = mongoose.model('account', gradesSchema, 'account');

  return grade;
};
