"use strict";

const firstDateQuestion = "What's your perfect first date?";

function answer(question) {
  return console.log(
    question
      .split("")
      .map(parseInt)
      .filter((a) => a)
      .reduce((a, b) => a + b)
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}

answer(firstDateQuestion);
