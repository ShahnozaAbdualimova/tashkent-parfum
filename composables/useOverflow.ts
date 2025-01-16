export const useOverflow = () => {
  const isMacOS = navigator.userAgent.includes('Mac OS');
  
  const showOverflow = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  const hideOverflow = () => {
    document.body.style.overflow = 'hidden';

    if (!isMacOS) {
      document.body.style.paddingRight = '12px';
    }
  };

  return {
    showOverflow,
    hideOverflow,
  };
};
