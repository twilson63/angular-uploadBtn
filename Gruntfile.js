module.exports = function(grunt) {
  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json','bower.json'],
        pushTo: 'origin'
      }
    }
  });
  grunt.loadNpmTasks('grunt-bump');
  grunt.registerTask('default', []);
}