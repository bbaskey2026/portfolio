import React, { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, .MuiButtonBase-root, .MuiChip-root, .MuiCard-root'
      );

      setIsHovered(!!isInteractive);
    };

    const animateFollower = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.2;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.2;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousemove', handleElementHover, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    requestRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <Box
        ref={followerRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: isHovered ? 40 : 28,
            height: isHovered ? 40 : 28,
            marginTop: isHovered ? '-20px' : '-14px',
            marginLeft: isHovered ? '-20px' : '-14px',
            borderRadius: '50%',
            border: isHovered
              ? '1.5px solid rgba(0, 0, 0, 0.7)'
              : '1px solid rgba(0, 0, 0, 0.25)',
            backgroundColor: isHovered
              ? 'rgba(0, 0, 0, 0.04)'
              : 'transparent',
            transform: isClicked ? 'scale(0.85)' : 'scale(1)',
            transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease, border 0.15s ease, background-color 0.15s ease, transform 0.15s ease',
          }}
        />
      </Box>

      {/* Center Dot */}
      <Box
        ref={dotRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
          willChange: 'transform',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 5,
            height: 5,
            marginTop: '-2.5px',
            marginLeft: '-2.5px',
            borderRadius: '50%',
            backgroundColor: '#000000',
            transform: isClicked ? 'scale(0.6)' : 'scale(1)',
            transition: 'transform 0.15s ease',
          }}
        />
      </Box>
    </>
  );
};

export default CustomCursor;
