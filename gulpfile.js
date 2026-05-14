import gulp from "gulp";
import shell from "gulp-shell";

gulp.task(
  "default",
  shell.task(["npx parcel index.html"])
);