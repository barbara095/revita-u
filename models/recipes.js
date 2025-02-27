const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            unique: true,
        },
        source: {
            type: String,
            trim: true,
            unique: true,
        },
        url: {
            type: String,
            trim: true,
        },
        image: {
            type: String,
            trim: true,
        },
        food: [
            {
                type: Schema.Types.ObjectId,
                ref: "Food"
            }
        ],
        nutrition: [
            {
                calories: {
                    type: Number,
                    trim: true,
                } 
            },
            {
                carbs: {
                    type: Number,
                    trim: true,
                } 
            },
            {
                protein: {
                    type: Number,
                    trim: true,
                } 
            },
            {
                sugar: {
                    type: Number,
                    trim: true,
                } 
            },
            {
                fat: {
                    type: Number,
                    trim: true,
                } 
            },
            {
                sodium: {
                    type: Number,
                    trim: true,
                } 
            }
         ],
        date: {
            type: Date,
            default: Date.now
        }
    }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;