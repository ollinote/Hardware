jQuery(function(){$(".slide-list>li:gt(0)").hide();var slide=new Slide({autoPlay:false,speed:500,preLoadSliderNum:1,parallelPreLoad:true,naturalOrder:0,animationType:"scrollX",bannerEventType:"mouseover",bannerEventMouseoverDelay:300,carrier:{content:".scenes-slide .slide-list",banner:".scenes-slide .slider-controls"},extend:{linkDom:function(conf,sliderMember){var content=conf.carrier.content,banner=conf.carrier.banner;if(!(content&&$(content).length>0&&banner&&$(banner).length>0)){return}var members=[];var sliderObjs=$(content).children("li");var bannerObjs=$(banner).children("li");$.each(sliderObjs,function(i,n){var sMember=new sliderMember();sMember.sliderObj=$(n);sMember.bannerObj=$(bannerObjs.get(i));members.push(sMember)});return members}}})});