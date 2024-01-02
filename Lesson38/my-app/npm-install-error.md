Error message after running `npm install`:
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: react-scripts@5.0.1
npm ERR! Found: typescript@5.3.3
npm ERR! node_modules/typescript
npm ERR!   typescript@"^5.3.3" from the root project
npm ERR!   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm ERR!   node_modules/fork-ts-checker-webpack-plugin
npm ERR!     fork-ts-checker-webpack-plugin@"^6.5.0" from react-dev-utils@12.0.1
npm ERR!     node_modules/react-dev-utils
npm ERR!       react-dev-utils@"^12.0.1" from react-scripts@5.0.1
npm ERR!       node_modules/react-scripts
npm ERR!         react-scripts@"5.0.1" from the root project
npm ERR!   1 more (tsutils)
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm ERR! node_modules/react-scripts
npm ERR!   react-scripts@"5.0.1" from the root project
npm ERR! 
npm ERR! Conflicting peer dependency: typescript@4.9.5
npm ERR! node_modules/typescript
npm ERR!   peerOptional typescript@"^3.2.1 || ^4" from react-scripts@5.0.1
npm ERR!   node_modules/react-scripts
npm ERR!     react-scripts@"5.0.1" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! 
npm ERR! For a full report see:
npm ERR! /Users/annasvst/.npm/_logs/2024-01-02T14_34_40_649Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/annasvst/.npm/_logs/2024-01-02T14_34_40_649Z-debug-0.log
```

## What does it mean?

The error is related to a dependency conflict between the version of typescript that installed (5.3.3) and the version expected by react-scripts@5.0.1. React-scripts is expecting a version of typescript in the range of ^3.2.1 || ^4, but the project is using a newer, incompatible version.

## Solution

Downgrade mentioned dependency. In this case, run `npm install typescript@4.x --save-dev`.


