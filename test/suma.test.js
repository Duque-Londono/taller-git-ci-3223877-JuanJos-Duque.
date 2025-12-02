import assert from 'node:assert/strict';
import { suma } from '../src/app.js';

Deno?.version; // (ignore — evita linter en entornos que no usan node)
assert.equal(suma(2,3), 5);
assert.equal(suma(-1,1), 0);
console.log('tests ok');
