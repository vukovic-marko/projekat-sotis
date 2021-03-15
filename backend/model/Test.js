const mongoose = require('mongoose')

// const options = {
//     discriminatorKey: 'role'
// };

const schema = mongoose.Schema({
    teacher: {
        _id: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    },
    title: {
        type: String,
        required: true
    },
    questions: [{
        no: {
            type: Number
        },
        question: {
            type: String
        },
        answers: [{
            no: {
                type: Number
            },
            answer: {
                type: String
            },
            correct: {
                type: Boolean
            }
        }],
        points: {
            type: Number
        }
    }],
    test_points: {
        type: Number
    }
})//, options)

module.exports = mongoose.model('Test', schema)