function recursiva(max) {
  console.dir(max);
  if (max >= 1000) return;
  max++;
  recursiva(max);
}

recursiva(0);
