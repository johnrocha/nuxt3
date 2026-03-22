<template>
  <NuxtLayout>
    <Transition
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <NuxtPage :key="route.fullPath" />
    </Transition>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();

const prefersReducedMotion = ref(false);

let gsapInstance: typeof import("gsap").gsap | null = null;
let motionQuery: MediaQueryList | null = null;
let motionQueryHandler: ((event: MediaQueryListEvent) => void) | null = null;

const asElement = (value: Element): HTMLElement | null =>
  value instanceof HTMLElement ? value : null;

const once = (fn: () => void) => {
  let called = false;
  return () => {
    if (called) return;
    called = true;
    fn();
  };
};

const ensureGsap = async () => {
  if (gsapInstance) return gsapInstance;

  try {
    const { gsap } = await import("gsap");
    gsapInstance = gsap;
  } catch {
    gsapInstance = null;
  }

  return gsapInstance;
};

const onBeforeEnter = (element: Element) => {
  if (!import.meta.client || prefersReducedMotion.value) return;

  const target = asElement(element);
  if (!target) return;

  if (gsapInstance) {
    gsapInstance.killTweensOf(target);
    gsapInstance.set(target, {
      autoAlpha: 0,
      y: 28,
      scale: 0.992,
      transformOrigin: "50% 0%",
      willChange: "transform,opacity",
    });
    return;
  }

  target.style.opacity = "0";
  target.style.transform = "translate3d(0, 28px, 0) scale(0.992)";
  target.style.willChange = "transform,opacity";
};

const onEnter = async (element: Element, done: () => void) => {
  const finish = once(done);

  if (!import.meta.client || prefersReducedMotion.value) {
    finish();
    return;
  }

  const target = asElement(element);
  if (!target) {
    finish();
    return;
  }

  const gsap = await ensureGsap();

  if (!gsap) {
    target.style.opacity = "";
    target.style.transform = "";
    target.style.willChange = "";
    finish();
    return;
  }

  const timeoutId = window.setTimeout(finish, 1600);

  try {
    gsap.killTweensOf(target);
    gsap.to(target, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.78,
      ease: "power3.out",
      clearProps: "transform,opacity,visibility,will-change",
      onComplete: () => {
        window.clearTimeout(timeoutId);
        finish();
      },
      onInterrupt: () => {
        window.clearTimeout(timeoutId);
        finish();
      },
    });
  } catch {
    window.clearTimeout(timeoutId);
    target.style.opacity = "";
    target.style.transform = "";
    target.style.willChange = "";
    finish();
  }
};

const onLeave = async (element: Element, done: () => void) => {
  const finish = once(done);

  if (!import.meta.client || prefersReducedMotion.value) {
    finish();
    return;
  }

  const target = asElement(element);
  if (!target) {
    finish();
    return;
  }

  const gsap = await ensureGsap();

  if (!gsap) {
    finish();
    return;
  }

  const timeoutId = window.setTimeout(finish, 1200);

  try {
    gsap.killTweensOf(target);
    gsap.set(target, { willChange: "transform,opacity" });
    gsap.to(target, {
      autoAlpha: 0,
      y: -20,
      scale: 1.006,
      duration: 0.42,
      ease: "power2.inOut",
      onComplete: () => {
        window.clearTimeout(timeoutId);
        finish();
      },
      onInterrupt: () => {
        window.clearTimeout(timeoutId);
        finish();
      },
    });
  } catch {
    window.clearTimeout(timeoutId);
    finish();
  }
};

onMounted(async () => {
  await ensureGsap();

  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReducedMotion.value = motionQuery.matches;
  motionQueryHandler = (event: MediaQueryListEvent) => {
    prefersReducedMotion.value = event.matches;
  };
  motionQuery.addEventListener("change", motionQueryHandler);
});

onBeforeUnmount(() => {
  if (motionQuery && motionQueryHandler) {
    motionQuery.removeEventListener("change", motionQueryHandler);
  }
});
</script>
