const { RESTDataSource } = require('apollo-datasource-rest');
const REST_BASE_URL = require('../connections');

class TodoAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = REST_BASE_URL;
    }

    getTasksForUser(userId) {
        return this.get(`user/${userId}/tasks`);
    }

    getUserInfo(userId) {
        return this.get(`users/${userId}`);
    }

    updateComplete(taskId, complete) {
        return this.patch(`tasks/${taskId}`, {"complete": complete});
    }

    addTaskToUser(userId, description, complete) {
        return this.post(`/user/${userId}/tasks`, { "description": description, "complete": complete });
    }
};

module.exports = TodoAPI;