import {gsap} from 'gsap';

console.log('floatingCan');

console.clear();


const randomX = random(1, 10);
const randomY = random(1, 10);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

function rotate(target, direction) {
  
  gsap.to(target, {
    rotation: randomAngle(direction),
    duration: randomTime2(),
    // delay: randomDelay(),
    ease: "sine.inout",
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  gsap.to(target, {
    x: randomX(direction),
    duration: randomTime(),
    ease: "sine.inout",
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  gsap.to(target, {
    y: randomY(direction),
    duration: randomTime(),
    ease: "sine.inout",
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

export {rotate, moveX, moveY, random, randomX, randomY, randomAngle, randomTime, randomTime2};