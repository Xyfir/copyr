Copy text to the clipboard.

A simple module that lets you copy text to the clipboard. copyr uses `document.execCommand('copy')` and there are no fallbacks or unnecessary code.

# Usage

```js
import copy from 'copyr';

copy('Some text'); // Clipboard now has 'Some text' saved to it
```