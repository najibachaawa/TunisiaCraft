export default{
    formatCurrency:function(num){
        return 'DT'+Number(num.toFixed(2)).tolocaleString()+'';
    }
}