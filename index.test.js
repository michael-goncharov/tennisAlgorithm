const pingpong = require('./index');

// test with 2 equal results - sorting by personal games
let tour1 = (JSON.parse('[{"id":196,"date":"2019-04-23T00:04","playroom":"1","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dave Nader","user2_id":3},"winner":{"winner_name":null,"winner_id":2},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:0"],"play":null},' +
    '{"id":197,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"winner":{"winner_name":null,"winner_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:3"],"play":1},' +
    '{"id":198,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":2},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":1},' +
    '{"id":199,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"winner":{"winner_name":null,"winner_id":3},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":1},' +
    '{"id":200,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["1:3"],"play":1},' +
    '{"id":201,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dr. Ali Jakubowski","user1_id":4},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:0"],"play":1}]'));

let score1 = [JSON.parse('[{"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":11,"player2_score":9},{"id":814,"player1_score":11,"player2_score":9},{"id":815,"player1_score":0,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":4,"player2_score":11},{"id":814,"player1_score":9,"player2_score":11},{"id":815,"player1_score":6,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":11,"player2_score":2},{"id":814,"player1_score":11,"player2_score":6},{"id":815,"player1_score":4,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]')];

let result1 = {
    errorCode: 0,
    result: [
        {place: 1, player_id: "4", points: 5},
        {place: 2, player_id: "2", points: 5},
        {place: 3, player_id: "5", points: 4},
        {place: 4, player_id: "3", points: 4}
    ]
};
// test with 3 equal results - sorting by sets
let tour2 = (JSON.parse('[{"id":196,"date":"2019-04-23T00:04","playroom":"1","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dave Nader","user2_id":3},"winner":{"winner_name":null,"winner_id":2},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:0"],"play":null},' +
    '{"id":197,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"winner":{"winner_name":null,"winner_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:3"],"play":1},' +
    '{"id":198,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":2},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":1},' +
    '{"id":199,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"winner":{"winner_name":null,"winner_id":3},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":1},' +
    '{"id":200,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":3},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":1},' +
    '{"id":201,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dr. Ali Jakubowski","user1_id":4},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:0"],"play":1}]'));
let score2 = [JSON.parse('[{"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":11,"player2_score":9},{"id":814,"player1_score":11,"player2_score":9},{"id":815,"player1_score":0,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":4,"player2_score":11},{"id":814,"player1_score":9,"player2_score":11},{"id":815,"player1_score":6,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":11,"player2_score":2},{"id":814,"player1_score":11,"player2_score":6},{"id":815,"player1_score":4,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]')];

let result2 = { errorCode: 0,
    result: [
    {place: 1, player_id: "4", points: 5},
    {place: 2, player_id: "2", points: 5},
    {place: 3, player_id: "3", points: 5},
    {place: 4, player_id: "5", points: 3}
]};
// test with 3 equal results - sorting by additional data
let tour3 = (JSON.parse('[{"id":196,"date":"2019-04-23T00:04","playroom":"1","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dave Nader","user2_id":3},"winner":{"winner_name":null,"winner_id":2},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":null},' +
    '{"id":197,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"winner":{"winner_name":null,"winner_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["1:3"],"play":1},' +
    '{"id":198,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":2},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":1},' +
    '{"id":199,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"winner":{"winner_name":null,"winner_id":3},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":1},' +
    '{"id":200,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":3},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:1"],"play":1},' +
    '{"id":201,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dr. Ali Jakubowski","user1_id":4},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"winner":{"winner_name":null,"winner_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:0"],"play":1}]'));
let score3 = [JSON.parse('[{"game_id":196,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":11,"player2_score":9},{"id":814,"player1_score":11,"player2_score":9},{"id":815,"player1_score":0,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"game_id":197,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":4,"player2_score":11},{"id":814,"player1_score":9,"player2_score":11},{"id":815,"player1_score":6,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"game_id":199,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":11,"player2_score":2},{"id":814,"player1_score":11,"player2_score":6},{"id":815,"player1_score":4,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]')];

let result3 = {
        errorCode: 0,
        result:[
            {place: 1, player_id: "3", points: 5},
            {place: 2, player_id: "2", points: 5},
            {place: 3, player_id: "4", points: 5},
            {place: 4, player_id: "5", points: 3}
    ]};

// test with all zero results
let tour5 = (JSON.parse('[{"id":196,"date":"2019-04-23T00:04","playroom":"1","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dave Nader","user2_id":3},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":null},' +
    '{"id":197,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":198,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":199,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":200,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":201,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dr. Ali Jakubowski","user1_id":4},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1}]'));
let score5 = [JSON.parse('[{"game_id":196,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":11,"player2_score":9},{"id":814,"player1_score":11,"player2_score":9},{"id":815,"player1_score":0,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"game_id":197,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":4,"player2_score":11},{"id":814,"player1_score":9,"player2_score":11},{"id":815,"player1_score":6,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"game_id":198,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":4,"player2_score":11},{"id":814,"player1_score":9,"player2_score":11},{"id":815,"player1_score":6,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"game_id":199,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":4,"player2_score":11},{"id":814,"player1_score":9,"player2_score":11},{"id":815,"player1_score":6,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"game_id":200,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":4,"player2_score":11},{"id":814,"player1_score":9,"player2_score":11},{"id":815,"player1_score":6,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]'),
    JSON.parse('[{"game_id":201,"id":812,"player1_score":11,"player2_score":0},{"id":813,"player1_score":11,"player2_score":2},{"id":814,"player1_score":11,"player2_score":6},{"id":815,"player1_score":4,"player2_score":11},{"id":816,"player1_score":0,"player2_score":0}]')];

