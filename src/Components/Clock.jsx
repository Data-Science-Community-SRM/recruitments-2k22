import React, { Fragment } from "react";
function Clock({ days, hours, minutes, seconds }) {
  return (
    <Fragment>
      <section className="timer-container content">
        <p>Launch In</p>
        <section className="timer">
          <div className="clock">
            <section>
              <p>{days}</p>
              <small>D</small>
            </section>
            <span>:</span>
            <section>
              <p>{hours}</p>
              <small>H</small>
            </section>
            <span>:</span>
            <section>
              <p>{minutes}</p>
              <small>M</small>
            </section>
            <span>:</span>
            <section>
              <p>{seconds}</p>
              <small>S</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
}
Clock.defaultProps = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};
export default Clock;
