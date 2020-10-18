module.exports = function toReadable (number) { 
    
        let string = number.toString();
        let ones = '';
        let elevens = '';
        let tens = '';
        let hundreds = '';
        let indexOne = string[string.length - 1];
        let indexTen = string[string.length - 2];
        let indexHundreds = string[string.length - 3];
        
        if(indexOne === '0' && string.length === 1){
            ones = 'zero';
        }else{
            switch(indexOne){
                case '1':
                    ones = 'one';
                    break;
                    
                case '2':
                    ones = 'two';
                    break;
                    
                case '3':
                    ones = 'three';
                    break;
                case '4':
                    ones = 'four';
                    break;
                case '5':
                    ones = 'five';
                    break;
                case '6':
                    ones = 'six';
                    break;
                case '7':
                    ones = 'seven';
                    break;
                case '8':
                    ones = 'eight';
                    break;
                case '9':
                    ones = 'nine';
                    break;
            };};
            
            if(indexTen === '1'){
                switch(indexOne){
                    case '0':
                        elevens = 'ten';
                        break;
                    case '1':
                        elevens = 'eleven';
                        break;
                    case '2':
                        elevens = 'twelve';
                        break;
                    case '3':
                        elevens = 'thirteen';
                        break;
                    case '4':
                        elevens = 'fourteen';
                        break;
                         case '5':
                        elevens = 'fifteen';
                        break;
                    case '6':
                        elevens = 'sixteen';
                        break;
                    case '7':
                        elevens = 'seventeen';
                        break;
                    case '8':
                        elevens = 'eighteen';
                        break;
                    case '9':
                        elevens = 'nineteen';
                        break;
                };
            }else{
                switch(indexTen){
                    case '2':
                        tens = 'twenty';
                        break;
                    case '3':
                        tens = 'thirty';
                        break;
                    case '4':
                        tens = 'forty';
                        break;
                    case '5':
                        tens = 'fifty';
                        break;
                    case '6':
                        tens = 'sixty';
                        break;
                    case '7':
                        tens = 'seventy';
                        break;
                    case '8':
                        tens = 'eighty';
                        break;
                    case '9':
                        tens = 'ninety';
                        break;
                };
            };
            
            switch(indexHundreds){
                case '1':
                    hundreds = 'one hundred';
                    break;
                case '2':
                    hundreds = 'two hundred';
                    break;
                case '3':
                    hundreds = 'three hundred';
                    break;
                case '4':
                    hundreds = 'four hundred';
                    break;
                case '5':
                    hundreds = 'five hundred';
                    break;
                case '6':
                    hundreds = 'six hundred';
                    break;
                case '7':
                    hundreds = 'seven hundred';
                    break;
                case '8':
                    hundreds = 'eight hundred';
                    break;
                case '9':
                    hundreds = 'nine hundred';
                    break;
            };
            
            if(string.length === 1){
                return ones;
            }else if(string.length === 2 && indexTen === '1'){
                return elevens;
            }else if(string.length === 2 && indexOne === '0'){
                return tens;
            }else if(string.length === 2 && indexTen !== 1){
                return `${tens} ${ones}`;
            }else if(string.length > 2 && indexTen === '1'){
                return `${hundreds} ${elevens}`;
            }else if(string.length > 2 && indexTen === '0' && indexOne === '0'){
                return hundreds;
            }else if(string.length > 2 && indexTen !== '0' && indexOne === '0'){
                return `${hundreds} ${tens}`;
            }else if(string.length > 2 && indexTen === '0' && indexOne !== '0'){
                return `${hundreds} ${ones}`;
            }else{
                return `${hundreds} ${tens} ${ones}`
            };

        };
  

