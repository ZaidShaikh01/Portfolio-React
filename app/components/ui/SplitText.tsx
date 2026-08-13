import React, { useEffect, useRef, useState } from 'react';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Wait for fonts before splitting the text
  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!ref.current || !text || !fontsLoaded) return;

    if (animationCompletedRef.current) return;

    let cleanup: (() => void) | undefined;

    const init = async () => {
      // IMPORTANT:
      // GSAP is loaded only in the browser.
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const { SplitText: GSAPSplitText } = await import('gsap/SplitText');

      gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

      const el = ref.current;

      if (!el) return;

      const startPct = (1 - threshold) * 100;

      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);

      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;

      const marginUnit = marginMatch?.[2] || 'px';

      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;

      const start = `top ${startPct}%${sign}`;

      let targets: Element[] = [];

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,

        onSplit: (self: any) => {
          if (splitType.includes('chars') && self.chars?.length) {
            targets = self.chars;
          } else if (splitType.includes('words') && self.words?.length) {
            targets = self.words;
          } else if (splitType.includes('lines') && self.lines?.length) {
            targets = self.lines;
          }

          if (!targets.length) {
            targets = self.chars || self.words || self.lines || [];
          }

          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,

              stagger: delay / 1000,

              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4,
              },

              onComplete: () => {
                animationCompletedRef.current = true;

                onLetterAnimationComplete?.();
              },

              willChange: 'transform, opacity',

              force3D: true,
            },
          );
        },
      });

      cleanup = () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === el) {
            trigger.kill();
          }
        });

        try {
          splitInstance.revert();
        } catch (_) {}
      };
    };

    init();

    return () => {
      cleanup?.();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    JSON.stringify(from),
    JSON.stringify(to),
    threshold,
    rootMargin,
    fontsLoaded,
    onLetterAnimationComplete,
  ]);

  const Tag = tag as React.ElementType;

  return (
    <Tag
      ref={ref}
      style={{
        textAlign,
        wordWrap: 'break-word',
        willChange: 'transform, opacity',
      }}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
