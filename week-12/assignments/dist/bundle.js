(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const contractors = require("../data/mock_data.json");

const getAllContractors = (term, cost_from, cost_to, material_type, valueTerm) =>
  new Promise((resolve) => {
    let data = contractors;

    if(term) {

        switch(term) {
            case "first_name":
                data = data.filter((contractor) => contractor.first_name.toLowerCase().includes(valueTerm));
                break;
            case "last_name":
                data = data.filter((contractor) => contractor.last_name.toLowerCase().includes(valueTerm));
                break;
            case "gender":
                data = data.filter((contractor) => contractor.gender.toLowerCase() === valueTerm.toLowerCase());
                break;
            case "email":
                data = data.filter((contractor) => contractor.email.toLowerCase().includes(valueTerm));
                break;
            case "company":
                data = data.filter((contractor) => contractor.company.toLowerCase().includes(valueTerm));
                break;
            case "role":
                data = data.filter((contractor) => contractor.role.toLowerCase().includes(valueTerm));
                break;
            case "ip_address":
                data = data.filter((contractor) => contractor.ip_address.includes(valueTerm));
                break;    
            default:
                // do nothing
                break;
        }
    }
    
    if (cost_from && cost_from != "" && cost_to && cost_to != "") {
        data = data.filter((contractor) => Number(contractor.material_cost.replace("$","")) >= Number(cost_from) && Number(contractor.material_cost.replace("$","")) <= Number(cost_to));
    }
    
    if(material_type && material_type != "all") {
        data = data.filter((contractor) => contractor.material_name.toLowerCase() === material_type);
    }
    
    resolve({ code: 200, data: data });
  });

const getContractorById = (id) =>
  new Promise((resolve) => {
    const contractor = contractors.find((contractor) => contractor.id === Number(id.trim()));

    if (contractor) {
        resolve({ code: 200, data: Array(contractor) });
    } else {
        resolve({
            code: 404,
            data: { message: `No contractor found for id ${id}` },
        });
    }
  });

module.exports = {
  getAllContractors,
  getContractorById,
};

// build : browerift main.js -o dist/bundle.js
},{"../data/mock_data.json":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Conney","last_name":"Knudsen","email":"cknudsen0@accuweather.com","gender":"Male","company":"Twitterwire","role":"Project Manager","language":"Hebrew","ip_address":"250.253.202.68","material_id":"4ecaa8b5-2fba-47c1-aee4-c881c8d78dc9","material_name":"Glass","material_cost":"$6.53"},
{"id":2,"first_name":"Glori","last_name":"Rushe","email":"grushe1@mac.com","gender":"Female","company":"Meevee","role":"Project Manager","language":"Arabic","ip_address":"178.250.76.61","material_id":"289de723-a72c-4965-8a8a-a59257dc11b6","material_name":"Aluminum","material_cost":"$7.03"},
{"id":3,"first_name":"Stanislaus","last_name":"De La Salle","email":"sdelasalle2@163.com","gender":"Genderfluid","company":"Realfire","role":"Electrician","language":"M??ori","ip_address":"253.171.151.104","material_id":"9068186f-a200-4457-a76a-b61fc38a4ce5","material_name":"Granite","material_cost":"$7.61"},
{"id":4,"first_name":"Broddie","last_name":"Ainscow","email":"bainscow3@w3.org","gender":"Male","company":"Tagopia","role":"Engineer","language":"Mongolian","ip_address":"222.223.145.46","material_id":"2847929f-f09c-4a43-b5e9-4ddd650d022a","material_name":"Brass","material_cost":"$6.61"},
{"id":5,"first_name":"Myranda","last_name":"Goulbourne","email":"mgoulbourne4@wisc.edu","gender":"Female","company":"Photolist","role":"Construction Manager","language":"Dutch","ip_address":"178.43.187.107","material_id":"f8dd57b3-e809-4bbd-9ef2-dcc144da5b42","material_name":"Wood","material_cost":"$3.46"},
{"id":6,"first_name":"Giovanna","last_name":"Cokayne","email":"gcokayne5@eepurl.com","gender":"Female","company":"Gabtype","role":"Construction Foreman","language":"Chinese","ip_address":"218.120.31.174","material_id":"7036d6f5-4499-4bdf-a69c-c5f5d0983f31","material_name":"Vinyl","material_cost":"$2.32"},
{"id":7,"first_name":"Isabelita","last_name":"Pelzer","email":"ipelzer6@domainmarket.com","gender":"Female","company":"Linkbridge","role":"Surveyor","language":"Portuguese","ip_address":"141.53.23.150","material_id":"348fc29d-3d32-454a-8cd4-0b21cf939c92","material_name":"Wood","material_cost":"$6.56"},
{"id":8,"first_name":"Chantal","last_name":"Creebo","email":"ccreebo7@economist.com","gender":"Female","company":"Oyoba","role":"Architect","language":"Quechua","ip_address":"129.240.31.146","material_id":"04780b3c-e871-4731-93e5-fc909571ceb8","material_name":"Wood","material_cost":"$8.11"},
{"id":9,"first_name":"Allyson","last_name":"Bruckshaw","email":"abruckshaw8@mit.edu","gender":"Female","company":"Photospace","role":"Construction Manager","language":"French","ip_address":"120.135.122.248","material_id":"cd0acf36-9e1e-44b1-a72b-18ddaf757865","material_name":"Plexiglass","material_cost":"$9.63"},
{"id":10,"first_name":"Ronnie","last_name":"Gettone","email":"rgettone9@github.com","gender":"Female","company":"Meevee","role":"Surveyor","language":"Kannada","ip_address":"17.27.76.26","material_id":"03d5bb81-4d31-46d6-9a6d-bda1be5a3eb6","material_name":"Wood","material_cost":"$2.64"},
{"id":11,"first_name":"Vi","last_name":"Erb","email":"verba@shinystat.com","gender":"Female","company":"Livetube","role":"Subcontractor","language":"Italian","ip_address":"180.147.73.207","material_id":"990aa0c1-730c-495b-ab46-3d4782eee935","material_name":"Stone","material_cost":"$5.50"},
{"id":12,"first_name":"Ervin","last_name":"Twort","email":"etwortb@icio.us","gender":"Male","company":"Voolia","role":"Architect","language":"Ndebele","ip_address":"125.121.239.232","material_id":"bba64bf6-16f1-4041-8edd-94b7f9230ead","material_name":"Vinyl","material_cost":"$7.09"},
{"id":13,"first_name":"Arleyne","last_name":"Girardey","email":"agirardeyc@independent.co.uk","gender":"Female","company":"Lazzy","role":"Electrician","language":"Kazakh","ip_address":"175.131.61.182","material_id":"c641c3cf-402b-440f-8fde-aafb1c549de7","material_name":"Stone","material_cost":"$3.97"},
{"id":14,"first_name":"Patrick","last_name":"Youde","email":"pyouded@earthlink.net","gender":"Male","company":"Jabbercube","role":"Electrician","language":"Tamil","ip_address":"200.34.62.94","material_id":"5adcd5f4-b617-4884-9279-0793716356ec","material_name":"Granite","material_cost":"$2.98"},
{"id":15,"first_name":"Ashia","last_name":"Vignaux","email":"avignauxe@icio.us","gender":"Female","company":"Feedfire","role":"Estimator","language":"Thai","ip_address":"114.125.243.65","material_id":"0f17c4f2-bdbf-465c-ba91-0a961e4f5536","material_name":"Granite","material_cost":"$7.86"},
{"id":16,"first_name":"Chaunce","last_name":"Kloster","email":"cklosterf@g.co","gender":"Male","company":"Zoovu","role":"Construction Foreman","language":"Italian","ip_address":"52.198.254.248","material_id":"4566fa13-63f3-438b-b1ac-909425c3f7c2","material_name":"Plastic","material_cost":"$1.31"},
{"id":17,"first_name":"Redford","last_name":"McKinna","email":"rmckinnag@irs.gov","gender":"Non-binary","company":"Quatz","role":"Construction Foreman","language":"Portuguese","ip_address":"98.100.212.120","material_id":"33f1d772-9803-42c5-818f-b47bb3439a64","material_name":"Granite","material_cost":"$2.15"},
{"id":18,"first_name":"Frederich","last_name":"Nansom","email":"fnansomh@usa.gov","gender":"Male","company":"Realpoint","role":"Construction Expeditor","language":"Northern Sotho","ip_address":"64.119.161.193","material_id":"1b0f1506-8e27-4734-a4d1-c1674ff94a31","material_name":"Vinyl","material_cost":"$6.83"},
{"id":19,"first_name":"Shoshana","last_name":"Goodred","email":"sgoodredi@github.com","gender":"Female","company":"Meevee","role":"Construction Expeditor","language":"Georgian","ip_address":"43.43.82.204","material_id":"7c583601-e68f-4292-84fa-0e8743c0bab7","material_name":"Rubber","material_cost":"$8.11"},
{"id":20,"first_name":"Heywood","last_name":"Devonport","email":"hdevonportj@mapquest.com","gender":"Male","company":"Brainsphere","role":"Estimator","language":"Lao","ip_address":"25.177.62.24","material_id":"5061ff1f-b4df-4fa0-bc5d-abf9d092723e","material_name":"Rubber","material_cost":"$6.37"},
{"id":21,"first_name":"Romain","last_name":"Charlot","email":"rcharlotk@google.com.br","gender":"Male","company":"Meetz","role":"Construction Foreman","language":"Italian","ip_address":"103.200.18.37","material_id":"5ef6db72-4321-4e61-8f32-3c66bdb798e8","material_name":"Brass","material_cost":"$4.43"},
{"id":22,"first_name":"Warde","last_name":"Fieldstone","email":"wfieldstonel@scribd.com","gender":"Male","company":"Devpulse","role":"Electrician","language":"Icelandic","ip_address":"10.24.252.115","material_id":"126ac7a8-545f-46a8-b5e8-6aab60d23d13","material_name":"Brass","material_cost":"$2.48"},
{"id":23,"first_name":"Caz","last_name":"Kemmey","email":"ckemmeym@salon.com","gender":"Agender","company":"Roombo","role":"Project Manager","language":"Macedonian","ip_address":"234.130.109.204","material_id":"28399000-f44d-4f67-9179-873052557d2d","material_name":"Plexiglass","material_cost":"$1.18"},
{"id":24,"first_name":"Neilla","last_name":"Rosten","email":"nrostenn@last.fm","gender":"Female","company":"Topiclounge","role":"Electrician","language":"Norwegian","ip_address":"96.148.174.7","material_id":"6fdf8cdf-74a4-443a-b7cb-780cc8e618af","material_name":"Steel","material_cost":"$9.47"},
{"id":25,"first_name":"Sigvard","last_name":"Bowell","email":"sbowello@drupal.org","gender":"Male","company":"Nlounge","role":"Supervisor","language":"Sotho","ip_address":"158.161.82.218","material_id":"b4746d93-6f87-4218-a2d3-e21a60ec33e0","material_name":"Glass","material_cost":"$2.74"},
{"id":26,"first_name":"Mufi","last_name":"Hugueville","email":"mhuguevillep@furl.net","gender":"Female","company":"Avaveo","role":"Engineer","language":"Greek","ip_address":"51.47.254.196","material_id":"435084d3-d63f-482b-ad63-5c830deba018","material_name":"Vinyl","material_cost":"$4.97"},
{"id":27,"first_name":"Jeanelle","last_name":"Geroldini","email":"jgeroldiniq@engadget.com","gender":"Female","company":"Cogidoo","role":"Subcontractor","language":"New Zealand Sign Language","ip_address":"239.148.125.201","material_id":"8f61b2c8-4b05-4d02-acec-3e44f118f252","material_name":"Glass","material_cost":"$7.14"},
{"id":28,"first_name":"Alverta","last_name":"Staddom","email":"astaddomr@phpbb.com","gender":"Female","company":"Wikibox","role":"Project Manager","language":"Hungarian","ip_address":"82.142.106.114","material_id":"78825935-69ad-439e-9f10-93a1351a6963","material_name":"Aluminum","material_cost":"$4.01"},
{"id":29,"first_name":"Yancey","last_name":"Laughlin","email":"ylaughlins@t.co","gender":"Male","company":"Zoonoodle","role":"Architect","language":"Swedish","ip_address":"6.122.226.8","material_id":"1b20abdc-0353-4eab-80b1-3091c9649c90","material_name":"Aluminum","material_cost":"$4.35"},
{"id":30,"first_name":"Romy","last_name":"Adenet","email":"radenett@squidoo.com","gender":"Female","company":"Wordtune","role":"Engineer","language":"Swahili","ip_address":"144.115.57.209","material_id":"db75de69-f0ee-4aa3-a162-25b2119e88d8","material_name":"Glass","material_cost":"$6.99"},
{"id":31,"first_name":"Lauree","last_name":"Davson","email":"ldavsonu@java.com","gender":"Female","company":"Mynte","role":"Construction Worker","language":"Swahili","ip_address":"67.183.174.75","material_id":"c82d05b1-bb08-4040-8e3b-bfbde6a5cf87","material_name":"Glass","material_cost":"$6.23"},
{"id":32,"first_name":"Sally","last_name":"Jeannaud","email":"sjeannaudv@plala.or.jp","gender":"Female","company":"Bubblemix","role":"Supervisor","language":"Sotho","ip_address":"0.251.216.35","material_id":"ec4589c9-feca-473d-815e-b9b1928c076e","material_name":"Stone","material_cost":"$6.28"},
{"id":33,"first_name":"Ashlen","last_name":"Bradick","email":"abradickw@stanford.edu","gender":"Female","company":"Tazz","role":"Engineer","language":"Tsonga","ip_address":"69.234.119.100","material_id":"82cd31a1-50e0-4d21-b082-f70f2aee7fb3","material_name":"Vinyl","material_cost":"$1.26"},
{"id":34,"first_name":"Phillip","last_name":"Ready","email":"preadyx@apple.com","gender":"Male","company":"Thoughtstorm","role":"Construction Worker","language":"Irish Gaelic","ip_address":"188.24.226.99","material_id":"f24d7de8-e905-43e9-bf7f-f34b026a3da5","material_name":"Granite","material_cost":"$9.29"},
{"id":35,"first_name":"Ruttger","last_name":"Ivanyushin","email":"rivanyushiny@arizona.edu","gender":"Male","company":"Mudo","role":"Construction Worker","language":"Filipino","ip_address":"46.42.141.209","material_id":"2ef1670e-2e14-4393-a665-a835baa65e29","material_name":"Glass","material_cost":"$2.34"},
{"id":36,"first_name":"Bernita","last_name":"Huetson","email":"bhuetsonz@ask.com","gender":"Female","company":"Rhynyx","role":"Estimator","language":"Latvian","ip_address":"130.85.18.197","material_id":"af1edc93-e5c0-41b1-91c8-30e1f65e267a","material_name":"Brass","material_cost":"$4.46"},
{"id":37,"first_name":"Stan","last_name":"Tingey","email":"stingey10@slate.com","gender":"Male","company":"Bluejam","role":"Construction Foreman","language":"Guaran??","ip_address":"134.254.101.84","material_id":"e5bee933-0ecb-477d-9051-9bceb3482efd","material_name":"Granite","material_cost":"$6.21"},
{"id":38,"first_name":"Onfre","last_name":"Rowan","email":"orowan11@home.pl","gender":"Male","company":"Rooxo","role":"Architect","language":"Kazakh","ip_address":"23.127.56.54","material_id":"866bc564-6663-4c51-bc51-b9574acfb32f","material_name":"Stone","material_cost":"$7.09"},
{"id":39,"first_name":"Robinette","last_name":"Cotte","email":"rcotte12@youtu.be","gender":"Female","company":"Photojam","role":"Electrician","language":"Swati","ip_address":"250.59.133.4","material_id":"2382f5f3-cc07-4fad-892c-bdecc454aab8","material_name":"Plastic","material_cost":"$7.55"},
{"id":40,"first_name":"Meggi","last_name":"Dufoure","email":"mdufoure13@newyorker.com","gender":"Female","company":"Tagtune","role":"Construction Expeditor","language":"Quechua","ip_address":"59.255.81.6","material_id":"e4b3d451-a46e-45cf-af1c-1b11d5532fc9","material_name":"Rubber","material_cost":"$5.25"},
{"id":41,"first_name":"Rochester","last_name":"Leirmonth","email":"rleirmonth14@sohu.com","gender":"Male","company":"Browsetype","role":"Subcontractor","language":"Aymara","ip_address":"66.225.233.151","material_id":"92bb09fa-d770-40af-b3a6-31c94b760958","material_name":"Glass","material_cost":"$6.53"},
{"id":42,"first_name":"Jae","last_name":"Willers","email":"jwillers15@joomla.org","gender":"Male","company":"Rooxo","role":"Project Manager","language":"English","ip_address":"214.104.146.231","material_id":"e5ce1234-e81b-4d99-83fa-47186aca7c82","material_name":"Plastic","material_cost":"$2.28"},
{"id":43,"first_name":"Bev","last_name":"Derle","email":"bderle16@unesco.org","gender":"Female","company":"Mudo","role":"Subcontractor","language":"Punjabi","ip_address":"184.151.55.78","material_id":"93db6974-621b-41a0-b9f9-d204236aabc4","material_name":"Plexiglass","material_cost":"$5.87"},
{"id":44,"first_name":"Clarence","last_name":"Gerrie","email":"cgerrie17@chicagotribune.com","gender":"Male","company":"Yakijo","role":"Construction Foreman","language":"Khmer","ip_address":"112.245.135.19","material_id":"209c220f-a2c1-4234-b1c3-c55cc728bc6f","material_name":"Plexiglass","material_cost":"$4.32"},
{"id":45,"first_name":"Pascal","last_name":"Tinkler","email":"ptinkler18@amazonaws.com","gender":"Male","company":"Twinder","role":"Architect","language":"Fijian","ip_address":"204.212.32.110","material_id":"44ef6805-3ef4-42db-9039-542fe1716a12","material_name":"Rubber","material_cost":"$5.22"},
{"id":46,"first_name":"Gordan","last_name":"Mayte","email":"gmayte19@nationalgeographic.com","gender":"Male","company":"Katz","role":"Construction Worker","language":"Amharic","ip_address":"209.248.78.75","material_id":"cd50746c-38c2-4b51-8b69-952bd763f269","material_name":"Stone","material_cost":"$1.11"},
{"id":47,"first_name":"Kincaid","last_name":"Reddell","email":"kreddell1a@nydailynews.com","gender":"Male","company":"Oyonder","role":"Construction Worker","language":"Italian","ip_address":"155.123.187.134","material_id":"6f9480b0-93e2-4a72-969d-e9b05f16ba41","material_name":"Vinyl","material_cost":"$8.18"},
{"id":48,"first_name":"Grantley","last_name":"Fransson","email":"gfransson1b@themeforest.net","gender":"Male","company":"Yabox","role":"Subcontractor","language":"Sotho","ip_address":"187.109.8.71","material_id":"91dab408-401d-4ddc-b2c5-862043ef2932","material_name":"Stone","material_cost":"$7.92"},
{"id":49,"first_name":"Giustino","last_name":"Barabisch","email":"gbarabisch1c@histats.com","gender":"Male","company":"Innotype","role":"Construction Manager","language":"Yiddish","ip_address":"158.123.123.188","material_id":"4a66e07d-98f0-4831-8c32-3c72fa9d85f8","material_name":"Aluminum","material_cost":"$6.12"},
{"id":50,"first_name":"Gretchen","last_name":"Ickovicz","email":"gickovicz1d@microsoft.com","gender":"Bigender","company":"Dynazzy","role":"Supervisor","language":"Finnish","ip_address":"74.182.243.100","material_id":"5870c619-1a63-4514-aec0-f21b2ea650d2","material_name":"Wood","material_cost":"$7.78"},
{"id":51,"first_name":"Dominga","last_name":"Curtis","email":"dcurtis1e@so-net.ne.jp","gender":"Female","company":"Photofeed","role":"Surveyor","language":"Malayalam","ip_address":"2.92.128.227","material_id":"9c8935ad-5175-45e0-8de9-d29564cd6a03","material_name":"Steel","material_cost":"$6.73"},
{"id":52,"first_name":"Ellery","last_name":"Farrah","email":"efarrah1f@yale.edu","gender":"Male","company":"Topicblab","role":"Subcontractor","language":"Burmese","ip_address":"252.143.144.82","material_id":"6ddfe8fb-4b64-4555-886f-5ddfeb4e1698","material_name":"Steel","material_cost":"$3.70"},
{"id":53,"first_name":"Staford","last_name":"Spuner","email":"sspuner1g@dyndns.org","gender":"Male","company":"Gabtune","role":"Electrician","language":"Tajik","ip_address":"202.11.72.105","material_id":"085b1058-c71e-4c40-9534-c35caacb0758","material_name":"Vinyl","material_cost":"$6.62"},
{"id":54,"first_name":"Allyson","last_name":"Tooley","email":"atooley1h@marketwatch.com","gender":"Female","company":"Zoombox","role":"Architect","language":"Hindi","ip_address":"91.16.81.85","material_id":"53ef48d0-4df8-467c-bfcf-6d58f7e88f47","material_name":"Glass","material_cost":"$9.44"},
{"id":55,"first_name":"Maude","last_name":"Cinderey","email":"mcinderey1i@joomla.org","gender":"Female","company":"Wikido","role":"Architect","language":"Haitian Creole","ip_address":"152.175.129.232","material_id":"183f7e03-6a80-4ca0-bfe3-c692dff92332","material_name":"Wood","material_cost":"$4.59"},
{"id":56,"first_name":"Ardenia","last_name":"Parmby","email":"aparmby1j@google.com","gender":"Genderqueer","company":"Topiclounge","role":"Project Manager","language":"Fijian","ip_address":"117.228.50.21","material_id":"e5372198-e187-49a6-b279-d93ac258fbf7","material_name":"Plexiglass","material_cost":"$2.78"},
{"id":57,"first_name":"Ronnica","last_name":"Bouzan","email":"rbouzan1k@google.com.hk","gender":"Female","company":"Babbleset","role":"Construction Foreman","language":"Danish","ip_address":"253.54.192.179","material_id":"b2db5830-9275-43c5-95d8-b78ac39a7169","material_name":"Glass","material_cost":"$8.98"},
{"id":58,"first_name":"Shea","last_name":"Cast","email":"scast1l@senate.gov","gender":"Female","company":"Kare","role":"Construction Expeditor","language":"Thai","ip_address":"198.244.19.157","material_id":"65834079-6110-4a5a-9cda-8e4d903650e4","material_name":"Brass","material_cost":"$8.91"},
{"id":59,"first_name":"Lars","last_name":"Pughe","email":"lpughe1m@flavors.me","gender":"Genderqueer","company":"Midel","role":"Construction Worker","language":"Maltese","ip_address":"100.212.102.127","material_id":"3d447651-92af-4e96-b903-cbf497c4f1a7","material_name":"Brass","material_cost":"$5.34"},
{"id":60,"first_name":"Desdemona","last_name":"Niccols","email":"dniccols1n@ycombinator.com","gender":"Female","company":"Eimbee","role":"Surveyor","language":"Lithuanian","ip_address":"3.240.216.83","material_id":"12c6a221-09ca-4d41-948d-8c364710f4a0","material_name":"Granite","material_cost":"$3.58"},
{"id":61,"first_name":"Matti","last_name":"Rubie","email":"mrubie1o@sohu.com","gender":"Female","company":"Brainlounge","role":"Surveyor","language":"Malagasy","ip_address":"180.68.86.21","material_id":"8ef6605c-c5ff-435c-b597-2b6e689f0743","material_name":"Vinyl","material_cost":"$8.68"},
{"id":62,"first_name":"Bethany","last_name":"Puckinghorne","email":"bpuckinghorne1p@skyrock.com","gender":"Female","company":"Flashset","role":"Supervisor","language":"Papiamento","ip_address":"174.15.19.199","material_id":"0700b7e7-1a30-4f88-80d5-0c492a504cbc","material_name":"Plastic","material_cost":"$8.47"},
{"id":63,"first_name":"Judye","last_name":"Tripney","email":"jtripney1q@odnoklassniki.ru","gender":"Female","company":"Meevee","role":"Project Manager","language":"Zulu","ip_address":"83.31.131.126","material_id":"9af45366-7fa5-4f40-95e1-510602bb882a","material_name":"Wood","material_cost":"$3.36"},
{"id":64,"first_name":"Berke","last_name":"Pipet","email":"bpipet1r@google.pl","gender":"Male","company":"Tekfly","role":"Construction Foreman","language":"Swati","ip_address":"45.43.139.62","material_id":"4504c870-dd7f-4e92-aa8d-53cd45f43a16","material_name":"Aluminum","material_cost":"$1.33"},
{"id":65,"first_name":"Drew","last_name":"Dunbobin","email":"ddunbobin1s@twitter.com","gender":"Male","company":"Twitterworks","role":"Construction Manager","language":"Tok Pisin","ip_address":"19.237.150.212","material_id":"25bb889f-32f0-4ccc-a0bb-fdc5f000bed1","material_name":"Wood","material_cost":"$1.48"},
{"id":66,"first_name":"Morris","last_name":"Petre","email":"mpetre1t@xrea.com","gender":"Male","company":"Riffpath","role":"Construction Worker","language":"Mongolian","ip_address":"42.58.146.77","material_id":"7db93703-38dd-495c-b4a0-917738ba8f85","material_name":"Plastic","material_cost":"$1.71"},
{"id":67,"first_name":"Trudie","last_name":"Thain","email":"tthain1u@house.gov","gender":"Female","company":"Mydeo","role":"Subcontractor","language":"Albanian","ip_address":"166.88.96.75","material_id":"6b72cf13-9daf-4b0d-8535-92a46cb45039","material_name":"Wood","material_cost":"$9.40"},
{"id":68,"first_name":"Sarina","last_name":"Sanchez","email":"ssanchez1v@linkedin.com","gender":"Female","company":"Dynava","role":"Subcontractor","language":"Swati","ip_address":"252.181.41.21","material_id":"8b9f1c3b-ab73-4a03-846c-627a7c609b1d","material_name":"Vinyl","material_cost":"$7.93"},
{"id":69,"first_name":"Lorri","last_name":"Siddall","email":"lsiddall1w@histats.com","gender":"Female","company":"Twitterworks","role":"Surveyor","language":"M??ori","ip_address":"136.120.56.38","material_id":"4a8d490a-b5bc-4354-8fc8-c8365091d3a6","material_name":"Wood","material_cost":"$4.90"},
{"id":70,"first_name":"Sonya","last_name":"Salvin","email":"ssalvin1x@macromedia.com","gender":"Female","company":"Thoughtstorm","role":"Architect","language":"Polish","ip_address":"131.20.207.48","material_id":"1934aabd-bad8-49b5-9484-34cc71a0e525","material_name":"Aluminum","material_cost":"$4.70"},
{"id":71,"first_name":"Ruby","last_name":"Riddett","email":"rriddett1y@jiathis.com","gender":"Male","company":"Feedfish","role":"Construction Foreman","language":"Tajik","ip_address":"170.95.41.228","material_id":"caecba36-fa19-4e99-84e1-c55ee8bbfd5f","material_name":"Wood","material_cost":"$8.02"},
{"id":72,"first_name":"Laure","last_name":"Luppitt","email":"lluppitt1z@xing.com","gender":"Female","company":"Edgeify","role":"Architect","language":"Pashto","ip_address":"130.236.134.236","material_id":"842071a4-739a-4ade-81ad-bff904b849b1","material_name":"Wood","material_cost":"$8.57"},
{"id":73,"first_name":"Crista","last_name":"Heinschke","email":"cheinschke20@cocolog-nifty.com","gender":"Female","company":"Topicblab","role":"Surveyor","language":"Estonian","ip_address":"147.235.60.161","material_id":"432826e1-b32b-4177-be74-e1fb4ec27f16","material_name":"Brass","material_cost":"$1.33"},
{"id":74,"first_name":"Orland","last_name":"Duffill","email":"oduffill21@cnn.com","gender":"Male","company":"Wikizz","role":"Construction Foreman","language":"Spanish","ip_address":"234.87.30.73","material_id":"8eea7eb7-6c85-4b1b-8b60-f865d1bf8d6b","material_name":"Wood","material_cost":"$6.96"},
{"id":75,"first_name":"Sheff","last_name":"McDonand","email":"smcdonand22@wix.com","gender":"Male","company":"Brainsphere","role":"Construction Manager","language":"Gagauz","ip_address":"133.115.60.85","material_id":"76a8d417-4e03-429b-bdd5-1abfaf8df0f3","material_name":"Plexiglass","material_cost":"$5.23"},
{"id":76,"first_name":"Myrtia","last_name":"Allinson","email":"mallinson23@slashdot.org","gender":"Female","company":"Linktype","role":"Construction Manager","language":"Albanian","ip_address":"59.106.226.2","material_id":"e74d9994-5cbb-4f11-b591-9f1c37b04538","material_name":"Wood","material_cost":"$7.59"},
{"id":77,"first_name":"Jacquetta","last_name":"Minocchi","email":"jminocchi24@google.it","gender":"Female","company":"Quire","role":"Project Manager","language":"Chinese","ip_address":"82.102.198.202","material_id":"45b2f56b-415f-4431-8e72-88bd39e57b2b","material_name":"Plexiglass","material_cost":"$9.11"},
{"id":78,"first_name":"Korry","last_name":"De Francisci","email":"kdefrancisci25@ehow.com","gender":"Female","company":"Skyble","role":"Subcontractor","language":"Thai","ip_address":"97.202.24.73","material_id":"5ce26c2b-f674-493b-abb5-510e9e7a0712","material_name":"Stone","material_cost":"$6.95"},
{"id":79,"first_name":"Quinta","last_name":"Corse","email":"qcorse26@soundcloud.com","gender":"Female","company":"Zoovu","role":"Architect","language":"New Zealand Sign Language","ip_address":"139.58.91.150","material_id":"254a95c7-c891-4fb6-a1d2-a5f4f12c4582","material_name":"Granite","material_cost":"$2.58"},
{"id":80,"first_name":"Norah","last_name":"Gee","email":"ngee27@weibo.com","gender":"Female","company":"Izio","role":"Project Manager","language":"Quechua","ip_address":"183.103.115.48","material_id":"7489bae0-dcfd-4715-8797-14b34be3f632","material_name":"Steel","material_cost":"$1.32"},
{"id":81,"first_name":"Vyky","last_name":"Knowling","email":"vknowling28@storify.com","gender":"Bigender","company":"Zoomcast","role":"Surveyor","language":"Yiddish","ip_address":"86.66.45.224","material_id":"ff02a3ec-aa8b-4d3c-bbe5-44d9edc2fde0","material_name":"Steel","material_cost":"$5.89"},
{"id":82,"first_name":"Raul","last_name":"Slide","email":"rslide29@prlog.org","gender":"Male","company":"Skalith","role":"Supervisor","language":"New Zealand Sign Language","ip_address":"72.98.220.216","material_id":"c08a3455-cfe4-4f38-b3d5-376d3b4f548c","material_name":"Plexiglass","material_cost":"$4.18"},
{"id":83,"first_name":"Roddie","last_name":"Tweedlie","email":"rtweedlie2a@liveinternet.ru","gender":"Male","company":"Mynte","role":"Construction Expeditor","language":"Croatian","ip_address":"168.252.62.204","material_id":"6b8c7d5a-1b0a-46f6-a74b-561531846c9e","material_name":"Steel","material_cost":"$2.07"},
{"id":84,"first_name":"Shawn","last_name":"Byrne","email":"sbyrne2b@mac.com","gender":"Male","company":"Tagcat","role":"Surveyor","language":"Indonesian","ip_address":"89.9.168.130","material_id":"b1a8960e-29f9-4c27-9184-382a4a5c1db3","material_name":"Plexiglass","material_cost":"$9.51"},
{"id":85,"first_name":"Dimitri","last_name":"McKechnie","email":"dmckechnie2c@dot.gov","gender":"Male","company":"Twinte","role":"Electrician","language":"Kazakh","ip_address":"208.111.211.131","material_id":"6496ff7e-bb8d-4234-99a9-5f98512bde33","material_name":"Rubber","material_cost":"$3.85"},
{"id":86,"first_name":"Zachery","last_name":"Powdrill","email":"zpowdrill2d@instagram.com","gender":"Male","company":"Oloo","role":"Surveyor","language":"Belarusian","ip_address":"120.129.38.85","material_id":"1d188db5-9db6-4c29-a0f2-b305bc2eaec9","material_name":"Plexiglass","material_cost":"$3.92"},
{"id":87,"first_name":"Arabele","last_name":"Gwyllt","email":"agwyllt2e@yahoo.com","gender":"Female","company":"Gigaclub","role":"Subcontractor","language":"Yiddish","ip_address":"150.119.102.11","material_id":"d74b4497-3ee2-425d-aeaa-4fde7aee4fcd","material_name":"Plastic","material_cost":"$5.29"},
{"id":88,"first_name":"Rip","last_name":"Handrock","email":"rhandrock2f@ow.ly","gender":"Male","company":"Oyoloo","role":"Electrician","language":"M??ori","ip_address":"128.157.196.29","material_id":"22e0cf99-2fe8-495f-9d3f-9e294dcd4b6b","material_name":"Steel","material_cost":"$9.81"},
{"id":89,"first_name":"Mick","last_name":"Cheevers","email":"mcheevers2g@fastcompany.com","gender":"Male","company":"Zooxo","role":"Architect","language":"Kashmiri","ip_address":"141.41.129.51","material_id":"e4546bcd-b1c7-4213-a000-151f4e347ad2","material_name":"Stone","material_cost":"$9.62"},
{"id":90,"first_name":"Lorianne","last_name":"Braffington","email":"lbraffington2h@alexa.com","gender":"Non-binary","company":"Blogtags","role":"Estimator","language":"Pashto","ip_address":"51.67.134.235","material_id":"07a829e4-4897-4e46-bb7d-065ba7301772","material_name":"Plastic","material_cost":"$5.26"},
{"id":91,"first_name":"Wake","last_name":"Brobeck","email":"wbrobeck2i@fastcompany.com","gender":"Male","company":"Oyonder","role":"Supervisor","language":"Lithuanian","ip_address":"39.136.229.56","material_id":"7929fb6d-85e3-4421-b7d2-c15afb2c9abc","material_name":"Wood","material_cost":"$1.68"},
{"id":92,"first_name":"Ritchie","last_name":"Sidsaff","email":"rsidsaff2j@msu.edu","gender":"Male","company":"Mymm","role":"Estimator","language":"Northern Sotho","ip_address":"34.221.147.35","material_id":"219a77e3-2655-43a5-af63-b825d3f427ac","material_name":"Wood","material_cost":"$5.45"},
{"id":93,"first_name":"Archibold","last_name":"Culbert","email":"aculbert2k@deliciousdays.com","gender":"Male","company":"Mycat","role":"Supervisor","language":"Zulu","ip_address":"164.255.151.203","material_id":"068c3ca5-baf5-4c97-b58f-213c3de584f8","material_name":"Plastic","material_cost":"$9.34"},
{"id":94,"first_name":"Barnaby","last_name":"Bonnette","email":"bbonnette2l@ameblo.jp","gender":"Male","company":"Mydeo","role":"Subcontractor","language":"French","ip_address":"46.237.195.150","material_id":"89638551-ba10-4c22-92e1-7896d123ff9b","material_name":"Steel","material_cost":"$4.49"},
{"id":95,"first_name":"Umeko","last_name":"Joynt","email":"ujoynt2m@ocn.ne.jp","gender":"Female","company":"Mynte","role":"Surveyor","language":"Somali","ip_address":"152.51.101.114","material_id":"04b1560b-5f20-4458-8638-1f4a3721a465","material_name":"Glass","material_cost":"$7.73"},
{"id":96,"first_name":"Cathyleen","last_name":"Zahor","email":"czahor2n@ask.com","gender":"Female","company":"Gabspot","role":"Electrician","language":"Macedonian","ip_address":"71.113.253.216","material_id":"9ccdf18d-769f-4b48-aa55-a999fcdb689d","material_name":"Plastic","material_cost":"$4.68"},
{"id":97,"first_name":"Sandy","last_name":"Faull","email":"sfaull2o@miitbeian.gov.cn","gender":"Male","company":"Browsetype","role":"Subcontractor","language":"Malayalam","ip_address":"42.40.46.41","material_id":"304133df-6fb8-46a3-b7c8-64330a7be73b","material_name":"Steel","material_cost":"$7.94"},
{"id":98,"first_name":"Ewan","last_name":"Fishbourn","email":"efishbourn2p@usgs.gov","gender":"Male","company":"Mydeo","role":"Engineer","language":"Mongolian","ip_address":"105.58.223.152","material_id":"1e8d0e8c-ce5d-48bf-9f80-26fc317989f1","material_name":"Aluminum","material_cost":"$7.66"},
{"id":99,"first_name":"Wye","last_name":"Agates","email":"wagates2q@imgur.com","gender":"Male","company":"Mydo","role":"Engineer","language":"Chinese","ip_address":"126.66.78.20","material_id":"01cc9770-63b9-442a-924d-a191320152b0","material_name":"Vinyl","material_cost":"$5.82"},
{"id":100,"first_name":"Charisse","last_name":"Gronow","email":"cgronow2r@techcrunch.com","gender":"Genderqueer","company":"Skalith","role":"Engineer","language":"Estonian","ip_address":"11.254.82.109","material_id":"72109e6b-3513-4614-9830-88b6a7c06945","material_name":"Granite","material_cost":"$7.66"},
{"id":101,"first_name":"Melantha","last_name":"Ropkes","email":"mropkes2s@squarespace.com","gender":"Female","company":"Divanoodle","role":"Engineer","language":"Nepali","ip_address":"12.50.207.35","material_id":"1ab4e3f1-c6ac-4d28-b386-5b81b79a5475","material_name":"Wood","material_cost":"$5.86"},
{"id":102,"first_name":"Emlyn","last_name":"Knightley","email":"eknightley2t@unc.edu","gender":"Female","company":"Jatri","role":"Subcontractor","language":"Italian","ip_address":"65.133.55.39","material_id":"32658747-44a8-4a72-aa77-03c20beb1622","material_name":"Rubber","material_cost":"$4.14"},
{"id":103,"first_name":"Elmore","last_name":"Southers","email":"esouthers2u@dailymail.co.uk","gender":"Male","company":"Abatz","role":"Construction Worker","language":"Lithuanian","ip_address":"210.55.155.81","material_id":"6f87d0c5-3a5d-462c-84f2-52745b9d98d2","material_name":"Wood","material_cost":"$3.57"},
{"id":104,"first_name":"Domenico","last_name":"Faulder","email":"dfaulder2v@imgur.com","gender":"Male","company":"Zoomcast","role":"Electrician","language":"Catalan","ip_address":"171.94.103.149","material_id":"48372f14-877d-48e7-86ed-056e55f2661d","material_name":"Stone","material_cost":"$1.16"},
{"id":105,"first_name":"Sondra","last_name":"Fairham","email":"sfairham2w@webnode.com","gender":"Agender","company":"Twitterbridge","role":"Construction Expeditor","language":"Italian","ip_address":"188.35.175.130","material_id":"3c0bc1f9-3c29-4641-84e0-717d7c45d4f7","material_name":"Brass","material_cost":"$6.14"},
{"id":106,"first_name":"Pattie","last_name":"Bampkin","email":"pbampkin2x@japanpost.jp","gender":"Male","company":"Tagcat","role":"Construction Worker","language":"Gujarati","ip_address":"68.195.54.206","material_id":"11b91da1-3233-43d3-9425-fcf500de0815","material_name":"Aluminum","material_cost":"$2.13"},
{"id":107,"first_name":"Cleopatra","last_name":"Circuitt","email":"ccircuitt2y@engadget.com","gender":"Female","company":"Tagopia","role":"Architect","language":"Latvian","ip_address":"254.4.9.31","material_id":"4755fef8-7991-4d78-9c41-59778a664b0c","material_name":"Stone","material_cost":"$8.26"},
{"id":108,"first_name":"Bel","last_name":"Goodyer","email":"bgoodyer2z@pinterest.com","gender":"Female","company":"Thoughtmix","role":"Engineer","language":"Azeri","ip_address":"74.207.116.232","material_id":"b8e33a70-0b71-4594-8597-c5f4f5e11e8e","material_name":"Granite","material_cost":"$9.95"},
{"id":109,"first_name":"Loni","last_name":"Capps","email":"lcapps30@cbslocal.com","gender":"Female","company":"Topicshots","role":"Project Manager","language":"Romanian","ip_address":"2.179.157.115","material_id":"5ee90387-c415-4102-bf29-b8352dc012be","material_name":"Granite","material_cost":"$3.34"},
{"id":110,"first_name":"Bernadette","last_name":"Cicchitello","email":"bcicchitello31@meetup.com","gender":"Female","company":"Dazzlesphere","role":"Construction Foreman","language":"Estonian","ip_address":"219.64.79.74","material_id":"9d1b6ec7-b7f1-486e-9ac3-46bf70d562f1","material_name":"Aluminum","material_cost":"$5.25"},
{"id":111,"first_name":"Ceciley","last_name":"Mathouse","email":"cmathouse32@list-manage.com","gender":"Female","company":"Oyoloo","role":"Engineer","language":"Tajik","ip_address":"149.73.26.220","material_id":"fc102c57-5eba-4f84-b3c8-6c7fa8aa2568","material_name":"Aluminum","material_cost":"$2.78"},
{"id":112,"first_name":"Sarah","last_name":"Spancock","email":"sspancock33@aboutads.info","gender":"Female","company":"Kwimbee","role":"Construction Manager","language":"Oriya","ip_address":"213.104.206.212","material_id":"9f7abc6e-3030-4aca-b92c-e1188f1ece5a","material_name":"Stone","material_cost":"$7.11"},
{"id":113,"first_name":"Selig","last_name":"Pavis","email":"spavis34@imageshack.us","gender":"Male","company":"Rhybox","role":"Engineer","language":"M??ori","ip_address":"59.150.131.8","material_id":"894bda98-282b-4acb-abb4-4b25bb4d259f","material_name":"Wood","material_cost":"$4.80"},
{"id":114,"first_name":"Pacorro","last_name":"Pamplin","email":"ppamplin35@timesonline.co.uk","gender":"Male","company":"Gabcube","role":"Supervisor","language":"Gujarati","ip_address":"34.171.239.27","material_id":"c776ebc1-7cc5-4dad-8168-a7c0d0fbe866","material_name":"Rubber","material_cost":"$7.27"},
{"id":115,"first_name":"Orton","last_name":"Taye","email":"otaye36@tripadvisor.com","gender":"Male","company":"Mymm","role":"Project Manager","language":"Thai","ip_address":"1.35.209.245","material_id":"eec97f9d-28e5-4c7e-9b15-836d058f2711","material_name":"Steel","material_cost":"$2.60"},
{"id":116,"first_name":"Daryn","last_name":"Grimm","email":"dgrimm37@macromedia.com","gender":"Agender","company":"Oyondu","role":"Engineer","language":"Moldovan","ip_address":"211.246.135.204","material_id":"0c8bdf76-c277-4f02-aa5d-a93237ec8068","material_name":"Plastic","material_cost":"$3.22"},
{"id":117,"first_name":"Aila","last_name":"McAdam","email":"amcadam38@apache.org","gender":"Female","company":"Jamia","role":"Supervisor","language":"Hungarian","ip_address":"66.239.123.51","material_id":"8b1d37fd-5b39-4cb8-b55c-1a4a67ae45cb","material_name":"Aluminum","material_cost":"$8.64"},
{"id":118,"first_name":"Samaria","last_name":"Hazeman","email":"shazeman39@mail.ru","gender":"Female","company":"Zoombeat","role":"Construction Expeditor","language":"Swedish","ip_address":"229.10.62.189","material_id":"47af889f-d00d-4b70-9470-2de3c2e8e3fe","material_name":"Glass","material_cost":"$2.66"},
{"id":119,"first_name":"Sidonnie","last_name":"Attaway","email":"sattaway3a@amazon.de","gender":"Female","company":"Eire","role":"Subcontractor","language":"French","ip_address":"70.177.128.157","material_id":"4fd0c810-53ab-4906-b0cd-f268340b4389","material_name":"Stone","material_cost":"$1.70"},
{"id":120,"first_name":"Kim","last_name":"Bardey","email":"kbardey3b@infoseek.co.jp","gender":"Non-binary","company":"Meeveo","role":"Electrician","language":"Catalan","ip_address":"0.189.17.69","material_id":"f91822a4-b0e3-4e53-9b13-f87e712f4e18","material_name":"Aluminum","material_cost":"$8.28"}]
},{}],3:[function(require,module,exports){
const { getAllContractors, getContractorById } = require("./api/contractor");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, { id, first_name, last_name, email, gender, company, role, ip_address, material_id, material_name, material_cost }) =>
      acc +
      `<tr>
        <td>${id}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${company}</td>
        <td>${role}</td>
        <td>${ip_address}</td>
        <td>${material_id}</td>
        <td>${material_name}</td>
        <td>${material_cost}</td>
    </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};


// const withFilters = Boolean(window.location.search);

// if (withFilters) {
//     const params = new URLSearchParams(window.location.search);
//     term = params.get(`filters`);
//     valueTerm = params.get(`input-value`).toLowerCase();
//     cost_from = params.get(`input-cost-from`).replace("$","");
//     cost_to = params.get(`input-cost-to`).replace("$","");
//     material_type = params.get(`filters_material`).toLowerCase();
//     const inputControl = document.getElementById(`input-value-term`);
//     inputControl.value = valueTerm;
// }

// if(term === `id`) {
//   getContractorById(valueTerm).then(({ data }) => renderTable(data));
// } else {
//   getAllContractors(term, cost_from, cost_to, material_type, valueTerm).then(({ data }) => renderTable(data));
// }
getAllContractors().then(({ data }) => renderTable(data));  

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.filters.value;

  const cost_from = event.target.input_cost_from.value;
  const cost_to = event.target.input_cost_to.value;
  const material_type = event.target.filters_material.value;
  const valueTerm = event.target.input.value;
  
  if(term === `id`) {
    getContractorById(valueTerm).then(({ data }) => renderTable(data));
  } else {
    getAllContractors(term, cost_from == "" ? "" : cost_from , cost_to, material_type.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
  }
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAllContractors().then(({ data }) => renderTable(data));
};

document.getElementById("myForm").addEventListener("submit", onSubmit);
document.getElementById("myForm").addEventListener("reset", onReset);

},{"./api/contractor":1}]},{},[3]);
