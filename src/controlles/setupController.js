'use strict';
const Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        const starterTodos = [
            {
                "username": "user2",
                "todo": "Ridgewood Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Folsom Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Hausman Street",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Madeline Court",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Arion Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Sharon Street",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Flatlands Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Wolf Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Hull Street",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Nichols Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Murdock Court",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Clay Street",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Butler Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Wyckoff Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Dewitt Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Cheever Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Frank Court",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Scott Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Norman Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Grant Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Bancroft Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Hopkins Street",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Ridgewood Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Herkimer Court",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Dahill Road",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Belmont Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Brigham Street",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Cox Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Dunne Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Stockton Street",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Bergen Place",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Ovington Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user1",
                "todo": "Sumpter Street",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user3",
                "todo": "Turnbull Avenue",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "user2",
                "todo": "Monitor Street",
                "isDone": false,
                "hasAttachment": false
            }
        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        })
    })

};