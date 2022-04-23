const { User } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {
    // get a single user by either their id or their username
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(foundUser);
    },
    
    // add a user, sign a token and send it back to client/src/components/SignUpForm.js
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Oops! Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    // user login, token generation and send it to (to client/src/components/LoginForm.js)
    // destructure {body}
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "This user is not found" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Incorrect password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    // saving a book to aparticular user's `saved books` field, prevent duplicate entries
    // user comes from 'req.user' created in auth middleware 

    async saveBook({ user, body }, res) {
        console.log(user);
        
        try{
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedUser);

        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }

    },

    // delete a book from `savedbook` collection

    async deleteBook({ user, params }, res) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedBooks: { bookId: params.bookId } } },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "No user found with this id!" });
        }
        return res.json(updatedUser);
    },



};