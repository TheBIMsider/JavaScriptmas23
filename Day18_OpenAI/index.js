    /** JavaScriptmas 2023 Day 18 - OpenAI
    * 🎄 Challenge:
    * 1. Use AI to generate alt text for the
    *    image provided by generateImage().
    * 2. Pass the alt text to renderImage() 
    *    as a parameter. 
    *
    * 🎁 hint.md for help!
    **/
/** OpenAI setup **/
 import OpenAI from "openai" 
 const openai = new OpenAI({
    apiKey: "OpenAI Key Here",
    dangerouslyAllowBrowser: true
})

const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log("processing")
    const imageDescription = document.getElementById('user-input').value
    dialogModal.close()
    generateImage(imageDescription)
})

async function generateImage(imageToGenerate) {
    const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: imageToGenerate,
        size: "256x256"
    })
    generateAltText(response.data[0].url)
    console.log("processed")
}

async function generateAltText(imageUrl) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4-vision-preview",
            messages: [{
                role: "user",
                content: [{
                    type: "text",
                    text: "Please provide a detailed and descriptive alt text for this image:"
                }, {
                    type: "image_url",
                    image_url: { "url": imageUrl }
                }],
            }],
        });

        const altText = response.choices?.[0]?.message?.content || "No description available";
        renderImage(imageUrl, altText);

    } catch (error) {
        console.error("Error in generateAltText:", error);
    }
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