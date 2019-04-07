

var  users = [  {'id': 'HaiNguyen', 'role': 'Student'},
                {'id': 'AsaadSaad', 'role': 'Professor'}];

var getUsers = async function() {

    try {
      return users;
    }catch(err){
        return Promise.reject(err);
    }
}

module.exports =  {'getUsers':getUsers};