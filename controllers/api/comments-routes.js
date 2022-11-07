const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../models');

router.get("/", (req,res) => {
    Comments.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });        
});

router.post('/', (req,res) => {
    if(req.session) {
        Comments.create({
            comment_blog: req.body.comment_blog,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

module.exports = router;