let result5 = {
    errorCode: 0,
    result:[
        {place: 1, player_id: "2", points: 0},
        {place: 2, player_id: "3", points: 0},
        {place: 3, player_id: "4", points: 0},
        {place: 4, player_id: "5", points: 0}
    ]};
// one more test with all zero results with bigger number of players
let tour6 = (JSON.parse('[{"id":239,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","user1_id":55},"player_2":{"user2_id_name":"44","user2_id":54},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":240,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","user1_id":55},"player_2":{"user2_id_name":"Mac1","user2_id":53},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":241,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","user1_id":55},"player_2":{"user2_id_name":"Admin","user2_id":50},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":242,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","user1_id":55},"player_2":{"user2_id_name":"Best","user2_id":47},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":243,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","user1_id":55},"player_2":{"user2_id_name":"1","user2_id":45},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":244,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440","user1_id":55},"player_2":{"user2_id_name":"Best","user2_id":43},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":245,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"44","user1_id":54},"player_2":{"user2_id_name":"Mac1","user2_id":53},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":246,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"44","user1_id":54},"player_2":{"user2_id_name":"Admin","user2_id":50},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":247,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"44","user1_id":54},"player_2":{"user2_id_name":"Best","user2_id":47},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":248,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"44","user1_id":54},"player_2":{"user2_id_name":"1","user2_id":45},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":249,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"44","user1_id":54},"player_2":{"user2_id_name":"Best","user2_id":43},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":250,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Mac1","user1_id":53},"player_2":{"user2_id_name":"Admin","user2_id":50},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":251,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Mac1","user1_id":53},"player_2":{"user2_id_name":"Best","user2_id":47},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":252,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Mac1","user1_id":53},"player_2":{"user2_id_name":"1","user2_id":45},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":253,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Mac1","user1_id":53},"player_2":{"user2_id_name":"Best","user2_id":43},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":254,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Admin","user1_id":50},"player_2":{"user2_id_name":"Best","user2_id":47},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":255,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Admin","user1_id":50},"player_2":{"user2_id_name":"1","user2_id":45},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":256,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Admin","user1_id":50},"player_2":{"user2_id_name":"Best","user2_id":43},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":257,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Best","user1_id":47},"player_2":{"user2_id_name":"1","user2_id":45},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":258,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"Best","user1_id":47},"player_2":{"user2_id_name":"Best","user2_id":43},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1},{"id":259,"date":"2019-05-13T00:05","playroom":"","player_1":{"user1_id_name":"1","user1_id":45},"player_2":{"user2_id_name":"Best","user2_id":43},"winner":{"winner_name":null,"winner_id":null},"tournament":{"tournament_name":"ccd","tournament_id":55},"score":["0:0"],"additional":0,"play":1}]'));
let result6 = {
    errorCode: 0,
    result:[
        {place: 1, player_id: "55", points: 0},
        {place: 2, player_id: "54", points: 0},
        {place: 3, player_id: "53", points: 0},
        {place: 4, player_id: "50", points: 0},
        {place: 5, player_id: "47", points: 0},
        {place: 6, player_id: "45", points: 0},
        {place: 7, player_id: "43", points: 0}
    ]};
// test with partial zero results - after the first game
let tour7 = (JSON.parse('[{"id":196,"date":"2019-04-23T00:04","playroom":"1","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dave Nader","user2_id":3},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:0"],"play":null},' +
    '{"id":197,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":198,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":199,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":200,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":201,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dr. Ali Jakubowski","user1_id":4},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1}]'));
let result7 = {
    errorCode: 0,
    result:[
        {place: 1, player_id: "2", points: 2},
        {place: 2, player_id: "3", points: 1},
        {place: 3, player_id: "4", points: 0},
        {place: 4, player_id: "5", points: 0},
    ]};

// test with partial zero results - after the first game, second game in progress
let tour4 = (JSON.parse('[{"id":196,"date":"2019-04-23T00:04","playroom":"1","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dave Nader","user2_id":3},"tournament":{"tournament_name":"213","tournament_id":27},"score":["2:2"],"play":null},' +
    '{"id":197,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":198,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Antoinette Russel","user1_id":2},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":199,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Dr. Ali Jakubowski","user2_id":4},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":200,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dave Nader","user1_id":3},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["0:0"],"play":1},' +
    '{"id":201,"date":"2019-04-23T00:04","playroom":"","player_1":{"user1_id_name":"Dr. Ali Jakubowski","user1_id":4},"player_2":{"user2_id_name":"Lucile Mitchell","user2_id":5},"tournament":{"tournament_name":"213","tournament_id":27},"score":["3:0"],"play":1}]'));
let result4 = {
    errorCode: 0,
    result:[
        {place: 1, player_id: "4", points: 2},
        {place: 2, player_id: "5", points: 1},
        {place: 3, player_id: "2", points: 0},
        {place: 4, player_id: "3", points: 0},
    ]};


    test('checking score 1', () => {
     expect(pingpong.getResult(
         tour1)).toEqual(result1);
});
test('checking score 2', () => {
    expect(pingpong.getResult(
        tour2)).toEqual(result2);
});
test('checking score 3', () => {
    expect(pingpong.getResult(
        tour3, score3)).toEqual(result3);
});
test('checking score 4', () => {
    expect(pingpong.getResult(
        tour4)).toEqual(result4);
});
test('checking score 5', () => {
    expect(pingpong.getResult(
        tour5, score5)).toEqual(result5);
});
test('checking score 6', () => {
    expect(pingpong.getResult(
        tour6)).toEqual(result6);
});
test('checking score 7', () => {
    expect(pingpong.getResult(
        tour7)).toEqual(result7);
});