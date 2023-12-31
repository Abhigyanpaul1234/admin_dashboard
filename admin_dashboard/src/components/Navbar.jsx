/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Cart, Chat, Notification, UserProfile } from '.';
import avatar from '../data/avatar.jpg';
import { useStateContext } from '../contexts/ContextProvider';

/* eslint-disable no-unused-vars */

const NavButton = ({
  title, customFunc, icon, color, dotColor,
}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className=" relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>

  </TooltipComponent>
);

function Navbar() {
  const { activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div>
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          icon={<AiOutlineMenu size={30} />}
          color="blue"
        />

        <div className="flex">
          <NavButton
            title="Cart"
            customFunc={() => handleClick('cart')}
            color="blue"
            icon={<FiShoppingCart size={30} />}
          />
          <NavButton
            title="Chat"
            dotColor="#03C9D7"
            customFunc={() => handleClick('chat')}
            color="blue"
            icon={<BsChatLeft size={30} />}
          />
          <NavButton
            title="Notification"
            dotColor="#03C9D7"
            customFunc={() => handleClick('notification')}
            color="blue"
            icon={<RiNotification3Line size={30} />}
          />
          <TooltipComponent
            content="Profile"
            position="BottomCenter"
          >
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light gray rounded-lg"
              onClick={() => handleClick('userProfile')}
            >
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
              />
              <p>
                <span className="text-gray-400">Hi,</span> {' '}
                <span className="text-gray-400 ml-1 font-bold text-14">Michael</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

