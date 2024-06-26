var toml = require("toml");
var yaml = require("js-yaml");
var S = require("string");

var CONTENT_PATH_PREFIX = "../content";

module.exports = function(grunt) {

    grunt.registerTask("lunr-index", function() {

        console.log("Build pages index");

        var indexPages = function() {
            var pagesIndex = [];
            let totalCount = 0;
            grunt.file.recurse(CONTENT_PATH_PREFIX, function(abspath, rootdir, subdir, filename) {
                let resp = processFile(abspath, filename)
                if (resp) {
                    pagesIndex.push(resp);
                    totalCount++;
                }
            });
            console.log("Total Pages: ", totalCount)

            return pagesIndex;
        };

        var processFile = function(abspath, filename) {
            var pageIndex;

            if (S(filename).endsWith(".html")) {
                pageIndex = processHTMLFile(abspath, filename);
            } else {
                pageIndex = processMDFile(abspath, filename);
            }

            return pageIndex;
        };

        var processHTMLFile = function(abspath, filename) {
            var content = grunt.file.read(abspath);
            var pageName = S(filename).chompRight(".html").s;
            var href = S(abspath)
                .chompLeft(CONTENT_PATH_PREFIX).s;
            return {
                title: pageName,
                href: href,
                content: S(content).trim().stripTags().stripPunctuation().s
            };
        };

        var processMDFile = function(abspath, filename) {
            if (!S(filename).endsWith(".md")) {
                return;
            }
            //console.log("Parse file:", abspath);
                
            var content = grunt.file.read(abspath);
            var pageIndex;
            // First separate the Front Matter from the content and parse it
            content = content.split("---");
            if (content.length < 3) {
                console.log("No FrontMatter found in file:", abspath)
                return;
            }
            let chunk = content[1].trim();
            //console.log("Chunk:", chunk)
           
            var frontMatter;
            try {
                frontMatter = yaml.load(chunk);
            } catch (e) {                 
                console.log("Failed:", e.message);
            }

            //console.log("FrontMatter:", frontMatter)

            var href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(".md").s;
            // href for index.md files stops at the folder name
            if (filename === "index.md") {
                href = S(abspath).chompLeft(CONTENT_PATH_PREFIX).chompRight(filename).s;
            }

            // if href contains _index.en strip it out
            if (href.includes("_index.en")) {
                href = href.replace("_index.en", "")
            }

            // Build Lunr index for this page
            pageIndex = {
                title: frontMatter.title,
                tags: frontMatter.tags,
                href: href,
                content: S(content[2]).trim().stripTags().stripPunctuation().s
            };
            //console.log("index:", pageIndex)

            return pageIndex;
        };

        grunt.file.write("../assets/lunr/lunr.json", JSON.stringify(indexPages()));
        grunt.log.ok("Index built");
    });
};