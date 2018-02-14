let get_cookie,
    my_cookie,
    mycookie_parse  = '',
    username        = '',
    userid          = '';

// https://www.w3schools.com/js/js_cookies.asp
get_cookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";    
};

mycookie = get_cookie('kantormu'); 

// parse cookies
// https://assets.kompas.id/wp-content/themes/mumed_kompas_dot_id_2016/assets/libs/accesslogs/accesslogs.js?ver=1.0.3
if (mycookie) {
    mycookie_parse    = JSON.parse(mycookie);
    username          = mycookie_parse.user.username;
    if (typeof mycookie_parse.user.id !== typeof undefined) {
        userid = mycookie_parse.user.id;
    }
}

let exports = module.exports = {
    'username'  : username,
    'userid'    : userid,
};