const User = require('../Models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const authUser = (req, res, next) => {
    const userType = req.user.type;

    if (userType === 1) {
        res.redirect("/homepage");
    } else if (userType === 2) {
        res.redirect("/dashboard");
    } else {
        res.status(403).json({ message: "Unauthorized access" });
    }
};

const register = (req, res, next) => {
    const { Nom, Prenom, Email, MDP, CIN, NumTel, CodePostal, Ville, Pays, Address, Type } = req.body;

    // Check if the email already exists in the database
    User.findOne({ Email: Email })
        .then(existingUser => {
            if (existingUser) {
                // If the email is already in use, return an error response
                return res.status(409).json({ message: 'Email already in use' });
            }

            // If the email is not in use, hash the password and create a new user
            bcrypt.hash(MDP, 10, function (err, hashPass) {
                if (err) {
                    return res.status(500).json({ error: err });
                }

                let user = new User({
                    Nom,
                    Prenom,
                    Email,
                    MDP: hashPass,
                    CIN,
                    NumTel,
                    CodePostal,
                    Ville,
                    Pays,
                    Address,
                    Type,
                });

                user.save()
                    .then(user => {
                        res.json({
                            message: 'User added successfully!',
                        });
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: 'Error saving user',
                            error: error.message,
                        });
                    });
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error checking email',
                error: error.message,
            });
        });
};

const login = (req, res, next) => {
    var Email = req.body.Email
    var MDP = req.body.MDP

    User.findOne({ $or: [{ Email: Email }, { Email: Email }] })
        .then(user => {
            if (user) {
                bcrypt.compare(MDP, user.MDP, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ Nom: user.Nom }, 'AZQ,PI)0(', { expiresIn: '30s' })
                        let refreshtoken = jwt.sign({ Nom: user.Nom }, 'refreshtokensecret', { expiresIn: '48h' })
                        res.json({
                            message: 'login successful',
                            token,
                            refreshtoken
                        })
                    } else {
                        res.json({
                            message: 'Mot de pass doesnt match'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'no user found'
                })
            }
        })
}


const update = (req, res, next) => {
    const userId = req.params.id;
    const updateData = req.body;

    User.findOneAndUpdate({ _id: userId }, updateData, { new: true, runValidators: true })
        .then(updatedUser => {
            if (!updatedUser) {
                return res.json({
                    message: 'User not found',
                });
            }

            res.json({
                message: 'User updated successfully',
                user: updatedUser,
            });
        })
        .catch(error => {
            if (error.name === 'ValidationError') {
                res.status(422).json({
                    error: 'Validation error',
                    details: error.errors,
                });
            } else {
                res.status(500).json({
                    error: 'Error updating user',
                });
            }
        });
};

const deleteUser = (req, res, next) => {
    const userId = req.params.id;

    User.findByIdAndDelete(userId)
        .then(deletedUser => {
            if (!deletedUser) {
                return res.json({
                    message: 'User not found',
                });
            }

            res.json({
                message: 'User deleted successfully',
                user: deletedUser,
            });
        })
        .catch(error => {
            res.status(500).json({
                error: 'Error deleting user',
            });
        });
};

const getAllUsers = (req, res, next) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            res.status(500).json({
                error: 'Error fetching users',
            });
        });
};


module.exports = {
    register, login, update, deleteUser, getAllUsers,
}