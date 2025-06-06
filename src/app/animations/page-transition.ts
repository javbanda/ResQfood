// src/app/animations/page-transition.ts
import { createAnimation } from '@ionic/angular';

export const customPageTransition = (baseEl: HTMLElement) => {
  return createAnimation()
    .addElement(baseEl)
    .duration(500)
    .easing('ease-in-out')
    .fromTo('transform', 'translateX(100%)', 'translateX(0%)')
    .fromTo('opacity', '0', '1');
};
