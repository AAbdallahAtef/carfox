import React, { useState } from 'react';

function MySwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div >
        <p>the switch</p>
    </div>
  );
}

export default MySwitch;
