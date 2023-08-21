const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        Nom: {
            type: String,
            required: [true, "Entrer votre Nom"]
        },
        Prenom: {
            type: String,
            required: [true, "Entrer votre Prenom"]
        },
        Email: {
            type: String,
            required: [true, "Entrer votre Email"]
        },
        MDP: {
            type: String,
            required: [true, "Entrer votre Mot de passe"]
        },
        CIN: {
            type: Number,
            required: [true, "Entrer votre Numero du carte d'identite"]
        },
        NumTel: {
            type: Number,
            required: [true, "Entrer votre Numero du Telephone"]
        },
        CodePostal: {
            type: Number,
            required: [true, "Entrer votre Code Postal"]
        },
        Ville: {
            type: String,
            required: [true, "Entrer votre Ville"]
        },
        Pays: {
            type: String,
            required: [true, "Entrer votre Pays"]
        },
        Address: {
            type: String,
            required: [true, "Entrer votre Pays"]
        },
        Type: {
            type: Number
        },
      /*   Orders:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Orders',
            required: true
          }, */
    }
)

userSchema.statics.updateUser = function (userId, updateData) {
    return this.findOneAndUpdate({ _id: userId }, updateData, { new: true });
};

const User = mongoose.model('User', userSchema);
module.exports = User;