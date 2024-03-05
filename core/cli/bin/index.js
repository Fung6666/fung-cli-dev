#!/usr/bin/env node
const importLocal = require("import-local");

if (importLocal(__filename)) {
    require("npmlog").info("ci", "走了本地的包");
} else {
    require("../lib/index.js")(process.argv.slice(2));
}
