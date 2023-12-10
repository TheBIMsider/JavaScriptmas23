// #JavaScriptmas 2023 Day 9 Challenge
/** uncomment one of these **/
// import OpenAI from "openai" 
// import { HfInference } from '@huggingface/inference'
  /**
/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal 
 *    should be hidden.
 * 2. Use the inputted text to generate an image 
 *    for the e-card using an AI model. 
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 * 
 * 🎁 hint.md for help!
 **/   

import OpenAI from "openai" 

const openai = new OpenAI({
  apiKey: "OpenAI Key Here",
  dangerouslyAllowBrowser: true
});

const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')

document.querySelector("button").addEventListener("click", (event) => {
event.preventDefault()

openai.images.generate({
    model: "dall-e-2",
    prompt: document.querySelector("#user-input").value,
    n: 1,
    quality: "standard",
    size: "256x256",
}).then((response) => {
    document.querySelector("#image-container img").src = response.data[0].url
    dialogModal.close()
})
})

/** show dialog on load **/
dialogModal.show()
