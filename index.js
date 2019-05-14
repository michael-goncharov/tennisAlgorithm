let sortModule = (function () {
        let setPoints;
        let _finalResult = [];
        let points = [];
        let idBox = new Set();
        // Find players list
        let _getPlayersList = function (response) {
            let players = new Set();
            response.forEach((game) => {
                players.add(game.player_1.user1_id);
                players.add(game.player_2.user2_id);
            });
            return players;
        };
        // Sort by games function
        let _sortByGames = function (data, parameters, checkSum) {

            let innerScore = {};
            let checkSum2 = 0;
            let filteredData = data.filter((element) => {
                let firstId = element.player_1.user1_id;
                let secondId = element.player_2.user2_id;
                return parameters.has(firstId) && parameters.has(secondId);
            });
            console.log(filteredData, 'filtered data');
            filteredData.forEach((game) => {
                let firstId = game.player_1.user1_id;
                let secondId = game.player_2.user2_id;
                let winnerId = game.winner.winner_id;

                if (!innerScore[firstId]) {
                    innerScore[firstId] = 0;
                }
                if (!innerScore[secondId]) {
                    innerScore[secondId] = 0;
                }
                if (firstId === winnerId) {
                    innerScore[firstId] += 2;
                    innerScore[secondId] += 1;
                } else {
                    innerScore[firstId] += 1;
                    innerScore[secondId] += 2;
                }
                console.log(firstId, secondId, innerScore[firstId], innerScore[secondId], innerScore);
            });

            let tempResult = Object.entries(innerScore).sort((a, b) => b[1] - a[1]);
            console.log(tempResult, 'tempResult');
            if (!points.length) {
                points = tempResult
            }
            for (let i = 0; i < tempResult.length; i++) {
                let masterElement = tempResult[i][1];
                let tempArr = tempResult.filter((element) => !(element[1] - masterElement));
                if (tempArr.length === 1) {
                    _finalResult.push(tempArr[0]);
                    checkSum = 0;
                } else {
                    checkSum++;
                    let par = new Set();
                    for (let j = 0; j < tempArr.length; j++) {
                        par.add(parseInt(tempArr[j][0]))
                    }
                    i += tempArr.length - 1;
                    if (checkSum === 1) {
                        _sortByGames(data, par)
                    } else {
                        _sortBySets(data, par, checkSum2);
                        checkSum = 0;
                    }
                }
            }
            if (_finalResult.length < 4) {
                return []
            } else {
                return _finalResult.map((element, index) => {
                    return {
                        'place': index + 1,
                        'player_id': element[0],
                        'points': points[index][1]
                    }
                });
            }
        };
        // Sort by sets function
        let _sortBySets = function (data, parameters, checkSum2) {
            let innerSetScore = {};
            data.forEach((element) => {
                let firstId = element.player_1.user1_id;
                let secondId = element.player_2.user2_id;
                if (parameters.has(firstId) && parameters.has(secondId)) {
                    let firstResult = parseInt(element.score[0].charAt(0));
                    let secondResult = parseInt(element.score[0].charAt(2));
                    idBox.add(element.id);
                    if (!innerSetScore[firstId]) {
                        innerSetScore[firstId] = 0;
                        innerSetScore[firstId] += firstResult;
                    } else innerSetScore[firstId] += firstResult;
                    if (!innerSetScore[secondId]) {
                        innerSetScore[secondId] = 0;
                        innerSetScore[secondId] += secondResult;
                    } else innerSetScore[secondId] += secondResult;
                }
            });
            let tempSetResult = Object.entries(innerSetScore).sort((a, b) => b[1] - a[1]);
            // console.log(tempSetResult, 'tempSetREsult');

            for (let i = 0; i < tempSetResult.length; i++) {
                let masterElement = tempSetResult[i][1];
                let tempSetArr = tempSetResult.filter((element) => !(element[1] - masterElement));

                if (tempSetArr.length === 1) {
                    _finalResult.push(tempSetArr[0]);
                    checkSum2 = 0;
                } else {
                    checkSum2++;
                    let par2 = new Set();
                    for (let j = 0; j < tempSetArr.length; j++) {
                        par2.add(parseInt(tempSetArr[j][0]))
                    }
                    i += tempSetArr.length - 1;
                    if (checkSum2 === 1) {
                        _sortBySets(data, par2)
                    } else {
                        if (setPoints) {
                            _sortByPoints(data, par2, setPoints);
                            checkSum2 = 0;
                        } else {
                        }
                    }

                }
            }
        };
        // Sort by points function
        let _sortByPoints = function (data, parameters, setPoints) {
            let innerSetScore = {};
            let index = 0;
            data.forEach((element) => {
                let firstId = element.player_1.user1_id;
                let secondId = element.player_2.user2_id;
                if (parameters.has(firstId) && parameters.has(secondId)) {
                    let firstResult = setPoints[index].reduce((acc, element) => {
                            acc += element.player1_score;
                            return acc
                        }
                        , 0);
                    let secondResult = setPoints[index].reduce((acc, element) => {
                            acc += element.player2_score;
                            return acc
                        }
                        , 0);
                    if (!innerSetScore[firstId]) {
                        innerSetScore[firstId] = 0;
                        innerSetScore[firstId] += firstResult;
                    } else innerSetScore[firstId] += firstResult;
                    if (!innerSetScore[secondId]) {
                        innerSetScore[secondId] = 0;
                        innerSetScore[secondId] += secondResult;
                    } else innerSetScore[secondId] += secondResult;
                    index++
                }
            });
            let tempSetResult = Object.entries(innerSetScore).sort((a, b) => b[1] - a[1]);

            for (let i = 0; i < tempSetResult.length; i++) {
                let masterElement = tempSetResult[i][1];
                let tempSetArr = tempSetResult.filter((element) => !(element[1] - masterElement));

                if (tempSetArr.length === 1) {
                    _finalResult.push(tempSetArr[0]);
                } else {
                    let par2 = new Set();
                    for (let j = 0; j < tempSetArr.length; j++) {
                        par2.add(parseInt(tempSetArr[j][0]))
                    }
                    i += tempSetArr.length - 1;
                    _sortBySets(data, par2)
                }
            }
        };
        // Main function
        let getResult = function (tournament, scores = 0) {
            console.log(scores);
            _finalResult = [];
            points = [];
            // let idBox = new Set();
            setPoints = scores;
            let checkSum = 0;
            let players = _getPlayersList(tournament);
            let sortedArray = _sortByGames(tournament, players, checkSum);
            if (sortedArray.length) {
                if (process.env.NODE_ENV !== "production") {
                    console.log({errorCode: 0, result: sortedArray}, "final result");
                }
                return {errorCode: 0, result: sortedArray}
            } else {
                if (process.env.NODE_ENV !== "production") {
                    console.log(
                        {errorCode: 1, gamesId: idBox},
                        "partial result"
                    );
                    return {errorCode: 1, gamesId: idBox}
                }
            }
        };
            return {
                getResult: getResult
            }
        }

)();

module.exports = sortModule;