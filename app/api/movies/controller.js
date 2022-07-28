const axios = require('axios');

module.exports = {
    getMovie: async (req, res, next) => {
        const {tittle} = req.params;
        const options = {
            method: 'GET',
            url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
            params: {q: tittle},
            headers: {
                'X-RapidAPI-Key': '54cbdd15a6msh6376e4db31b3bc4p193363jsn79c029e590f8',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            const list = response.data.d;
            const arr = [];
            for (let i = 0; i < list.length; ++i) {
                const id = list[i].id;
                const title = list[i].l;
                arr.push({id,title});
            }
            res.status(200).json({
                message : 'SUKSES',
                data : arr                
            })
        }).catch(function (error) {
            next(error);
        });
    },

    getDetail: async (req, res, next) => {
        const {movieId} = req.params;
        const options = {
            ethod: 'GET',
            url: 'https://online-movie-database.p.rapidapi.com/title/get-details',
            params: {tconst: movieId},
            headers: {
                'X-RapidAPI-Key': '54cbdd15a6msh6376e4db31b3bc4p193363jsn79c029e590f8',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            res.status(200).json({
                message : 'SUKSES',
                data : response.data
            })
        }).catch(function (error) {
            next(error);
        });
    },
}