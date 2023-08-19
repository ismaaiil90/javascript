const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

function result() {
  let newStory = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory
    .replace(/:insertx:/g, xItem)
    .replace(/:inserty:/g, yItem)
    .replace(/:insertz:/g, zItem)
    .replace(/Bob/g, customName.value || 'Bob');

  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.071429); // converting pounds to stone (1 pound = 0.071429 stone)
    const temperature = Math.round((94 - 32) * (5 / 9)); // converting Fahrenheit to Celsius

    newStory = newStory
      .replace('94 fahrenheit', `${temperature} centigrade`)
      .replace('300 pounds', `${weight} stone`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}