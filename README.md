# reproduction for https://github.com/vitejs/vite/issues/9197

```bash
git clone git@github.com:Rich-Harris/vite-ssrloadmodule-strict-repro.git
cd vite-ssrloadmodule-strict-repro
pnpm install # or npm install
npm test
```

## Expected

`test:dev` should fail, because we're assigning to an undeclared variable, which is forbidden in strict mode (which applies to all modules implicitly). We should never get as far as the `>>> TESTING BUILD` stage.

## Actual

`test:dev` completes, because the code is not being run in strict mode.
