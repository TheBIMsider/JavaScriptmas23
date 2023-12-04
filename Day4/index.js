// #JavaScriptmas 2023 Day 1 Challenge
/** uncomment one of these **/
// import OpenAI from "openai" 
// import { HfInference } from '@huggingface/inference'
  /**
   * 🎄 Challenge:
   * 1. When clicked, the doors should open
   *    to reveal a festive joke.
   * 
   * 🎁 hint.md for help!
   **/

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: "api key goes here",
  dangerouslyAllowBrowser: true
});

const jokeDisplay = document.getElementById('joke-display')

document.getElementById('window-container').addEventListener('click', async function (e) {

    async function getXmasJoke() {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: "A dad joke about christmas" }],
            model: "gpt-3.5-turbo",
        });
        console.log(completion.choices[0])
        jokeDisplay.textContent = completion.choices[0].message.content
    }
    await getXmasJoke()
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})