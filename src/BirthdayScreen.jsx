import { useEffect } from 'react';
import dadImage from './assets/dadcar.jpg';


function BirthdayScreen() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, []);

  const starEmoji = '⭐';

  const stars = Array.from({ length: 15 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDuration: `${3 + Math.random() * 3}s`,
      animationDelay: `${Math.random() * 5}s`,
      fontSize: `${1.5 + Math.random() * 1.5}rem`, 
    };
    return (
      <div key={i} className="falling-star-emoji" style={style}>
        {starEmoji}
      </div>
    );
  });

  
  return (
    <div className="birthday-screen lilith-bg">
      <h1 className="birthday-title fade-in"> Happy Birthday, Dad!</h1>
      <img 
  src={dadImage} 
  alt="Dad Birthday" 
  className="birthday-image"
/>

      <p className="birthday-message fade-in delay-1">
        Wishing you a birthday as bold as the stripes, as bright as the stars, and as free as the open road. Here's to a true American original, happy birthday, Dad!
      </p>

      <div className="sign-card fade-in delay-2">
        <h2 className="lilith-title">🎉 Happy Birthday, Dad! 🎂🪵</h2>
        <p>
          You’re as American as apple pie… and as stubborn as a mule on a dirt road.
      If patriotism was a contest, you’d win first place, mainly because no one else wants to compete with your loud opinions and endless dad jokes.
        </p>
      </div>
    {stars}
    </div>
  )
}

export default BirthdayScreen;
