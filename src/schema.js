const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        "Query to return all tasks associated with a user"
        tasksForUser(id: ID!): [Task]
        "Query all data associated with a user"
        userInfo(id: ID!): User!
    },

    type Mutation {
        "Update completion state of a given task"
        updateComplete(id: ID!, complete: Boolean!): UpdateCompleteResponse!
        "Add a task associated with a user"
        addTaskToUser(id: ID!, description: String!, complete: Boolean!): AddTaskToUserResponse!
    },

    "Response type for updateComplete mutation"
    type UpdateCompleteResponse {
        "Similar to HTTP status code, represents the status of the mutation"
        code: Int!
        "Indicates whether the mutation was successful"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "Newly updated Task after response"
        task: Task
    },

    "Response type for addTaskToUser"
    type AddTaskToUserResponse {
        "Similar to HTTP status code, represents the status of the mutation"
        code: Int!
        "Indicates whether the mutation was successful"
        success: Boolean!
        "Human-readable message for the UI"
        message: String!
        "Newly updated Task after response"
        task: Task
    },

    
    "A Task is something that should be completed by a user"
    type Task {
        "The unique id of the task"
        task_id: Int!
        "A description of the task to be completed"
        description: String!
        "Whether or not the task is complete"
        complete: Boolean!
    },
    "A User is a person responsible for one or more tasks"
    type User {
        "The unique id of the user"
        user_id: Int!
        "The user's plain text name"
        name: String!
        "All tasks associated with the user"
        tasks: [Task]
    }
`;

module.exports = typeDefs;