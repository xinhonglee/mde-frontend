import anime from "animejs";

const duration = 1000;
const txDuration = duration;
const txVaule = 40;
const tyDuration = duration;
const tyVaule = 40;

export const preLoading = (element) => {
  const circle = anime ({
    targets: ['.loader'],
    rotate: 180,
    duration: duration,
    loop: true,
    elasticity: 600,
    easing: 'easeOutElastic',
    delay: function(el, index) {
      return index * 80;
    },
  });
}

export const paintCommon = (element) => {

  let initTimeline = anime.timeline();

  initTimeline
    .add({
      targets: 'header .app-header_contact',
      opacity: 1,
      easing: 'easeOutElastic',
      translateY: [
        { value: tyVaule, duration: tyDuration }
      ],
      duration: duration,
      loop: false
    }, '-=1400')
    .add({
      targets: 'header .app-header_navigation',
      opacity: 1,
      easing: 'easeOutElastic',
      translateY: [
        { value: tyVaule, duration: tyDuration }
      ],
      duration: duration,
      loop: false
    }, '-=1400')
    .add({
      targets: 'header .navbar-brand',
      opacity: 1,
      easing: 'easeOutElastic',
      rotateY: -720,
      translateY: [
        { value: tyVaule, duration: 1800 }
      ],
      duration: 1800,
      loop: true
    })
    .add({
      targets: '.app-body',
      opacity: 1,
      easing: 'easeOutElastic',
      translateY: [
        { value: tyVaule, duration: tyDuration }
      ],
      duration: duration,
      loop: false
    }, '-=1700')
    // .add({
    //   targets: '.headline h1',
    //   opacity: 1,
    //   easing: 'easeOutElastic',
    //   translateX: [
    //     { value: txVaule, duration: txDuration }
    //   ],
    //   duration: duration,
    //   loop: false
    // }, '-=1500')
    .add({
      targets: 'footer .app-footer',
      opacity: 1,
      easing: 'easeOutElastic',
      translateY: [
        { value: tyVaule, duration: tyDuration }
      ],
      duration: duration,
      loop: false
    }, '-=1400');
}


