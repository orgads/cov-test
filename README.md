# Anonymous initializer coverage demonstration

This repo demonstrates https://github.com/vitest-dev/vitest/issues/7805.

To reproduce:
```sh
npm install
npm run jest
grep 'method ' coverage/cobertura-coverage.xml
# Empty
npm run vitest
grep 'method ' coverage/cobertura-coverage.xml
#            <method name="&lt;instance_members_initializer&gt;" hits="1" signature="()V">
#            <method name="&lt;instance_members_initializer&gt;" hits="1" signature="()V">
```
