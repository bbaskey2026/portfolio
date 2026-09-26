import React, { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position references for smooth interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const glowRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    // Disable on touch / mobile devices
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

      // Instantly position the center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Update background ambient glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Check if target is interactive (button, link, input, chip, card, etc.)
    const handleElementHover = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, .MuiButtonBase-root, .MuiChip-root, .MuiCard-root, [data-cursor-hover]'
      );

      setIsHovered(!!isInteractive);
    };

    // Smooth lerp animation loop for outer follower ring
    const animateFollower = () => {
      // Linear interpolation (lerp factor: 0.18 for responsive yet silky glide)
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.18;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.18;

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
      {/* Ambient Spotlight Glow following the cursor */}
      <Box
        ref={glowRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 500,
          height: 500,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: isVisible ? 0.045 : 0,
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 70%)',
          transition: 'opacity 0.4s ease',
          willChange: 'transform',
        }}
      />

      {/* Smooth Trailing Follower Ring */}
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
            width: isHovered ? 48 : 34,
            height: isHovered ? 48 : 34,
            marginTop: isHovered ? '-24px' : '-17px',
            marginLeft: isHovered ? '-24px' : '-17px',
            borderRadius: '50%',
            border: isHovered
              ? '1.5px solid rgba(255, 255, 255, 0.8)'
              : '1px solid rgba(255, 255, 255, 0.35)',
            backgroundColor: isHovered
              ? 'rgba(255, 255, 255, 0.08)'
              : 'rgba(255, 255, 255, 0.02)',
            backdropFilter: isHovered ? 'blur(2px)' : 'none',
            transform: isClicked ? 'scale(0.8)' : 'scale(1)',
            transition: 'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), margin 0.22s cubic-bezier(0.16, 1, 0.3, 1), border 0.2s ease, background-color 0.2s ease, transform 0.15s ease',
            boxShadow: isHovered
              ? '0 0 20px rgba(255, 255, 255, 0.15), inset 0 0 10px rgba(255, 255, 255, 0.05)'
              : 'none',
          }}
        />
      </Box>

      {/* Crisp Precise Center Dot */}
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
            width: isHovered ? 6 : 7,
            height: isHovered ? 6 : 7,
            marginTop: isHovered ? '-3px' : '-3.5px',
            marginLeft: isHovered ? '-3px' : '-3.5px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            transform: isClicked ? 'scale(0.7)' : 'scale(1)',
            transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease, transform 0.15s ease, background-color 0.2s ease',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
          }}
        />
      </Box>
    </>
  );
};

export default CustomCursor;
