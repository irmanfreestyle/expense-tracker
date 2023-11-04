import morningBg from '@assets/images/greetings/morning.jpg';
import afternoonBg from '@assets/images/greetings/afternoon.png';
import eveningBg from '@assets/images/greetings/evening.jpg';
import nightBg from '@assets/images/greetings/night.jpg';
import moment from 'moment';

export default function GreetingHeader() {

  function greetByTime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return {
        image: morningBg,
        label: 'Good Morning',
        date: ''
      };
    } else if (currentHour >= 12 && currentHour < 18) {
      return {
        image: afternoonBg,
        label: 'Good Afternoon',
      };
    } else if (currentHour >= 18 && currentHour < 22) {
      return {
        image: eveningBg,
        label: 'Good Evening',
      };
    } else {
      return {
        image: nightBg,
        label: 'Good Night',
      };
    }
  }

  return (
    <div
      className="p-5 sm:p-10 h-[150px] flex justify-end text-white flex-col sticky top-0"
      style={{
        backgroundImage: `url(${greetByTime().image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
      }}
    >
      <h2
        className="text-2xl mt-0 font-bold"
        style={{ textShadow: '1px 1px 5px black' }}
      >
        { greetByTime().label }, Irman
      </h2>
      <span
        style={{ textShadow: '1px 1px 5px black' }}
        className="sm:text-lg"
      >
        { moment().format('dddd, D MMMM YYYY') }
      </span>
    </div>
  )
}