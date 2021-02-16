const { MockList } = require('apollo-server');

const mocks = {
    Query: () => ({
        queryForServiceCenters: () => new MockList([3, 4])
    }),
    ServiceCenter: () => ({
        id: () => '123',
        title: () => 'Santa Monica Beach Repairshop',
        address: () => '5200 Wilshire Blvd',
        phone: () => "213 - 444 - 5959",
        availability: () => {
            return {
                id: '321',
                date: ["Feb 17", "Feb 18", "Feb 19"],
                time: ["2 pm", "3 pm", "4 pm"]
            };
        },
    }),
};

module.exports = mocks;