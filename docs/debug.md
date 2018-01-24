# Debugging sandbox

Sometimes we run into really weird problems and they might reoccur. Here are
some quick bugs with solutions:

1. When building, you get error: `Module build failed: TypeError: Cannot read property 'loose' of undefined`
    - Delete your the offending packages's: `node_modules`, `package-lock.json` file,
        and then rereun `npm install`
    - Go back to sandbox, remove `node_modules`, `package-lock.json` file and
        rereun `npm install`