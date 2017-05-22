/**
 * Copy text to clipboard using `document.execCommand()`.
 * @param {string} text
 */
module.exports = function(text) {
  const el = document.createElement('input');
  el.type = 'text', el.value = text;
  document.body.appendChild(el);
  
  el.select();
  document.execCommand('copy');
  el.remove();
};