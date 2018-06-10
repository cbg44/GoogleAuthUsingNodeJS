
User = require('../models/userModel');
Tasks = require('../models/tasksModel');


module.exports = class userDAO {
    static mostPointsThisWeek() {
        return User.find().sort({scores: 'desc'})
                   .catch(() => error("bla"));
    }

  static mostTasksDoneSoFar() {
    return User.find({}, 'name id taskcounter').sort({taskcounter: 'desc'})
      .catch(() => error("bla"));
  }

  static TasksPerDay() {
    return User.find({}, 'name id dailytaskscounter').sort({dailytaskscounter: 'desc'})
      .catch(() => error("bla"));
  }

  static TheMedalists() {
    return User.find().sort({scores: 'desc'})
      .catch(() => error("bla"));
  }
};