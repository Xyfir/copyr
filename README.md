A small (under 1KB) module for copying text to the clipboard.

Only uses `document.execCommand('copy')`. There are no fallbacks or other unnecessary code.

Used by [Ptorx](https://ptorx.com/) and other projects in the [Xyfir Network](https://xyfir.com/).

```js
import copy from 'copyr';

copy('Some text');
// Clipboard now has 'Some text' saved to it
```