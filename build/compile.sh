#!/bin/bash

java -jar compiler.jar \
--js_output_file=../impact-storage.min.js \
--compilation_level=SIMPLE_OPTIMIZATIONS \
--js=../impact-storage.js
