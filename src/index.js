module.exports = function toReadable (number) {
  
        const numberArr = String(number).split("");
        let readNumberArr = [];
        
        if (numberArr.length == 3) {
          
          let hundreds = numberArr[0];
          
          switch (hundreds) {
            case '1':
              hundredsStr = 'one hundred';
              break;    
            case '2':
              hundredsStr = 'two hundred';
              break;    
            case '3':
              hundredsStr = 'three hundred';
              break;    
            case '4':
              hundredsStr = 'four hundred';
              break;    
            case '5':
              hundredsStr = 'five hundred';
              break;   
            case '6':
              hundredsStr = 'six hundred';
              break;    
            case '7':
              hundredsStr = 'seven hundred';
              break;    
            case '8':
              hundredsStr = 'eight hundred';
              break;    
            case '9':
              hundredsStr = 'nine hundred';
              break;
          }
          
          numberArr.shift()
          readNumberArr.push(hundredsStr);          
        }
        
          if (numberArr.length == 2) {
          
          let dozens = numberArr[0];
          let dozensNum = numberArr[numberArr.length - 1]
      
            if (dozens !== '1')  {
              switch (dozens) {
                case '0':
                  dozensStr = null;
                  break;
                case '2':
                  dozensStr = 'twenty';
                  break;    
                case '3':
                  dozensStr = 'thirty';
                  break;    
                case '4':
                  dozensStr = 'forty';
                  break;    
                case '5':
                  dozensStr = 'fifty';
                  break;   
                case '6':
                  dozensStr = 'sixty';
                  break;    
                case '7':
                  dozensStr = 'seventy';
                  break;    
                case '8':
                  dozensStr = 'eighty';
                  break;    
                case '9':
                  dozensStr = 'ninety';
                  break;
              }
              } else { 
                switch (dozensNum) {
                  case '0':
                    dozensStr = 'ten';
                    break;
                  case '1':
                    dozensStr = 'eleven';
                    break;
                  case '2':
                    dozensStr = 'twelve';
                    break;
                  case '3':
                    dozensStr = 'thirteen';
                    break;
                  case '4':
                    dozensStr = 'fourteen';
                    break;
                  case '5':
                    dozensStr = 'fifteen';
                    break;
                  case '6':
                    dozensStr = 'sixteen';
                    break;
                  case '7':
                    dozensStr = 'seventeen';
                    break;
                  case '8':
                    dozensStr = 'eighteen';
                    break;
                  case '9':
                    dozensStr = 'nineteen';
                    break;
                }
              }

            readNumberArr.push(dozensStr);
            readNumberArr = readNumberArr.filter(x => x !== null)
      
        }
          
        if (numberArr.length > 1 && numberArr[numberArr.length - 2] == '1') {
            return readNumberArr.join(" ");
        } else if (numberArr.length > 1 && numberArr[numberArr.length - 1] == '0'){
            return readNumberArr.join(" ");
        } else {
          let units = numberArr[numberArr.length - 1];
          switch (units) {
            case '0':
              unitsStr = 'zero';
              break; 
            case '1':
              unitsStr = 'one';
              break;    
            case '2':
              unitsStr = 'two';
              break;    
            case '3':
              unitsStr = 'three';
              break;    
            case '4':
              unitsStr = 'four';
              break;    
            case '5':
              unitsStr = 'five';
              break;   
            case '6':
              unitsStr = 'six';
              break;    
            case '7':
              unitsStr = 'seven';
              break;    
            case '8':
              unitsStr = 'eight';
              break;    
            case '9':
              unitsStr = 'nine';
              break;
          }
          readNumberArr.push(unitsStr);
          return readNumberArr.join(" ")
        }

    }


