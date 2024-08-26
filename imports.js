import { PichaiUX } from "./init.js";

import './utils/customeElementsDefine.js';

import './utils/global_vars.js';

import './elements/images/logo.js';

import './elements/text/title.js';

import './elements/buttons/logIn.js';
import './elements/buttons/profileDisplay.js';

import './elements/navigation/viewpager.js';
import './elements/navigation/tabbar.js';

import './elements/dropdowns/accordion.js';

import './elements/input/colorPicker.js';

import './elements/lists/listViewer.js';

import './elements/signs/note.js';
import './elements/signs/warning.js';
import './elements/signs/error.js';
import './elements/signs/check.js';

import './elements/templates/footer.js';
import './elements/templates/header.js';
import './elements/templates/login.js';
import './elements/templates/accountDrawer.js';

import './utils/localFOrage.js';

export { PichaiUX };

//DO NOT REMOVE CODE BELOW THIS COMMENT

console.log(`                                                                                                                                  /&&                                                                   
                                                                /##                                                               &&&##(                                                                
                                                            /&%%&&/                                                               &&(  *#%&/.//*                                                        
                                                       ,#&&%/   (&&                                                               &%*      .(&&%, ,,,                                                   
                                                 ...(&&%(        %&(                                                             &&%            #&&&&                                                   
                                                /&&&&,            #&%                                                           %&(                /&&&(                                                
                                              &&&%,                *&&.                                                       #&&.                    *&&&#                                             
                                          ,&&&%/                     *%&/                                                  *&&%,                         (&&&,                                          
                                        .%&%%.                         .(&&(,                                          ,&&&&/                              *%&&#                                        
                                      *&&&(                                /%%&&&                                  #&&&&%,                                    %&&&                                      
                                    *&&&/                                       *&&&&&&%%*                .%%%&&&&&&,                                           %%&%                                    
                                  ,%&&(                                               .,/#&&&&&&&&&&&&&&&&%#*,.                                                   %&&#                                  
                                .%&%#                                                                                                                              ,%&&/                                
                               #&&%,                                                                                                                                 /%&&.                              
                              &&&%                                                                                                                                     %&&                              
                            ,&&&*                                                                                                                                       (&&*                            
                           /&&%.                                                                                                                                         *&&&                           
                          ,&&&.                                                                                                                                           .&&(                          
                         #&&%                                                                                             ,...,,*   .                                      ,&&%                         
                        ,&&%(                                   .#&&&&&&&&&&&%                                       .(&&&&&&&&&&&&&&&/   .,                                ,&&*                        
                        &&&*                                 /%%&&&&&&&&&&&&&&%,                                  (%%&&&&&&&&&&&&&&&&&&&&%.                                  /&&                        
                       #&&/ ,                             (&%&&&&&&&&&&%#####%&%(                            *#%&&&&&&&&&&&&&&&&&&&&&&&&&&%%%,                              . #&%                       
                      ,&&%.                            ,%&&&&%%#&&&%&&&&&&&&&&&&&*  //                  .,%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(                              /&&*                      
                      &&&&,                          (&&&%%/%%#/,%&&(&&&&&&&&&&&%(   %               ,#&&&%%&&%%&&&&&&&&&&&&&&&&&%&%#&&#%%%%&&&%(%,                     ,, . *#%&&                      
                      &&&&.                        ((%%%. .           (&&%#%&&&&%/  ,&&&.        ,*   *&&&&&&&&&&&&&&&&&&&&&&&&&&&%&/# ,     //*/#%%.                    ,     /&&                      
                     #&&&%,                      /%&#(%%,               *&&&&&&&&&&&&%#&%,     (#**   *&&&&&&&&&&&&&&&&&&&%#%&%/                 (#%%#.                  .(    /&&&&%                   
                     #&&&%*                    .%&%%%/    .(%&%%&%%&%/   .#&&&&&&&&&&&%/%,  ./%%&&# .*#%&&&&&&&&&&&&&&&&&&&&/(   ./#&&&&&%#/,        (%(                   ,(. (%&%                     
                     #&&&(                    /%%&&/    /&&&&&&&&&&&&&%%/  ,%&&&&&&(%&&&%   *%&&&&&%*(#&&&&&&&&&&&&&&&&&&&&&,  #&&&&&&&&&&&&&%%(    ,#%&%.                   ,&&&&&&%                   
                     #&&*%,                  %&&&&*   .&&&&%(        *%&&&. ,%&&&&&&&%&&#   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%   %%&&&%,        (%&&%.   #%&&.                    (%&&*                    
                     #&##&#                 #&&&&(    %&%# %(%&&&&&%%# .%&&, *&&&&&&&&&&*  .&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*  %&&&* ,%&&&&&&&%/ .%&&*  (%&&%*                     %&*                    
                     #&&&#(                %&&&(#    #&&* .&&&&&&&&&&&&/ /%# .%&&&&&&&&&.  (%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&  *&&&. %&&&&&&&&&&%%* #&%,  %&&&%.                    %&*                    
                     #&&&&%.              /&&%%&/   .&&%  (&&&&%(/%&&&&%..%%  /&&&&&&&&%   (&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*  /&&..&&&&&&&&&&&&&&%..%&(  /&&&&&                ,%, %&*                    
                      &&&&%.              %&&&&&,   *%&%  (&&&%#   &&&&%..%*  ,&&&&&&&&(   &&&&&&&(&&&&&&&&&&&&&&&&&&&&&&.  (%% ,&&&&&&*  (&&&&&, #&#  ,&&&&&(                 ,%&%                     
                      &&&&%              %&&&&&&,   *%&&, #&&&&&&&&&&&%( /&(  ,&&&&&&&&*   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   /&& .%&&&&&&&&&&&&&% .%&/  ,&&&&&&&          ,      (&%                     
                      ,&&&#             ,&&&&&&&*    &&&%(  (&&&&&&%%#  ,#*   /&&&&&&&&/   %&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,  .*.%. #&&&&&&&&&&&(  %%%.  *&&&&&%#  .          /  .&&.                     
                       #&#*             *&&&&&&&(    .%&&&&(    ...  .((%.    %%&&&&&&&(   %&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(      .*  *#&&&&&#*  (&&%   .#&&&&&&&&.              /&&                      
                       #&&(             /&&&&&&&&.     *%&&&&&&%%%*.. *      ,&&&&&&&&&%   %&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,        /.    ..*(&&##     *&&&&&&&&#,              %&*                      
                        #&/             (&&&&&&&&%.        .*/(((/          .&&&&&&&&&&*   %&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%       .(  .***(/%%#.     .%&&&&&&&&%*             (&%                       
                         #%.            /&&&&&&&&&&,          .....        .#%%%&&&&&/    *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%(.                       /%%%&&&&&&&&(            ,&&                        
                          &%            *&&&&&&%,,#%&&&&&&&&&&&&&&&&&&&&&&&%%#/./&&&&&%##%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&**#%&&&&&&&%  (          ,##%#*,,%&&&&&&/*            %%                         
                          ,&(           ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..%%(     /%&&&&&&&&&&&&&&&(             &&                          
                            &#           %&&&&&&&&&&&&&&&&&&&&&&&&&&&&%#,         ./(%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&%((,        .#%&&&&&%. (%%&&&&&&&&&&&&&&&&%.            %&,                          
                             ##          ,%&&&&&&&&&&&&&&&&&&&&&( /&&*   /%* %%%&&*        *(%%%&&&&&&&&%%%%(,      , ,&&&&&/ *   (&% ,%  #&&&&&&&&&&&&&&&&&&(           .&%                            
                              %%.         (&&&&&&&&&&&&&&&&&&&&, *&(  .%&&&* &&&&&( &&&&&%%,               ,, %%&&&&&.,&&&&&/ %%(   &%,  *&&&&&&&&&&&&&&&&&&&.          ,%&                             
                               .%*         &&&&&&&&&&&&&&&&&&&/ .%%  ,%&&&&* &&&&&( &&&&&&%, &&&&&&% (%%&&&%( #&&&&&&.,&&&&&/ #&&%  ,&(  (&&&&&&&&&&&&&&&&&&,          (&/                              
                                ,&#         %&&&&&&&&&&&&&&&&&# .&#  /&&&&&* &&&&&( &&&&&&%, &&&&&&% (&&&&&%( #&&%&&&.,&&&&&/ #&&&*  &/  &&&&&&&&&&&&&&&&&&/         ,%#                                
                                  ,&/        %&&&&&&&&&&&&&&&&%/ *%* .%&&&&* &&&&&( &&&&&&%, &&&&&&% (&&&&&%( %%%%&&&.,&#%&&/ #&&%. .%   &&&&&&&&&&&&&&&&&,         #&(                                 
                                    *&,       (&&&&&&&&&&&&&&&&&%,/&/  *%&&* &&&&&( &&&&&&%, &&&&&&% (&&&&&&* %%&&&&&.,%%&&&/ #&#   ( (, &&&&&&&&&&&&&&&&,        (&&                                   
                                      /%,      *&&&&&&&&&&&&&&&&&&&&&%(   (* &&&&&( &&&&&&%, &&&&&&% (&&&&&%( (%&&%%&.,&&&%%* .   #&&%.  %%&&&&&&&&&&&&#        /%&                                     
                                        (&,      #&&&&&&&&&&&&&&&&&&&&&&%/   ./%&&( &&&&&&%, &&&&&&% (&&&&&%( #%%&&&&..%%/.   .(%&&&&&%%&&&&&&&&&&&&&%,       *&&&                                      
                                          *&*     .%&&&&&&&&&&&&&&&&&&&&&&&#(*.     /#%%&&%, &&&&&&% (&&&&&%( #%#/*.     .*/%&&&&&&&&&&&&&&&&&&&&&&%*       /&/                                         
                                            *&(     .#&&&&&&&&&&&&&&&&&&&&&&&%,.,.                                   *&&&&%#&&%&&&&&&&&&&&&&&&&&&%*      .%%.                                           
                                               %&(     (%&&&&&&&&&&&&&&&&&&&&&&&%*            ,/(.     /&&&&&&&&&&((%%&&&&&&&&&&&&&&&&&&&&&&&&&%.      #&(                                              
                                                  (%*     #&&&&&&&&&&&&&&&&&&&&&&&%# .,      /(* *     *&&&&%#%&&&&##%&&%%&&&&&&&&&&&&&&&&&&&*      (&&.                                                
                                                    .*&(.   .(&&&&&&&&&&&&&%#&&&%(%&%,*(%*/%&&&&&&*./..#&#%&&&&&&&&&#/,#&&&&&&&&#&&&&&&&&%,     ,#&#                                                    
                                                        *&%/    ,#&&&&&&&&&&&%%&&&&&&&&&&&&&&&&&&&&&&&&&(&&&&&&&&%&&&%&&&&&&&&&&&&&&&%/     ./%%/                                                       
                                                            /#&(.   .(%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%%,     .#&%,                                                           
                                                                 &&&#.    ,#%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%%%&/      ,#&&%                                                                
                                                                     *&&&%#*     .*/%%%%%%%%%&&&&#%&&&&&&&&&&&&&&&%#*,.      *#%&&/.                                                                    
                                                                     .**   **(&&%%((*,          ........           ,*((%&&&**                                                                           
                                                                             ,((     ,(((&&&&&&&&&&%%&&&&&&&&&&&(((                                                                                     
                                                                                          .....&&&&&&&..&&#  (%%                                                                                        
                                                                                       %&#,             ,,  /&%%  %%%%%%%%/                                                                             
                                                                    /((#/,    .....                   *####                 .,(%&&(                                                                     
                                                               *%%*. *(%&&%%&(.(&&&&&,    #%(#/**.&&&&&&&&&&&%/         .,(/&%&%(, ./%(*                                                                
                                                           ,#%*  *#,(%&&&&&&&&&&&#*     /%*  /(#&&&&&&&&&&&&&&(     . ,%//%%&&&&&&&&&*  (&/                                                             
                                                         &%*  /&&&&&&&&&&&&&&%*.%%%&&%(  &&&&&&&&&&&&&&&&&&&&%( *&&&&&%.,%%&&&&&&&&&&&&&/  (&                                                           
                                                       %&,  #&&&&&&&&&&&&&&&&&&&&&&&(    *%&&&&&&&&&&&&&&&&&&#    /&&&&&&&&&&&&&&&&&&&&&&&#  #&#                                                        
                                                      (&%*  #&&&&&&&&&&&&&&&&&&&#,          .*/##%%%%%%##(,.         .#%&&&&&&&&&&&&&&&&&&#  (&,                                                        
                                                        #&/  (&&&&&&&&&&&&&&&(                                           (&&&&&&&&&&&&&&&#  #%.                                                         
                                                         .&%,  %&&&&&&&&&&%,                                               .#&&&&&&&&&&%  (&&                                                           
                                                           .&&,  #&&&&&&%.                                                    %%&&&&&%. (&%                                                             
                                                             ,&%*  ,%&&#                                                       &&&%*  (&/                                                               
                                                                #&(   */     ..,***/////((((((((################((########((/  **  .#&*                                                                 
                                                    ************#&*...,,,,,,,,**********////////(((((#####%##%%%&&&&&&&&%%%&&&&&&&%%%&&&%%&&&%%%&&&&&&&%%%%%%%%%#####&&                                 
                                 %&%%%%%%%%%%%%%###########(((((/////****,,,,,....                                                          #%%%(%%*                .&&....  &&*                        
                                 %&*  .  (                                                                                                      #.                  .%%(((%%%%%%&%   %%,                
                                 %&&%.                           .                      ,///*,.      ,(%%%%&&%#                   /%.     .#/      .#&&&&&/          &.  /#(/,   ,#&&&&,                
                                 %&&&&*        (/            #( /%%&/       %%/  (%&#*&&&&&%#&%(%%.,&&#%#,   *(%&&&&&%(,  /&&%,   %&&/    #&&%.  (&&&#,              & ,&&&&&&&%%%(,  (%&&*             
                                 %&&&&*        &&%/  ,(*   .##,.%&&&&%.    /&%%#((&&#, %&#      ,&%,&&&&&&&(,%&&#    %&&% (&&%%  (&&&%(. .%&&# /%%&%(/         ,     &.*&&&&&&&&&&&&%%*  /&&#,,         
                                 %&&&&,        &&&# .#&&& ,#// (&&# /&&*   (%%##&#&&&/ #&&     *&&%/%%%/%(.  *&&&#/&&&#,  *&&&& .&&&&&&&*(%&&#*&&&/.(%%%&&%%%/       %,*&&&&&&&&&&&&&&&&%, *%&&,        
                                 %&&&&*        &&&%%&&&&%%%##,.&&&&&&&&&*.%## /%(#&&&# ,&&%,#%&&%(.,(, # .*,  &&&&&&(     ,%&%% ,&&&//&&&&&&&#.%&%.    , *&&&%      .& *&&&&&&&&&&&&&&&&&&&# .&&%.      
                                 %&%#, .      ,&&&&&&.,&&&&%,.%&&&&(,  #&&&%    ,%&&&%*%&/&#&#,     /&%&&&&(  #&&&%&&%     (&&&.(&&#    ./#/.  .%&%#/*/(%%&&&%      .& *&&&&&&&&&&&&&&&&&&&&&# ,&&(     
                                 %&&&&,       ,&&&&%   (&&&/  #&&%.    .%&(             *,(          ,((*     .%&&*,(%&&%%%*/%.  .                *(##((/ (&%*      .& *&&&&&&&&&&&&&&&&&&&&&&&( (&&(   
                                  &&&##,      /&&%*     #%(   #&#,       ,                                     #&%                                                  %(.%&&&&&&&&&&&&&&&&&&&&&&&&%.,%&&&.
                        &&&&&&&%%%&&&&%       (*&%,                                            /(*        .%&&&#            ,%(     /(%%%                          # #&&&&&&&&&&&&&&(%&#,/###&&&&&, &&&.
                  .%&&&#,      ,  #&&&&*     ..,%%,           *##*       .%%,          (#%#(&&(,./%%&&%. ,&% *&# ,%%(%&&/*&( #&/   (%%##.         *%%%#*          /%&&&&&&&&&&&&&&#     %*  (&&&&&%..%&.
               %&%%*  ,(%&&&&&/.%,(&&&%*     ,  &#.      %%#(&&/.,       #&#%(     .%%&&%. *&&%#.#&%#%%.  %&&%/  ,&&* &&%&%%(*&(   (&#**(*     ,%&&&&&&&&#   ,(%&&&&&&&&&&&&&&&&%/         /%&&&&&%( ,&&
            /&%%, .(&&&&&&&&&&&&, (&&&%/     . ,(        (&#  ,(%%(     *&&&&%#       /&%  /%%*(**%&&#,   /%%#&&(.%&  #&* /%&/&&%%//&&&(.     (&&&&&&&&%,,#&&&&&&&&&&&&&&&&&&&&&%.        #&&&/     . &&
         .&&%( .#&&&&&&&&&&&&&&&& /&&&&#        *        (&* #%&&&%*    #&#   ##       #*.  /##.  (&%/#%%( *      /,  ,%&%(   (/             ,&&&&&&&#.(&&&&&&&&&&&&&&&&&&&&&&&%%*     .#&&&*     *,. &&
      &&&&&* *&&&&&&&&&&&&&&&&&&& /&#/*         ,         .                            ,(          ,                                         /&&&&&&&/#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%,       # ,&&
      #&&* (&&&&&&&&&&&&&&&&&&&&&.(((%/,                                  .  .#%%%&&&%%%%(/.                    *#,              /(          .%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#     #/(( *&&
     &&# /&&&&&&&&&&&&&&&&&&&&&&&**%,,.                                   *%&&&&&&&&&&&&&&&&%/  /%%&&#.        #&&&&,          ,%&%%,         /&&&&&&&&&&&&&&&&&&&&&&%%%&&&&&&&&&&&&&&&&&&%/ .,&&&%. #&/
   /&&*.%&&&&&%#%%%&&&&&&&&&&&&&&# /                              *     #&&&&&&&&&&&&&&&&&&&&&% /%%&&&&%*     .%&&&&%,         %&&&&&%/         (%%&&&&&&&%%%#/,,*/##%%%%&&&&&&&&&&&&&&&&&&&&&&&&&* /&% 
  &&%,.&&&&&#      *%&&&&&&&&&&&&&%.                                   #&&&&&&&&&&%%/(%%&%%  **  %&&&&&&%.    /&&&&&&&#       ,&&&&&&%.              ..   *%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%%. #&#  
 /&% ,&&&&&&/   .. *%&&&&&&&&&&&&&&&&/            .,,                 /&&&&&&&&#                 #%&&&&&%.    &&&&&&&&&&      (&&&&&&%.                   #&&&&&&&&&&&&&&&&&&&&&&&%%&&&&&&&&&&%. *&&(   
 &&, #&&&&&&%.   *   (&&&&&&&&&&&&&&&&&&#/     #&&&&&&&%(          *%%(%&&&&&&&&&&&&&%#.        *%&&&&&&%.   /&&&&&&&&&&#    *&&&&&&&%                    ,&&&&&&&&&&&&&&&%%%*/#&&%%&%%%%%(,  .#&&...   
&&%  ,  ./&&&&,    /(#%&&&&&&&&&&&&&&&&&&&&&&(.,#&&&&&&&%%.           , .(%&&&&&&&&&&&&&%(       #&&&&&&%.   %&&&&&&&&&&&&#. (&&&&&&&%                      #&&&&&&&&&&%%/.              ,/%%&%*        
&&% .      .%&%#.    ./&&&&&&&&&&&&&&&&&&&&&&&&&#.(&&&&&%%%                    .,,/%&&&&&&&(     (&&&&&&#   .%&&&&&&&&&&&&&&&&&&&&&&&%                        .*(((/,   ./%%%&&&&&&&&%%&((((/           
&&% .        (&&&%%%#(%%%&&&&&&&&&&&&&&&&&&&&&&&&%*#&&&&&&&,           .%            (&&&&&&%,   *%&&&&&(   #&&&&&&&./%&&&&&&&&&&&&&&#                               *%%%                               
&&&. #       .&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#%%#,           .*/(,          &&&&&&&%,  *&&&&&%    &&&&&&&(    *%&&&&&&&&&&%/                               ,%/                                
 &&* /&%.    ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%*,#(.        .*%&&%%%*       .&&&&&&&&#  .&&&&&#   ,&&&&&&,         ,#&&%((,.  .%%(                    . ... .%/                                
 &&%. %&&&&%%%&&&&&&&&&&&&&&&&&&#//**.,,/#%&&&&&&&&&&&&&%%%%.        *#&%%(. (&(#((#%&&&&&&&&&/  ,%&&&&*   ,&&&#.                      &&&%%(                     .*,%%/                                
  (%%. #&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%/,.*(#%#(* (%#.           ,(/(%&%%&&&&&&&&&&&&&&&(    *%&(                                 /#%&&&#                  . ,,/#&/                                
   /&&(  #&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/ %%(       ..*                  *%%&&&&&&&&&&&%%,       .                                                          /(%(%&&&&/                                
     /&&%.  *%&&&&&&&&&%#,(&&&&&&&%&%%#/(&#&*.          (/                                                                                                   ,%%&&&&&&&/                                
       .*&&%(,      ........ .(%%&%%%%(#(*,   ///((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((#(((&&&&&&&&&&/                                
            /#&&&&&&&&&&&&&%%(,    .....    .%&////////////////////////////&&*.            ..#&&&&&&&&%*..            .%&//////////////////////////////////////////////,                                
                            ,#&&&&&&%#(((&&&#                              &&/               (&*    .&%               ,%/                                                                               
                                                                           &&#               (&*    .&%               /&/                                                                               
                                                                           *&%,              (&*    .&%.              #%/                                                                               
                                                                           .%%/.  ...        (&*    .&%.              &&                                                                                
                                                                            %&&&%%           #&*    .&%.             /&&                                                                                
                                                                            #&&%#/           #&*    .%%.             %&                                                                                 
                                                                             &&&&&%.         #%     .&%.            .%&                                                                                 
                                                                             &&&&&#.         #%     .&%.            ,&/                                                                                 
                                                                             *&#,            %%     .&%.            (&,                                                                                 
                                                                             ,%&             %%      (%.            %&,,                                                                                
                                                                          %%%%%#(/,,,.      ,#%&    ,%%.      //###%%%%%&.                                                                              
                                                          /%%%%%%%.       %*                    (&&/                    ,%                                                                              
                                                  *(&&%/,            .*#&&&*                    *&%,                    *&#&%#*..        .,/%&&(.                                                       
                                               *&&#,     .                                      *&%,                    .            ,**,.      /&&,                                                    
                                             ,&&*     ,&&&&%%(,##.                              /&&,                              #&&&&&&%#/.      #%#                                                  
                                            &&/         (%%&&&%#                                #,&/                               (%%%              #&(                                                
                                          *%%                                                   &,&#                                               ,  /&&&.                                             
                                          &%,                                                  .&,.%                                         .        /&&(                                              
                                         %&*                                                   *% .&.                                         **  , ./%#%&.                                             
                                         %#                                                    /% .&,                                                  .%&&                                             
                                        *&/                                                    %%  (#                                          .%       ,%&                                             
                                        *%*                                          .,*###%&/.     .#&%##/,.                                     #.   *%%&                                             
                                         %/                                      .%/                           */%                                 .%%/,.&&                                             
                                          &#.                                  *%&&                              /&(.                                 (&&&.                                             
                                             ###%&#(//***,,,,,,,***//(#%####                                          ##%&%#(/**........    ....,,/(%##/                                                `);
                                             console.warn('DO NOT modify or try and access code if you do not know what you are doing, executing code may be scams to steal your account, information or online currencies.');