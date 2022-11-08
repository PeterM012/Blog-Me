const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../models');


//Get all Comments 
router.get("/", (req,res) => {
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });        
});

//Create a new Comment 
router.post('/', (req,res) => {
    if(req.session) {
        Comment.create({
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