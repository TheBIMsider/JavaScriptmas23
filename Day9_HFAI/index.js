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

import { HfInference } from '@huggingface/inference'
const inference = new HfInference("HF_KEY goes here")
const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')

dialogModal.show()
imageContainer.addEventListener('click',()=>{
dialogModal.show()
})

document.getElementById('submitButton').addEventListener('click', async () => {
    let inputValue = document.getElementById('user-input')
    const imageContainer = document.getElementById('hfImage')
    if (inputValue.value) {
        try {
            console.log("processing")
            let responseImage = await inference.textToImage({
                model: "stabilityai/stable-diffusion-2",
                inputs: inputValue.value,
                parameters: {
                    negative_prompt: "blurry",
                },
            });
             console.log("processed")
            imageContainer.src =window.URL.createObjectURL(responseImage);
            dialogModal.close()
        } catch (error) {
            return console.log(error)
        }

    } else {
        return console.log('Please Enter about image')
    }
})