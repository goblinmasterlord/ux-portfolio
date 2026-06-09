// Addresses are split so they never appear as a complete string
// in the JS bundle or rendered HTML href — defeats naive email harvesters.
const PERSONAL = ['marci.mocsonoky', 'gmail.com'];
const HELLO = ['hello', 'uxwithmarci.com'];

export const personalEmail = () => `${PERSONAL[0]}@${PERSONAL[1]}`;
export const helloEmail = () => `${HELLO[0]}@${HELLO[1]}`;

export const openMailto = (address) => (e) => {
  if (e) e.preventDefault();
  window.location.href = `mailto:${address}`;
};
