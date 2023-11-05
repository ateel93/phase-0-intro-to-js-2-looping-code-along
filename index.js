const nameCards = ["Guadalupe", "Ollie", "Aki"];

function writeCards() {
  const thankYouMessages = [];
  for (let i = 0; i < nameCards.length; i++) {
    const message = `Thank you, ${nameCards[i]}, for the wonderful surprise gift!`;
    thankYouMessages.push(message);
  }
  return thankYouMessages;
}




