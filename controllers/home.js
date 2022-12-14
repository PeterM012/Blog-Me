const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    User,
    Post,
    Comment
} = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
            attributes: [
                'id',
                'title',
                'content_box',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_blog', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['userName']
                    }
                },
                {
                    model: User,
                    attributes: ['userName']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({
                plain: true
            }));

            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'content_box',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_blog', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['userName']
                    }
                },
                {
                    model: User,
                    attributes: ['userName']
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({
                    message: "No results found"
                });
                return;
            }

            const post = dbPostData.get({
                plain: true
            });

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/users/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('newsignin');
});


router.get('*', (req, res) => {
    res.status(404).send("Unable to Proceed");
})


module.exports = router;