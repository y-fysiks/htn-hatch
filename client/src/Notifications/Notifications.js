import React, { useState } from 'react';
import { MdNotificationsNone, MdNotificationsActive } from 'react-icons/bs'


export const Notification = () => {
  function changeActive() {
    if (active === false) {
      setActive(true)
    }
    else {
      setActive(false)
    }
  }

  const [active, setActive] = useState(false);

  const handleClick = () => setClick(!click);

  



}

