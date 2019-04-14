
const mongoose = require('mongoose');

const schema = {
    'course_id': String,
    'course_name': String,
    'course_des': String,
    'created_at': Date,
    'updated_at':Date,
    'professor': {
        'use_id': String,
        'password': String,
        'first_name': String,
        'last_name': String},
    'lectures': [{name: String, des: String}],
}


const courseSchema = new mongoose.Schema(schema);
// new Schema({ url: String, text: String, id: Number},
//     { collection : 'courses' });

//Indexes
courseSchema.index({course_name: 1});

//Custom methods
courseSchema.methods.courseInfo = ()=>{
    return {'course_name': this.course_name, 'course_des': this.course_des};
}

courseSchema.methods.getLectures = () =>{
    return this.lectures;
}

//Static methods
courseSchema.static.findByName = (name, callBack) =>{
        return this.find({course_name: name}, callBack);
    };

//Pre processing
courseSchema.pre('save', (next) =>{
        const curDate = new Date();
        this.updated_at =  curDate;
        if(this.isNew){
            this.created_at = curDate;

        }
        next();
    })

courseSchema.pre('update', (next) =>{
    const curDate = new Date();
    this.updated_at =  curDate;
    if(!this.created_at){
        this.created_at = curDate;
    }
    next();
})

module.exports =  mongoose.model('CoursesModel',courseSchema, 'courses');
// module.exports =  mongoose.model('CoursesModel',courseSchema);