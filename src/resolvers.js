const resolvers = {
    Query: {
        tasksForUser: (_,{ id }, { dataSources }) => {
            return dataSources.todoAPI.getTasksForUser(id);
        },
        userInfo: (_,{ id }, { dataSources }) => {
            return dataSources.todoAPI.getUserInfo(id);
        }
    },
    Mutation: {
        updateComplete: async (_,{ id, complete }, { dataSources }) => {
            try {
                const task = await dataSources.todoAPI.updateComplete(id, complete);
                return {
                  code: 200,
                  success: true,
                  message: `Successfully updated completion for task ${id}`,
                  task,
                };
            } catch (err) {
                return {
                  code: err.extensions.response.status,
                  success: false,
                  message: err.extensions.response.body,
                  task: null,
                };
            }
        },
    },
    User: {
        tasks: ({user_id}, _, {dataSources}) => {
            return dataSources.todoAPI.getTasksForUser(user_id);
        }
    }
}

module.exports = resolvers;