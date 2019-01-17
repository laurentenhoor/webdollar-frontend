export default {

    generateRandomcolor(address){

        let sum0=0, sum1=0,
            sum2 = 0;
        for (let i=0; i<address.length; i++){

            if (i %3 === 0)
                sum0 = sum0 + address.charCodeAt(i);
            else
            if (i %3 === 1)
                sum1 = sum1 + address.charCodeAt(i);
            else
            if (i %3 === 2)
                sum2 = sum2 + address.charCodeAt(i);
        }

        return "rgb(" + sum0 % 256 + "," + sum1 % 256 + "," + sum2 % 256 + ")";
    },

    formatMoneyNumber(n, decimals=0) {

        var number = parseInt(n/WebDollar.Applications.CoinsHelper.WEBD);
        var decimalNumber = this.getNumberRest(n);

        if (decimals===0) return this.formatIntNumber(number);
        else return this.formatIntNumber(number)+'.'+this.getFirstDigits(decimalNumber,decimals);

    },

    formatIntNumber(number){

        return number.toString().replace(/./g, function(c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        });

    },

    getNumberRest(number){

        return number % WebDollar.Applications.CoinsHelper.WEBD;

    },

    getFirstDigits(number,decimals){

        var decimalsVerifier = Math.pow(10,decimals);
        var newNumber = '';

        if(number<10){

            newNumber='000'+number.toString();

        }else if(number<100){

            newNumber='00'+number.toString();

        }else if(number<1000){

            newNumber='0'+number.toString();

        }else if(number<10000){

            newNumber=''+number.toString();

        }

        return newNumber.substring(0,decimals);

    },
    
    showHashes(hashes,isPoS){

        if (hashes >= 1000000000000)
            if(!isPoS)
                return (hashes / 1000000000000).toFixed(2);
            else
                return (hashes / 20000000000000).toFixed(2)
        if (hashes >= 1000000000)
            if(!isPoS)
                return (hashes / 1000000000).toFixed(2);
            else
                return (hashes / 20000000000).toFixed(2);

        if (hashes >= 1000000)
            if(!isPoS)
                return (hashes / 1000000).toFixed(2);
            else
                return (hashes / 20000000).toFixed(2);

        if (hashes >= 1000)
            if(!isPoS)
                return (hashes / 1000).toFixed(0);
            else
                return (hashes / 20000).toFixed(0);

        return hashes
        
    },
    
    showHashesSign(hashes,isPoS){

        if (hashes >= 1000000000000)
            if(!isPoS)
                return 'T';
            else
                return 'B';

        if (hashes >= 1000000000)
            if(!isPoS)
                return 'B';
            else
                return 'M';

        if (hashes >= 1000000)
            if(!isPoS)
                return 'M';
            else
                return 'K';

        if (hashes >= 1000 && !isPoS) return 'K';
        else return '';
        
    }

}