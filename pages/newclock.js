import { useEffect, useState } from 'react'

export default function Newclock(props) {

  // For Other Count Down
  const [remainDay, setRemainDays] = useState(0);
  const [remainHour, setRemainHours] = useState(0);
  const [remainMinute, setRemainMinutes] = useState(0);
  const [remainSecond, setRemainSeconds] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      const now = new Date();
      const target = new Date(props.newDate);
      const diff = target.getTime() - now.getTime()

      // Begin Count Down
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      setRemainDays(d);

      const h = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setRemainHours(h.toLocaleString(h, { minimumIntegerDigits: 2 }));

      const m = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      setRemainMinutes(m.toLocaleString(m, { minimumIntegerDigits: 2 }));

      const s = Math.floor(
        (diff % (1000 * 60)) / 1000
      );
      setRemainSeconds(s.toLocaleString(s, { minimumIntegerDigits: 2 }));
    }, 1000)
    return () => clearInterval(Interval)
  }, [props]);

    return (
        <>
        {/* List Begin */}
        {remainDay <= 0 && remainHour <= 0 && remainMinute <= 0 && remainSecond <= 0 ? <h4 className='box boxComplete'>{props.title}</h4> :
            <div className={remainDay < 1 ? 'box boxOneDay' : 'box boxBegin'}>
            <center>
                <h4>{props.title}</h4>
                <span><span className="fontRed">Target: </span>{props.newDate}</span><br />
                <span><span className="fontRed">Left: </span>{remainDay} {remainDay > 1 ? "days" : "day"} ({remainHour}:{remainMinute}:{remainSecond})</span>
            </center>
            </div>}
        {/* List End */}
        </>
    )
}