
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

let input = document.getElementById('autocomplete') 

console.log(getCookie('country'));

let countrycode  = getCookie('country')

let options = {
    types:['establishment'],
    componentRestrictions:{'country':[countrycode]},
    fields:['place_id','geometry','name']
}

let autocomplete;

function initAutoComplete(){
    autocomplete = new google.maps.places.Autocomplete( input, options)
    

}
