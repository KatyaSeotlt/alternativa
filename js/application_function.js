function victoryExchangeFunc() {
	var _this=this;
	
	var requestnow = 0; //есть ли сейчас запрос
	var activeCitySearch='';//объект последнего поиска города. 
//функция проверки есть авториирован ли пользователь Если нет,
   this.isLogin = function () {
     	return !(window.localStorage.getItem("access_token")=="undefined" || window.localStorage.getItem("access_token")==null);
    };

//функция распределения данных с параметром type = getpath, и получения нужного пути с параметром type = setdata
//responseData - может принимать значение ID
this.route = function(type, data, responseData){
    
 if(data=='list'){if(type=='getpath'){return{path:'list', method:'GET'};}else{search=1;_this.routesshow(responseData,'#listblocks');}}
 if(data=='map_points'){if(type=='getpath'){return{path:'map/points',method:'POST'};}else{_this.createMap(responseData);}}
 if(data=='person'){if(type=='getpath'){return{path:'settings/profile/edit',method:'GET'};}else{_this.setUserProfile(responseData);}}

 if(data=='orders'){if(type=='getpath'){return{path:'orders',method:'GET'};}else{search=1;_this.routesshow(responseData,'#routesblocks');}}
 if(data=='map_detail'){if(type=='getpath'){return{path:'map/points/info', method:'POST'};}else{map_Routes_Detail=responseData;_this.mapRoutesDetail(responseData);}} 
 if(data=='login_first'){if(type=='getpath'){return{path:'login/', method:'POST'}; }else{
	_this.openfirst(responseData);
	}}
 if(data=='firstperson'){if(type=='getpath'){return{path:'settings/profile/edit',method:'GET'};}else{userProfileData=responseData; }}
 if(data=='subscriptions'){if(type=='getpath'){return{path:'settings/profile/edit',method:'GET'};}else{userProfileData=responseData;
 _this.showSubscribe();   
 }}
 if(data=='getmycars'){if(type=='getpath'){return{path:'settings/profile/edit',method:'GET'};}else{userProfileData=responseData;
 _this.carsshow();   
 }}
 
 if(data=='login'){if(type=='getpath'){return{path:'login/',method:'POST'};}else{islogins=true;}} 
 if(data=='activationuserlogin'){if(type=='getpath'){return{path:'resend/',method:'POST'};}else{showlog(responseData);}}
 if(data=='cities_search'){if(type=='getpath'){return{path:'cities/'+responseData,method:'GET'};}else{cityIsSearched=0;_this.createDivCity(responseData);}} 
 if(data=='person_edit'){if(type=='getpath'){return{path:'settings/profile/edit', method:'POST'};}else{}}
 if(data=='map'){if(type=='getpath'){return{path:'map',method:'POST'}; }else{myApp.closePanel();_this.createMap(responseData);}} 
 if(data=='list_search'){if(type=='getpath'){return{path:'list',method:'POST'};}else{myApp.closePanel();search=0;_this.routesshow(responseData,'#listblocks');}}
 if(data=='car_types'){if(type=='getpath'){return{path:'settings/cars/types',method:'GET'};}else{car_types=responseData;vicFunc.carsshow();}} 
 if(data=='cargo_types'){if(type=='getpath'){return{path:'settings/cargo/types',method:'GET'};}else{cargo_types=responseData;}} 
 if(data=='payment_types'){if(type=='getpath'){return{path:'settings/payment/types',method:'GET'};}else{payment_types=responseData;}} 
 if(data=='loading_types'){if(type=='getpath'){return{path:'settings/loading/types',method:'GET'};}else{loading_types=responseData;}}
 if(data=='car_create'){if(type=='getpath'){return{path:'settings/cars/create',method:'POST'};}else{_this.savecardata(responseData);vicFunc.carsshow();}} 
 if(data=='tickets'){if(type=='getpath'){return{path:'tickets-list',method:'GET'};}else{_this.ticketThemeCreate(responseData);}}
 if(data=='create_subscriptions'){if(type=='getpath'){return{path:'settings/subscriptions/create',method:'POST'};}else{_this.addSubscriptions(responseData);}} 
 
if(responseData!==undefined){
 if(data=='callback'){if(type=='getpath'){return{path:responseData+'/callback',method:'POST'};}else{}}  
 if(data=='orders_nextstate'){if(type=='getpath'){return{path:'orders/'+responseData+'/nextstate',method:'POST'};}else{}}
 if(data=='ticket_view'){if(type=='getpath'){return{path:'tickets-list/'+responseData+'/view',method:'GET'};}else{_this.ticketThemeView(responseData);}} 
 if(data=='ticket_message'){if(type=='getpath'){ return {path:'tickets-list/'+responseData+'/message', method:'POST'}; }else{_this.ticket_message(responseData);}} 
 if(data=='ticket_close'){if(type=='getpath'){ return {path:'tickets-list/'+responseData+'/close', method:'POST'}; }else{}} 
 if(data=='ticket_order'){if(type=='getpath'){ return {path: responseData+'/ticket', method:'POST'}; }else{	myApp.closeModal('.popup-addticket');_this.openInfoPopup('Тикет создан');}} 
 if(data=='delete_subscriptions'){if(type=='getpath'){ return {path:'settings/subscriptions/'+responseData+'/delete', method:'DELETE'}; }else{ }} 
 if(data=='enable_subscriptions'){if(type=='getpath'){ return {path:'settings/subscriptions/'+responseData+'/enable', method:'POST'}; }else{ }}
 if(data=='car_delete'){if(type=='getpath'){return {path:'settings/cars/'+responseData+'/delete', method:'DELETE'};}else{}}  
 if(data=='enable_cars'){if(type=='getpath'){return {path:'settings/cars/'+responseData+'/enable', method:'POST'};}else{}}    
 if(data=='car_edit'){if(type=='getpath'){ return {path:'settings/cars/'+responseData+'/edit', method:'POST'}; }else{}}
 if(data=='get_car_edit'){if(type=='getpath'){ return {path:'settings/cars/'+responseData+'/edit', method:'GET'}; }else{ _this.changeCar(responseData);} }    
 if(data=='addtosubscriptions'){if(type=='getpath'){ return {path: responseData+'/addtosubscriptions', method:'POST'};}else{_this.openInfoPopup('Маршрут добавлен в подписки');}}
 if(data=='rateoffer'){if(type=='getpath'){ return {path: responseData+'/rateoffer', method:'POST'}; }else{_this.openInfoPopup('Заявка направлена оператору');}}
 if(data=='routerequest'){if(type=='getpath'){ return {path: responseData+'/routerequest', method:'POST'}; }else{_this.openInfoPopup('Заявка направлена оператору');}}
 if(data=='callback'){if(type=='getpath'){ return {path: responseData+'/callback', method:'POST'}; }else{_this.openInfoPopup('Заявка направлена оператору');}} 
} 
};


//функция получения данных с сервера
    /*
	this.login=function() {
	
		var data={phone: window.localStorage.getItem("login"), password:  window.localStorage.getItem("password")};
		 
		var header = {'Accept':'application/json', 'X-Requested-With':'XMLHttpRequest'}; 
		 
		var xhr = $$.ajax({
                method: t.method,
                url: serverpath+t.path,
                crossDomain: true,
				dataType: 'json',
                headers: header,
                contentType: 'application/x-www-form-urlencoded', // 'application/json',
                data: data,
                error: function (xhr) {
					
					showlog(xhr);
					
				},
				success: function (data) {
				
					showlog(data);
				
				},
		});
	
	},
	*/
	
	this.getdataserver=function(parent, data, variable) {
        
        var t = _this.route('getpath', parent, variable);
	//	showlog(requestnow); showlog(access_token); showlog(t.path);
		
		/*
		if(!access_token) {
		
		    _this.login();
		
		}
		*/
		
		if(requestnow==1 && (parent!=='login' || parent!=='login_first')) {

            /*showlog(parent);*/

            _this.tryes=_this.tryes+1;

            if(_this.tryes>3) {

                requestnow=0;

            }

            setTimeout(function() { _this.getdataserver(parent, data, variable) }, 2000);

        }

        else {
           
            requestnow=1;
           
            var t = _this.route('getpath', parent, variable);
           
            if (data === undefined) {
                data = '';
            }
 
           if(parent!=='login' && parent!=='login_first') {
               
               lastrequest=parent;

               lastrequestdata=data;

               lastrequestvariable=variable;
               
               var header = {Authorization:window.localStorage.getItem("access_token"), 'Accept':'application/json', 'X-Requested-With':'XMLHttpRequest'};
			   
            }
            else {
                var header = {'Accept':'application/json', 'X-Requested-With':'XMLHttpRequest'};
            }

            myApp.showIndicator();

            var xhr = $$.ajax({
                method: t.method,
                url: serverpath+t.path,
                crossDomain: true,
				dataType: 'json',
                headers: header,
                contentType: 'application/x-www-form-urlencoded', // 'application/json',
                data: data,
				error: function (xhr) {

                    
				showlog('error - '+t.path);
                            showlog(xhr);
					myApp.hideIndicator();
					requestnow=0;
					if(!(xhr.status==500 || xhr.status==401 || xhr.status==400 || xhr.status==0) ) {
						
                        if((parent=='login' || parent=='login_first')) {
							
                            msg=JSON.parse(decodeURI(xhr.responseText)); 

                            window.localStorage.setItem("access_token", 'Bearer '+msg.access_token);

                            if(lastrequest!=='') {

                                _this.getdataserver(lastrequest,lastrequestdata,lastrequestvariable);

                                lastrequest='';
                            }
                        }
                        else {
			   window.localStorage.setItem("access_token", xhr.getResponseHeader('Authorization'));
                     
                        }
                    }else{
                      window.localStorage.clear();
                     myApp.closePanel();
                     
                     mainView.router.loadPage("index.html");
                     _this.openInfoPopup('Связь с сервером прервалась');
					}


                  if(xhr.status==200) {

                        var responseData ='';
                        if(xhr.responseText!='') {

                           var responseData = JSON.parse(xhr.responseText);
						   
                         }

                        _this.route('setdata',parent,responseData);
                    }

                    else if(xhr.status==422) {

                        msg=JSON.parse(decodeURI(xhr.responseText));

                        var html='';

                        for (var i in msg) {
                            html=html+'<br>'+msg[i][0];
                        }

                        $$('#entererror').html(html);

                        myApp.popup('.popup-wrongpass');
                    }

				   if(parent=='login_first' && xhr.status==401 ) {
                        _this.login_first_error(xhr);
                    }

                    if(xhr.status>=400 && parent=='cities_search') {

                        myApp.hideIndicator();

                        cityIsSearched=0;

                    }

                },

                success: function (data) {

                   showlog('success - '+t.path);	
					
		      myApp.hideIndicator();
                  
                   
                     var responseData = data;
			requestnow=0;
                     
                    if(responseData.access_token!=undefined) {						
			window.localStorage.setItem("access_token", 'Bearer '+responseData.access_token);
                      }
                    else {
			window.localStorage.setItem("access_token", xhr.getResponseHeader('Authorization'));
                    }                  
                    vicFunc.route('setdata',parent,responseData);
                   
                }

            });

            if(t.method=='DELETE') {

               requestnow=0;

            }
        }
    };

this.ticketThemeView = function (responseData){
	var html='';
	var messages=responseData.messages;
	  for (var theme in messages) {
		var className='';
		if(messages[theme].operator_id !== null){ className='operator'; }
		if(messages[theme].user_id !== null){ className='user'; }
		//if(theme % 2 == 1 ){className='user'; }else{className='operator'; }
		html=html+'<div class="baloon-block '+className+'" id="baloon'+messages[theme].id+'">'+
		'<div class="messages">'+messages[theme].message+'</div>'+
		'<div class="time">'+_this.getmyDateFormat(messages[theme].created_at)+'</div>'+
		'</div>';
	  }
	$$('#themeid').val(responseData.id);
	 $$('#message-container').html(html);
	 $$('#theme-screen').hide();
	 $$('#messages-screen').show();
	 var sh=0;
	 $$('#message-container').children().each(function(indx, element){
		sh=sh+$$(element).outerHeight();
		} ); 
	$$('#message-container').scrollTop(sh); 
	$$('.theme-tab').removeClass('active');
	$$('.messages-tab').addClass('active');	
};

/* подсказка города */
this.createDivCity = function (responseData){
	var html='';
	for (var key in responseData.items){
	 html=html+'<div class="cityBlock" id="cityID'+responseData.items[key].id+'">'+
		'<div class="namecity" id="namecity'+responseData.items[key].id+'">'+responseData.items[key].CityName+'</div>'+
		'<div class="nameregion" id="nameregion'+responseData.items[key].id+'">'+responseData.items[key].RegionName+'</div>'+
		'</div>';
		if(_this.activeCitySearch.val() == responseData.items[key].CityName){
			var tid=_this.activeCitySearch.attr('id');
			$$('#'+tid+'_id').val(responseData.items[key].id);
			$$('#'+tid).val(responseData.items[key].CityName);
			$$('.region_'+tid).text(responseData.items[key].RegionName);
			$$('#cities').css({display: 'none', zIndex: '-1'}); 
		}
	}
	$$('#cities').html(html);
	var coords=_this.activeCitySearch[0].getBoundingClientRect();
	//showlog(coords);
	$$('.cityBlock').click(function(){
		var tid=_this.activeCitySearch.attr('id');
		var idcity=$$(this).attr('id').replace('cityID', "");
		var name=$$('#namecity'+idcity).text();
		var region=$$('#nameregion'+idcity).text();
		$$('#'+tid+'_id').val(idcity);
		$$('#'+tid).val(name);
		$$('.region_'+tid).text(region);
		$$('#cities').css({display: 'none', zIndex: '-1'}); 
		});
	 $$('#cities').css({left: coords.left + "px", top: coords.bottom + "px", display: 'block', zIndex: '12510'}); 
};

this.ticketThemeCreate = function (responseData){
	var html='';
	var className= new Array('close', 'new', 'answered');
	  for (var theme in responseData) {
              count_message=0;
              if(responseData[theme].messages_count!=undefined){count_message=responseData[theme].messages_count;}
		html=html+'<div class="theme-block" id="theme'+responseData[theme].id+'">'+
		'<div class="themeico '+className[responseData[theme].state_id]+'">'+count_message+'</div><div class="themesubject">'+responseData[theme].subject.substr(0,28)+'<span>'+responseData[theme].subject.substr(0,30)+'</span></div>'+
		'</div>';
	  }
	
	 $$('#theme-screen').html(html);
	 $$('#messages-screen').hide();
	 $$('#theme-screen').show();
	$$('.messages-tab').removeClass('active');
	$$('.theme-tab').addClass('active');
	
	  $$('.theme-block').on('click', function () {
	     var theme_id=$$(this).attr('id').replace('theme', '');		
		 if(theme_id!==undefined){			
		 _this.getdataserver('ticket_view','', theme_id);
		 }
		});
};
 this.openInfoPopup = function (name) { 
  $$('#msg-info-popup').html(name);
  myApp.popup('.popup-info');
 };
this.createMap = function (responseData) {
    var rdata=responseData;
    if(responseData!==undefined){
  ymaps.ready(function () {    
     ymaps.geolocation.get().then(function (res) {

   lat=res.geoObjects.position[0];
   lng=res.geoObjects.position[1];
   if(myMap===false || $$('#map').html()==''){
        myMap = new ymaps.Map("map", {
            center: [lat, lng],
            zoom: 9,
            controls: ['smallMapDefaultSet']
        });
   }else{

	myMap.geoObjects.removeAll();
     	myMap.geoObjects.remove(routeApp);
	}
   
	//	myMap.setCenter([lat, lng], 9);
	  selfPosition = new ymaps.GeoObject({
        geometry: {
          type: "Point",
		  preset:'islands#blueCircleDotIcon',
          coordinates: [lat, lng] // координаты точки
       }
       });
	myMap.geoObjects.add(selfPosition); 
      var myGeoObject = new ymaps.GeoObject({options:{fillColor:'00000000'}});
      myMap.geoObjects.add(myGeoObject);
      var myObjectManager = new ymaps.ObjectManager({ clusterize: true });

myObjectManager.objects.options.set({
    preset: 'islands#darkOrangeCircleDotIconWithCaption',
    hasBalloon: false,
    zIndex: 500
});

    if(subscriptionsfrom!==''){
	     routeApp=new ymaps.route([subscriptionsfrom, subscriptionsto]);           
           routeApp.then(
                function (route) {
                   route.options.set("mapStateAutoApply", true);
				    myMap.geoObjects.add(route);
                   
                  },
                function (error) {
                   // showlog(error.message);
                }
            );
        }

      var myObjects = [];
    if(responseData.length>0){        
        for (var i = 0, l = responseData.length; i < l; i++) {
            myObjects.push({
                type: 'Feature',
                id: responseData[i].orders_id,
                geometry: {
                    type: 'Point',
                    coordinates: [responseData[i].Latitude, responseData[i].Longitude]
                }
            });
        }
    }
    myObjectManager.options.set('geoObjectOpenBalloonOnClick', false);
	myObjectManager.clusters.options.set({
    preset: 'islands#invertedDarkOrangeClusterIcons',
    hasBalloon: false,
    zIndex: 500
});	

	
  myObjectManager.clusters.events.add('click', function (e) {
	var objects =  e.get('target')._overlaysById[e.get('objectId')]._data.features;
	var objArr=[];
	for(var i in objects){
	objArr.push(objects[i].id);		
	}
    vicFunc.getdataserver('map_detail', {orders_ids:objArr} );    
});
  myObjectManager.objects.events.add('click', function (e) {
    vicFunc.getdataserver('map_detail', {orders_ids:[e.get('objectId')]} ); 
});  
        myObjectManager.add(myObjects);        
        myMap.geoObjects.add(myObjectManager);  
		}, function (e) {
			//showlog(e);
		});
    });
    }
if(userProfileData==false){ 
     vicFunc.getdataserver('firstperson','');
   }
 }; 

/*преобразование даты*/
    this.getmyDateFormat = function (str_date) {
		var time = new Date(str_date);
		var month=["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
		formateddate=time.getDate()+ ' '+month[time.getMonth()];
		return formateddate;
	};
/*добавление в массив новой машины */
this.savecardata=function(responseData){
	var car=myApp.formToJSON($$('form#add-car'));
	car.id=responseData.id;
	car.enabled=1;
	userProfileData.cars.push(car);
	};	
	
/*отображение машин */
 this.carsshow = function(){
	showlog(userProfileData.cars); 
   if(userProfileData.cars==undefined){
       
     vicFunc.getdataserver('getmycars','');
   }else{
        var carList = [];
       carList = userProfileData.cars;

    var carHtml = '';
    var enablesname=new Array('Выключена', 'Включена');
	 var classname=new Array('disabled', 'enabled');
    for (var car in carList) {

        carHtml = carHtml + '<div class="carblock ' + classname + '" id="car' + carList[car].id + '">'+
        '<div class="header">'+
         '<div class="carNumber car_code">' + carList[car].car_code + '</div>'+
         '<div class="region region_code">' + carList[car].region_code + '</div>'+
         '<div class="status"><div class="label" id="enabled_cars'+carList[car].id+'">' + enablesname[ carList[car].enabled ] +'</div>'+
          '<div class="item-input">' +
                '<label class="label-switch"><input type="checkbox" class="enabled_cars" name="' + carList[car].id + '" ';
                if( carList[car].enabled ==1){carHtml = carHtml +   'checked="checked"';}
                 carHtml = carHtml + '><div class="checkbox"></div></label>' +     
         '</div></div>' +
        '</div>'+
        '<div class="body">'+ 
          '<div class="bodyType-name type-name">Tип кузова</div><div class="bodyType type-value car_type_id">' + car_types[carList[car].car_type_id] + '</div>'+ 
        '</div>'  +
        '<div class="body block2">'+ 
         '<div><div class="tonnage-name type-name">Грузоподъемность</div><div class="tonnage type-value carrying">' + carList[car]['carrying'] + '</div></div>'+
         '<div><div class="bodyVolume-name type-name">Объем кузова</div><div class="bodyVolume type-value volume">' + carList[car]['volume'] + '</div></div>'+
          '</div>'+
           '<div class="body block2">'+
                 '<div><div class="length-name type-name">Длина</div><div class="carlength type-value length">' + carList[car]['length'] + '</div></div>'+
                 '<div><div class="width-name type-name">Ширина</div><div class="carwidth type-value width">' + carList[car]['width'] + '</div></div>'+
                 '<div><div class="height-name type-name">Высота</div><div class="carheight type-value height">' + carList[car]['height'] + '</div></div>'+
                 '</div>'+
         '<div class="body">'+
                 '<div class="bodyType-name type-name">Номер ПТС</div><div class="bodyType type-value pts_number">' + carList[car]['pts_number'] + '</div>'+
          '</div>'+            
                 '<div class="end">'+
                 '<div class="change"><a class="changecar" changeid="'+carList[car].id+'">ИЗМЕНИТЬ</a></div>'+
                 '<div class="delete"><a class="deletecar" deleteid="'+carList[car].id+'">УДАЛИТЬ</a></div>'+
                '</div>' +
        '</div>';

    }
    $$('#carsblocks').html(carHtml);

	$$('.enabled_cars').on('change', function () {
       var enabled_id=$$(this).attr('name');
       if($$(this).prop('checked')==true){
         $$('#enabled_cars'+enabled_id).text(enablesname[1]);
        vicFunc.getdataserver('enable_cars', {enabled: true}, enabled_id);
       }else{
           $$('#enabled_cars'+enabled_id).text(enablesname[0]);
        vicFunc.getdataserver('enable_cars', {}, enabled_id);        
       }
        });
    
	$$('.changecar').on('click', function () {
	 var car_id=$$(this).attr('changeid');
     vicFunc.getdataserver('get_car_edit', {}, car_id);      
    });
	
    $$('.deletecar').on('click', function () {
	 var car_id=$$(this).attr('deleteid');
     vicFunc.getdataserver('car_delete', {}, car_id);
	 	$$('#car'+car_id).remove();
    });
	
		var htmloption="";
	 for (var type in car_types) {
		 if(car_types[type]!=''){
		htmloption=htmloption+'<option value="'+type+'">'+car_types[type]+'</option>';
		 }
	 }
 

	$$('.bodyType_option').html(htmloption);
   }
 };
 
 this.mapRoutesDetail= function(responseData){
	mainView.router.loadPage('pages/map_route.html');

 };
 /*изменение данных об автомобиле*/
 this.changeCar=function(responseData){
	$$('.popup-editcars #car_code').val(responseData.car_code);
	$$('.popup-editcars #region_code').val(responseData.region_code);
	$$('.popup-editcars #pts_number').val(responseData.pts_number);
	$$('.popup-editcars #carrying').val(responseData.carrying);
	$$('.popup-editcars #car_type_id').val(responseData.car_type_id);//
	$$('.popup-editcars #volume').val(responseData.volume);
	$$('.popup-editcars #length').val(responseData.length);
	$$('.popup-editcars #width').val(responseData.width);
	$$('.popup-editcars #height').val(responseData.height);
	myApp.popup('.popup-editcars');      
  

	$$('#saveCar').on('click', function () {
	data =  $$.serializeObject(myApp.formToJSON($$('form#edit-car')));
	$$('#car'+responseData.id+' .car_code').html($$('.popup-editcars #car_code').val());
	$$('#car'+responseData.id+' .region_code').html($$('.popup-editcars #region_code').val());
	$$('#car'+responseData.id+' .pts_number').html($$('.popup-editcars #pts_number').val());
	$$('#car'+responseData.id+' .carrying').html($$('.popup-editcars #carrying').val());
	$$('#car'+responseData.id+' .volume').html($$('.popup-editcars #volume').val());
	$$('#car'+responseData.id+' .length').html($$('.popup-editcars #length').val());
	$$('#car'+responseData.id+' .width').html($$('.popup-editcars #width').val());
	$$('#car'+responseData.id+' .height').html($$('.popup-editcars #height').val());
	$$('#car'+responseData.id+' .car_type_id').html( car_types[$$('.popup-editcars #car_type_id').val()] );

	    vicFunc.getdataserver('car_edit', data, responseData.id);
        myApp.closeModal('.popup-editcars');
	 });
     
};
this.showSubscribe = function(){
           var html='';
    var dummyMap = new ymaps.Map("mapdummy", {
        center: [55.751574, 37.573856],
        zoom: 9
        });
      var mynewroute=[];
  	for (var i in userProfileData.subscriptions) {
     mynewroute[userProfileData.subscriptions[i].id]=new ymaps.route([userProfileData.subscriptions[i].city_from.CityName, userProfileData.subscriptions[i].city_to.CityName]);   
      mynewroute[userProfileData.subscriptions[i].id].then(
       function (route) {
         var routeLength = Math.round(route.getLength()/10)/100;
         for(var t in mynewroute){
            if(mynewroute[t]._value==route){
            $$('#longcount'+t).html(routeLength+' км');    
            }
         }
       }
     );
        html=html+'<div class="subscribeblock" id="subsc'+userProfileData.subscriptions[i].id+'">'+
				'<div class="begin">'+
					'<span class="icon_map_routes"></span>'+
					'<div class="address-name">'+
						'<div class="city">'+userProfileData.subscriptions[i].city_from.CityName+'</div>'+
						'<div class="region">'+userProfileData.subscriptions[i].city_from.RegionName+'</div>'+
					'</div>'+
					'<div class="address-name">'+
						'<div class="city">'+userProfileData.subscriptions[i].city_to.CityName+'</div>'+
						'<div class="region">'+userProfileData.subscriptions[i].city_to.RegionName+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="itog">'+
					'<div class="long"><span class="ico icon-dist"></span><span id="longcount'+userProfileData.subscriptions[i].id+'"> </span></div>'+
					'<div class="compass showinmap" to="'+userProfileData.subscriptions[i].city_to.CityName+'" from="'+userProfileData.subscriptions[i].city_from.CityName+'"><span class="ico icon-compass"></span></div>'+
				'</div>'+
				'<div class="stat">'+
					'<div class="label" id="enabled'+userProfileData.subscriptions[i].id+'">';
                if(userProfileData.subscriptions[i].enabled==1){html=html+'Включена'; var check='checked="checked"';
                }else{html=html+'Выключена';var check='';}
                 html=html+'</div>'+
					'<label class="label-switch"><input type="checkbox" class="enabled_subscribe" '+check+' i="'+i+'" name="'+userProfileData.subscriptions[i].id+'"><div class="checkbox"></div></label>'+
				'</div>'+
				'<div class="button-container">'+
					'<!--div class="change_subscribe btn-lite" changeid="'+userProfileData.subscriptions[i].id+'">ИЗМЕНИТЬ</div-->'+
					'<div class="delete_subscribe btn-lite"  i="'+i+'" deleteid="'+userProfileData.subscriptions[i].id+'">УДАЛИТЬ</div>'+
				'</div>'+
		 '</div>';
        }
    /*		  */
   $$('#subscribeblocks').html(html);

   $$('.showinmap').on('click', function () {
        subscriptionsfrom=$$(this).attr('from');
        subscriptionsto=$$(this).attr('to');
         mainView.router.loadPage('pages/map.html');

        });
     $$('.delete_subscribe').on('click', function () {
          var delete_id=$$(this).attr('deleteid');
          var i=$$(this).attr('i');
          vicFunc.getdataserver('delete_subscriptions', {}, delete_id);
          $$('#subsc'+delete_id).remove();
          userProfileData.subscriptions.splice(i,1);
        });
     $$('.enabled_subscribe').on('change', function () {
       var enabled_id=$$(this).attr('name');
       var i=$$(this).attr('i');
       if($$(this).prop('checked')===true){
        userProfileData.subscriptions[i].enabled=1;
        $$('#enabled'+enabled_id).text("Включена");
        vicFunc.getdataserver('enable_subscriptions', {enabled: true}, enabled_id);
       }else{
        userProfileData.subscriptions[i].enabled=0;
        $$('#enabled'+enabled_id).text("Выключена");
        vicFunc.getdataserver('enable_subscriptions', {}, enabled_id);        
       }
        });

    
     $$('.addsubscribe').on('click', function () {	
      myApp.popup('.popup-addsubscribe');            
    });
     
      $$('.save_subscribe').on('click', function () {
         var data={city_from_id: $$('#begin_id').val(), city_to_id: $$('#end_id').val()};
         vicFunc.getdataserver('create_subscriptions', data);
          myApp.closeModal('.popup-addsubscribe');
        });
       };
 /*добавляем подписку после сохранения*/
 this.addSubscriptions= function(responseData){
	var html= $$('#subscribeblocks').html();
	  html=html+'<div class="subscribeblock" id="subsc'+responseData.id+'">'+
				'<div class="begin">'+
					'<span class="icon_map_routes"></span>'+
					'<div class="address-name">'+
						'<div class="city">'+responseData.city_from_city+'</div>'+
						'<div class="region">'+responseData.city_from_region+'</div>'+
					'</div>'+
					'<div class="address-name">'+
						'<div class="city">'+responseData.city_to_city+'</div>'+
						'<div class="region">'+responseData.city_to_region+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="itog">'+
					'<div class="long"><span class="ico icon-dist"></span><span id="longcount'+responseData.id+'"> </span></div>'+
					'<div class="compass showinmap" to="'+responseData.city_to_city+'" from="'+responseData.city_from_city+'"><span class="ico icon-compass"></span></div>'+
				'</div>'+
				'<div class="stat">'+
					'<div class="label" id="enabled'+responseData.id+'">';
             html=html+'Включена'; var check='checked="checked"';             
                 html=html+'</div>'+
					'<label class="label-switch"><input type="checkbox" class="enabled_subscribe" '+check+' name="'+responseData.id+'"><div class="checkbox"></div></label>'+
				'</div>'+
				'<div class="button-container">'+
					'<div class="delete_subscribe btn-lite" deleteid="'+responseData.id+'">УДАЛИТЬ</div>'+
				'</div>'+
		 '</div>';
  $$('#subscribeblocks').html(html);
   $$('.showinmap').on('click', function () {
        subscriptionsfrom=$$(this).attr('from');
        subscriptionsto=$$(this).attr('to');
         mainView.router.loadPage('pages/map.html');

        });
   new ymaps.route([responseData.city_from_city, responseData.city_to_city]).then(
    function (route) {
    var routeLength = route.getLength();
     $$('#longcount'+responseData.id).html(routeLength+' км');    
   }
  );
 };
/*отображение данных маршрута*/
 this.routesshow = function(responseData, parent){
  routesList=responseData.data;
  var routeHtml = '';
  for (var route in routesList) {
    price=Math.round(routesList[route]['carrier_rate']/routesList[route]['route_length']);
    routeHtml = routeHtml + '<div class="routeblock" id="' + routesList[route]['id'] + '">'
    + '<div class="header">'
    + '<div class="item-media"><span class="ico icon-dates"></span></div>'
    + '<div class="item-title">' +  vicFunc.getmyDateFormat(routesList[route]['loading']) + '-' +vicFunc.getmyDateFormat(routesList[route]['unloading']) + '</div>';
    if(routesList[route]['status'] !==null && routesList[route]['status'] !==undefined){
	 routeHtml = routeHtml+ '<div class="item-status">' + routesList[route]['status'] + '</div>';
	}
   routeHtml = routeHtml  + '</div>'

    + '<div class="begin">'
    + '<span class="icon_map_routes"></span>'
    + '<div class="address-name"><div class="city">' + routesList[route]['startpoint'][0] + '</div>'
    + '<div class="region">' + routesList[route]['startpoint'][1] + '</div>'

    + '</div>'
    + '<div class="address-name"><div class="city">' + routesList[route]['endpoint'][0] + '</div>'
    + '<div class="region">' + routesList[route]['endpoint'][1] + '</div>'

    + '</div></div>'

    + '<div class="itog">';
	if(routesList[route]['carrier_rate']!==null && routesList[route]['carrier_rate']>0){
    routeHtml = routeHtml+ '<div class="cost"><span class="ico icon-rub"></span> ' + routesList[route]['carrier_rate'] + ' руб</div>';
	}
	if(price!==null && price>0 && price!=Infinity){
   routeHtml = routeHtml + '<div class="price">' + price + ' руб/км</div>';
	}
		if(routesList[route]['route_length']!==null && routesList[route]['route_length'] > 0){
   routeHtml = routeHtml + '<div class="long"><span class="ico icon-dist"></span>' + routesList[route]['route_length'] + ' км</div>';
		}
  routeHtml = routeHtml  + '</div>'
    + '</div>';

    }
	if(routeHtml==''){
	routeHtml='<div class="routeblock"><div class="nodata">Маршрутов не обнаружено</div></div>';
	}
	//routesshow
	if(parent=='#listblocks' && search==1){
	 pagelistload=responseData.current_page+1;
	 last_page=responseData.last_page;
 	 routeHtml=$$(parent).html()+routeHtml;
	 loading=0;
	}
    $$(parent).html(routeHtml);
  }; 


this.login_first_error = function(responseData){
    if(responseData.status==422){
    msg=JSON.parse(decodeURI(responseData.responseText));            
    var html='';
    for (var i in msg) {
      html=html+'<br>'+msg[i][0];
    }
    $$('#entererror').html(html);
    myApp.popup('.popup-wrongpass');
    }
    if(responseData.status==401){
     msg=JSON.parse(decodeURI(responseData.responseText));
     if(msg.message=='auth.activation'){
      $$('#sendmesms').on('click', function () {
       data={resend_token: msg.resend_token};
       vicFunc.getdataserver('activationuserlogin',data);
       myApp.popup('.popup-registrationsms');
      });
      $$('.popup-sendregistrationsms .close-popup').on('click', function () {
      
       mainView.router.loadPage('index.html'); 
      });        
      myApp.popup('.popup-sendregistrationsms');        
      }        
    }
 }

this.setUserProfile = function(responseData){
	userProfileData=responseData;
	$$('.person-block #tel').html(userProfileData.phone);
    $$('.person-block #group').html(window.localStorage.getItem("role_label"));
	if(userProfileData.data!==null){
	$$('.person-block #bank_account').html(userProfileData.data.bank_account);
	$$('.person-block #bank_bik').html(userProfileData.data.bank_bik);
	$$('.person-block #bank_korr').html(userProfileData.data.bank_korr);
	$$('.person-block #bank_name').html(userProfileData.data.bank_name);
	$$('.person-block #cont_email').html(userProfileData.data.cont_email);
	$$('.person-block #cont_name').html(userProfileData.data.cont_name);
	$$('.person-block #cont_phone').html(userProfileData.data.cont_phone);
	$$('.person-block #org_email').html(userProfileData.data.org_email);
	$$('.person-block #org_head_name').html(userProfileData.data.org_head_name);
	$$('.person-block #org_inn').html(userProfileData.data.org_inn);
	$$('.person-block #org_kpp').html(userProfileData.data.org_kpp);
	$$('.person-block #org_name').html(userProfileData.data.org_name);
	$$('.person-block #org_phone').html(userProfileData.data.org_phone);
	$$('.person-block #org_ogrn').html(userProfileData.data.org_ogrn);
	$$('.person-block #org_post_address').html(userProfileData.data.org_post_address);
	}
	
}
this.setUserProfileEdit = function(){
	$$('.person-block-edit #phone').val(userProfileData.phone);
   
	$$('.person-block-edit #name').val(userProfileData.name);
	$$('.person-block-edit #password').val(password);
	$$('.person-block-edit #password_confirmation').val(password);
	if(userProfileData.data!==null){
	$$('.person-block-edit #bank_account').val(userProfileData.data.bank_account);
	$$('.person-block-edit #bank_bik').val(userProfileData.data.bank_bik);
	$$('.person-block-edit #bank_korr').val(userProfileData.data.bank_korr);
	$$('.person-block-edit #bank_name').val(userProfileData.data.bank_name);
	$$('.person-block-edit #cont_email').val(userProfileData.data.cont_email);
	$$('.person-block-edit #cont_name').val(userProfileData.data.cont_name);
	$$('.person-block-edit #cont_phone').val(userProfileData.data.cont_phone);
	$$('.person-block-edit #org_email').val(userProfileData.data.org_email);
	$$('.person-block-edit #org_head_name').val(userProfileData.data.org_head_name);
	$$('.person-block-edit #org_inn').val(userProfileData.data.org_inn);
	$$('.person-block-edit #org_kpp').val(userProfileData.data.org_kpp);
	$$('.person-block-edit #org_name').val(userProfileData.data.org_name);
	$$('.person-block-edit #org_phone').val(userProfileData.data.org_phone);
	$$('.person-block-edit #org_ogrn').val(userProfileData.data.org_ogrn);
	$$('.person-block-edit #org_post_address').val(userProfileData.data.org_post_address);
	}
	
	
	if(vicFunc.isFullRole()){$$('.forUr').show();}else{$$('.forUr').hide();}

}
this.ticket_message = function(responseData){  
		var theme=$$('#themeid').val();	
		 if(theme!==undefined){			
		 vicFunc.getdataserver('ticket_view','', theme);
		 $$('#themenewmsg').val('');	
		 };
  };
  
this.isFullRole = function(){
   return  (window.localStorage.getItem("role_id")==7); 
 };  
/*открываем страницу в первый раз*/
this.openfirst = function(responseData){
	userProfileData=responseData;
	$$('.personal_name').text(responseData.user.name);
	$$('.personal_type').text(responseData.user.role_label);
     window.localStorage.setItem("name", responseData.user.name);
     window.localStorage.setItem("role_label", responseData.user.role_label);
       window.localStorage.setItem("role_id", responseData.user.role_id); 
	mainView.router.loadPage('pages/map.html');  
	$$('#exit_icon').on('click', function () {		
      window.localStorage.clear();
	 myApp.closePanel();
	 mainView.router.loadPage("index.html");
	});
	
	$$('#menumap').on('click', function () {		
	 myApp.closeModal('.picker-modal.modal-in');
	});
	$$('#menulist').on('click', function () {
	 myApp.closeModal('.picker-modal.modal-in');
	});
	if(vicFunc.isFullRole()){
	$$('#menuroutes').on('click', function () {	
	   myApp.closeModal('.picker-modal.modal-in');
	});
	$$('#menutiket').on('click', function () {
	
	   myApp.closeModal('.picker-modal.modal-in');
	});
	$$('#menusubscribe').on('click', function () {
	
	   myApp.closeModal('.picker-modal.modal-in');
	});
	$$('#menucars').on('click', function () {
	
	   myApp.closeModal('.picker-modal.modal-in');
	});
	/*if(responseData.cars.length==0){
	myApp.pickerModal(
    '<div class="picker-modal addcars-modal">' +
      '<div class="picker-modal-inner">' +
        '<div class="content-block">' +
          '<p>Чтобы начать пользоваться сервисом, необходимо добавить  хотя бы один автомобиль.</p>' +
		  '<div class="button-container"><a id="addcar">ДОБАВИТЬ</a></div>'+
        '</div>' +
      '</div>' +
    '</div>'
  );
	
	$$('#addcar').on('click', function () {
	 
	    myApp.popup('.popup-addcars');
		 myApp.closeModal('.picker-modal.modal-in');
	});
	}*/
	}else{
	 $$('#menuroutes').remove();
	$$('#menutiket').remove();
	$$('#menusubscribe').remove();
	$$('#menucars').remove();		
	}
	$$('#menuperson').on('click', function () {
	   myApp.closeModal('.picker-modal.modal-in');
	});
        
}
}
function showlog(m){
   console.log(m);    
}