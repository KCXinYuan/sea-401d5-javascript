const gulp = require('gulp');
const eslint = require('gulp-eslint');

<<<<<<< HEAD
gulp.task('first_task',()=>{
  console.log('TASK');
});

gulp.task('default',['first_task','lint'], ()=> {
  console.log('Second task');
});

gulp.task('lint', ()=>{
  gulp.src('./greet.js')
    .pipe(eslint())
    .pipe(eslint.format());
=======

gulp.task('first_task', () => {
  console.log('TASK');
})

gulp.task('default', ['first_task', 'lint'], () => {
  console.log('SECOND TASK');
});

gulp.task('lint', () => {
  gulp.src('./greet.js')
    .pipe(eslint())
    .pipe(eslint.format())
>>>>>>> bd1799136caf7c3b9b1759eb140573d44a140105
});
