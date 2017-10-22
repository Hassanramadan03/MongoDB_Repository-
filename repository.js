var MongoRepository = function(objScheme) {

    this.add = function(objValue, callback) {
        // if callback is not passed i creat alternative to handle
        objValue.save(callback);
    };

    this.get = function(id, callback) {
        objScheme.findOne({
            _id: id
        }, function(err, document) {
            if (err) {
                callback(err, true);
            } else {
                callback(document, false);
            }
        });
    };

    this.find = function(query, callback) {
        objScheme.find(query, function(error, documents) {
            if (error) {
                callback(err, true);
            } else {
                callback(documents, false);
            }
        });
    };

    this.update = function(query, value) {
        objScheme.update(query, {
            $set: value
        }, {
            multi: true
        }, function(err, numAffected) {
            if (err) {
                return -1;
            } else {
                // reurn the number of affected ducuments
                return numAffected;
            }
        });
    };
    this.remove = function(query, callback) {
        objScheme.remove(query, callback);
    };
}

module.exports.Repository = MongoRepository;
