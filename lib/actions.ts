export const playNotificationSound = () => {
  const audio = new Audio('/not.mp3');
  console.log('play')
  if (audio) {
    audio!.play().catch((error) => {
      console.error('Failed to play sound:', error);
    });
  }
};
