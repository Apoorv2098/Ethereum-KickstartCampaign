import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from '../routes'

export default(probs)=>{
    return(
    <Menu style={{ marginTop:'10px'}}>
        <Menu.Item>
             <Link route='/'>
               <a className='items'>
                   CrowdCoin  
              </a> 
              </Link>
        </Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item>
                <Link route='/'>
                    <a className='items'>
                         Campaigns 
                    </a> 
                </Link>
            </Menu.Item>

            <Menu.Item>
                 <Link route='/campaigns/new'>
                         <a className='items'>
                             +  
                         </a> 
                 </Link>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
    );

}