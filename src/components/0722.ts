export function runProgressAnimation(options: {
  from: number;
  to: number;
  duration: number;
  steps?: number;
  onUpdate: (progress: number) => void;
  easing?: (t: number) => number;
  onFinish?: () => void;
}) {
  const { from, to, duration, steps, easing = (t: number) => 1 - (1 - t) ** 2, onUpdate, onFinish } = options;

  let running = true;
  let timeoutId: NodeJS.Timeout | null = null; // 用于存储定时器ID
  const totalSteps = steps ?? Math.max(2, Math.floor(duration / 40));
  let currentStep = 0;

  function next() {
    if (!running) {
      if (timeoutId) clearTimeout(timeoutId);
      return;
    }
    currentStep += 1;
    const t = Math.min(1, currentStep / totalSteps);
    const easeT = easing(t);
    const value = Math.floor(from + (to - from) * easeT);
    onUpdate(value);

    if (currentStep < totalSteps) {
      timeoutId = setTimeout(next, duration / totalSteps);
    } else {
      onUpdate(to);
      onFinish?.();
      if (timeoutId) clearTimeout(timeoutId);
    }
  }

  next();

  return {
    interrupt: () => {
      running = false;
      if (timeoutId) clearTimeout(timeoutId);
    },
  };
}

const mockOnUpdate = () => {
  console.log('update');
};
const mockOnFinish = () => {
  console.log('finish');
};

const { interrupt } = runProgressAnimation({
  from: 0,
  to: 100,
  duration: 1000,
  onUpdate: mockOnUpdate,
  onFinish: mockOnFinish,
});

setTimeout(() => {
  interrupt();
}, 200);

// 等待动画执行一段时间
new Promise((resolve) => setTimeout(resolve, 1100)).then(() => {
  console.log('阻塞后');
});
