'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('project', {
    id: {
      type: 'int',
      id: true,
      primaryKey: true,
      autoIncrement: true
    },
    charity_id: {
      type: 'int',
      id: true,
      required: true
    },
    title: {
      type: 'string',
      length: 50
    },
    description: {
      type: 'string',
      length: 1000
    },
    projectImg: {
      type: 'string',
      length: 1000
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('project', callback);
};

exports._meta = {
  "version": 1
};
