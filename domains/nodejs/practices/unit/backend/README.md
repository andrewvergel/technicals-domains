# Backend unit examples

## Requirements of dependencies

```bash
yarn install
```

## Run all tests

```bash
yarn test
```

Expected Result:

```bash
$ jest --detectOpenHandles --runInBand --passWithNoTests
 PASS  src/express/errorHandler.test.ts
 PASS  src/express/logger.test.ts
 PASS  src/express/routes.test.ts

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.58 s, estimated 4 s
Ran all test suites.
✨  Done in 2.46s.
```

## Run specific test

```
yarn jest -- {FULLPATH}
```