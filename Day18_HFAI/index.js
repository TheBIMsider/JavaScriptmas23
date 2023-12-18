    /** JavaScriptmas 2023 Day 18 - HuggingFace
    * 🎄 Challenge:
    * 1. Use AI to generate alt text for the
    *    image provided by generateImage().
    * 2. Pass the alt text to renderImage() 
    *    as a parameter. 
    *
    * 🎁 hint.md for help!
    **/
/** HuggingFace setup **/
import { HfInference } from '@huggingface/inference'
const hf = new HfInference("HF_KEY goes here")
import { blobToBase64 } from '/utils'

const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function(e) {
    e.preventDefault()
    const imageDescription = document.getElementById('user-input').value
    dialogModal.close()
    generateImage(imageDescription)
})

async function generateImage(imageToGenerate) {
    /** HuggingFace **/
    console.log("processing")
    const response = await hf.textToImage({
        inputs: imageToGenerate,
        model: "stabilityai/stable-diffusion-2",
    })
    const imageUrl = await blobToBase64(response)
    console.log("processed")
    generateAltText(imageUrl)
}

async function generateAltText(imageUrl) {
    const imageAltText = await hf.imageToText({
        data: await (await fetch(imageUrl)).blob(),
        model: "Salesforce/blip-image-captioning-base",
    })
    renderImage(imageUrl, imageAltText.generated_text) 
}

function renderImage(imageUrl, altText) {
    console.log("Alt Text: " + altText )
    const imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML = ''
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altText
    imageContainer.appendChild(image)
}