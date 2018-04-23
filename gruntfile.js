module.exports = function (grunt) {
    // -----------load all grunt tasks matching the ["grunt-*"] pattern-----------
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pug: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [{
                    cwd: "src/template",
                    src: ["**/*.pug", "!**/_*.pug", "!layouts/**/*.pug"],
                    dest: "./dist",
                    expand: true,
                    ext: ".html"
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    sourcemap: "none"
                },
                files: [{
                    "dist/assets/css/style.css": "src/css/style.scss"
                }]
            }
        },

        uglify: {
            dist: {
                options: {
                    compress: {
                        // drop_console: true
                    }
                },
                files: [{
                    "dist/assets/js/main.min.js": ["src/js/*.js"]
                }]
            }
        },

        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: "src/img/",
                    src: ["**/*.{png,jpg,gif,svg,jpeg}"],
                    dest: "dist/assets/img/"
                }]
            }
        },

        watch: {
            html: {
                files: ["src/**/*.pug"],
                tasks: ["pug"]
            },
            uglify: {
                files: ["src/**/*.js"],
                tasks: ["uglify"]
            },
            css: {
                files: ["src/**/*.scss"],
                tasks: ["sass"]
            },
            image: {
                files: ["src/img/**/*.{png,jpg,gif,svg,jpeg}"],
                tasks: ["image"]
            }
        }
    });

    grunt.registerTask("img", ["image"]);
    grunt.registerTask("build", ["sass", "uglify", "pug"]);
    grunt.registerTask("default", ["build", "watch"]);

};