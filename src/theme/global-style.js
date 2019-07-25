import { createGlobalStyle } from 'styled-components';
import colors from "./colors";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css');

    body {
        
        margin: 0;
        
        font-family: 'Roboto', Arial, sans-serif;
        color: ${colors.textMain};
        
        background: ${colors.bg};
    }
    
    .visuallyhidden:not(:focus):not(:active) {
      position: absolute;
    
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
    
      white-space: nowrap;
    
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
`;

