//your JS code here. If required.
let btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
  let text = document.getElementById('text').value;
  let delay = document.getElementById('delay').value;

  const delayedMessage = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(text);
      }, delay * 1000);
    });
  };

  try {
    const message = await delayedMessage();
    document.getElementById('output').innerText = message;
  } catch (error) {
    console.error(error);
  }
});
