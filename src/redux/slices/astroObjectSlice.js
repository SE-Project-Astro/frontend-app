import {createSlice} from "@reduxjs/toolkit";

import sun_card from "assets/img/sun_card.jpg";
import mars_card from "assets/img/mars_card.jpg";
import earth_card from "assets/img/earth_card.jpg";
import venus_card from "assets/img/venus_card.jpg";
import mercury_card from "assets/img/mercury_card.jpg";

const initialState = [
    {id: "1", image: sun_card, cardTitle: "The Sun", cardText: "", lastUpdatedText: ""},
    {id: "2", image: mercury_card, cardTitle: "The Mercury", cardText: "", lastUpdatedText: ""},
    {id: "3", image: venus_card, cardTitle: "The Venus", cardText: "", lastUpdatedText: ""},
    {id: "4", image: earth_card, cardTitle: "The Earth", cardText: "", lastUpdatedText: ""},
    {id: "5", image: mars_card, cardTitle: "The Mars", cardText: "", lastUpdatedText: ""},
];

const astroObjectSlice = createSlice({
   name: 'astroObject',
   initialState,
   reducers: {}
});

export default astroObjectSlice.reducer;