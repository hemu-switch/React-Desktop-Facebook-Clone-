import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://lh3.googleusercontent.com/ogw/ADGmqu87HjXeJgcv2ixsUZqa0O9htPkhRhNKrRcRvrGdZg=s32-c-mo'
        title='Hemraj'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='Covid-19 Information Centre'
      />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='See more' />
    </div>
  );
}

export default Sidebar;
