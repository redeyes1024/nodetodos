'use strict';
const configValues=require('./config');
module.exports={
    getConnectionString: function () {
        return `mongodb://${configValues.name}:${configValues.password}@ds133670.mlab.com:33670/tasklist`;
    }
}