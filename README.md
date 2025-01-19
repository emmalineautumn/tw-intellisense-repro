# Purpose

This repository is a bare minimum reproducible example of a bug in the Tailwind
CSS VSCode extension when using Deno and a plugin from JSR.

# How to reproduce

1. Install the extension
2. Run `deno install`
3. Open src/app.ts and attempt to use the intellisense

Deno Version: 2.1.6
Tailwind CSS Version: 3.4.17
Tailwind CSS Intellisense Version: 0.12.18

# Expected behavior

The extension should provide intellisense for both base Tailwind classes and the
plugin classes.

# Actual behavior

The extension does not provide intellisense for the plugin classes.

Output from the extension:

```
Error: Can't resolve '@bearmetal/ui' in '/home/emma/local_repos/speedtest/client'
    at p (/home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:130:7155)
    at /home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:131:713
    at /home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:134:405
    at eval (eval at create (/home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:5:78), <anonymous>:15:1)
    at /home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:134:405
    at eval (eval at create (/home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:5:78), <anonymous>:27:1)
    at /home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:134:7916
    at /home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:134:405
    at eval (eval at create (/home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:5:78), <anonymous>:15:1)
    at /home/emma/.vscode/extensions/bradlc.vscode-tailwindcss-0.12.18/dist/tailwindServer.js:134:405
```
