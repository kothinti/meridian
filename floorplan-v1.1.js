$(document).ready(function() {

$('.cms-floorplans-studio-items > .cms-floorplans-studio-item').each(function(){
    $( ".studio-large-slider" ).append( 
        "<li><div class='lb'></div><div class='floor-plans w-clearfix'><div class='floor-plans__left'><div class='bs-overlay-panel bs-overlay-background bs-overlay-top text-center text-uppercase'><h3 class='h2-heading-small'>" + $('.floor-plan-name', this).text() + "</h3><p class='mb0 mx-auto h4-heading t1'>" + $('.t1', this).text() + "</p><div class='mt-40 mb-40'><img src='https://uploads-ssl.webflow.com/6469c80d14f61c2d0623ed1e/6472eebbc6b654ee8608858b_fp-greendiv.png' alt='' /></div><p class='h4-heading mb0 mx-auto t2'>" + $('.t2', this).text() + "</p><p class='h4-heading mx-auto t3 mb-56'>" + $('.t3', this).text() + "</p><p class='pdfD mb-0'><a target='_blank' class='fp_pdf-download w-inline-block' href=" + $('.floor-plan-pdf', this).attr('href') + ">Download Floor Plan <br><img src='https://uploads-ssl.webflow.com/6469c80d14f61c2d0623ed1e/6472f15c63040bdcf06f66bc_dl-pdf.png' alt='' /></a></p></div></div><div class='floor-plans__right'><img src=" + $('.floor-plan-image', this).attr('src') +"></div></div></li>"		
    );
  
    if($(this).find('.w-condition-invisible').length == 0){
      $( ".studio-carousel-slider" ).append( 
        "<li class='reserved'>" + "<div class=reserved-status>Fully Reserved</div><div class=thumbText><h4 class='title2 reserved-text'>" + $('.floor-plan-name', this).text() + "</h4><p class='thumb-txt mb-0 reserved-text'>" + $('.t2', this).text() + "</p><p class='thumb-txt mb-0 reserved-text'>" + $('.t3', this).text() + "</p></div>" + "<!-- img src=" + $('.floor-plan-thumb', this).attr('src') +" -->" + "</li>"
      );
    }else{
      $( ".studio-carousel-slider" ).append( 
        "<li>" + "<div class=thumbText><h4 class=title2>" + $('.floor-plan-name', this).text() + "</h4><p class='thumb-txt mb-0 reserved-text'>" + $('.t2', this).text() + "</p><p class='thumb-txt mb-0 reserved-text'>" + $('.t3', this).text() + "</p></div>" + "<!-- img src=" + $('.floor-plan-thumb', this).attr('src') +" -->" + "</li>"
      );
    }
});

$('.cms-floorplans-2bedroom-items > .cms-floorplans-2bedroom-item').each(function(){
    $( ".2bedroom-large-slider" ).append( 
        "<li><div class='lb'></div><div class='floor-plans w-clearfix'><div class='floor-plans__left'><div class='bs-overlay-panel bs-overlay-background bs-overlay-top text-center text-uppercase'><h3 class='h2-heading-small'>" + $('.floor-plan-name', this).text() + "</h3><p class='mb0 mx-auto h4-heading t1'>" + $('.t1', this).text() + "</p><div class='mt-40 mb-40'><img src='https://uploads-ssl.webflow.com/6469c80d14f61c2d0623ed1e/6472eebbc6b654ee8608858b_fp-greendiv.png' alt='' /></div><p class='h4-heading mb0 mx-auto t2'>" + $('.t2', this).text() + "</p><p class='h4-heading mx-auto t3 mb-56'>" + $('.t3', this).text() + "</p><p class='pdfD mb-0'><a target='_blank' class='fp_pdf-download w-inline-block' href=" + $('.floor-plan-pdf', this).attr('href') + ">Download Floor Plan <br><img src='https://uploads-ssl.webflow.com/6469c80d14f61c2d0623ed1e/6472f15c63040bdcf06f66bc_dl-pdf.png' alt='' /></a></p></div></div><div class='floor-plans__right'><img src=" + $('.floor-plan-image', this).attr('src') +"></div></div></li>"		
    );
  
    if($(this).find('.w-condition-invisible').length == 0){
      $( ".2bedroom-carousel-slider" ).append( 
        "<li class='reserved'>" + "<div class=reserved-status>Fully Reserved</div><div class=thumbText><h4 class='title2 reserved-text'>" + $('.floor-plan-name', this).text() + "</h4><p class='thumb-txt mb-0 reserved-text'>" + $('.t2', this).text() + "</p><p class='thumb-txt mb-0 reserved-text'>" + $('.t3', this).text() + "</p></div>" + "<!-- img src=" + $('.floor-plan-thumb', this).attr('src') +" -->" + "</li>"
      );
    }else{
      $( ".2bedroom-carousel-slider" ).append( 
        "<li>" + "<div class=thumbText><h4 class=title2>" + $('.floor-plan-name', this).text() + "</h4><p class='thumb-txt mb-0 reserved-text'>" + $('.t2', this).text() + "</p><p class='thumb-txt mb-0 reserved-text'>" + $('.t3', this).text() + "</p></div>" + "<!-- img src=" + $('.floor-plan-thumb', this).attr('src') +" -->" + "</li>"
      );
    }
});

$('.cms-floorplans-studio-items > .cms-floorplans-studio-item').each(function(){
    $( ".cottage-large-slider" ).append( 
        "<li><div class='lb'></div><div class='floor-plans w-clearfix'><div class='floor-plans__left'><div class='bs-overlay-panel bs-overlay-background bs-overlay-top text-center text-uppercase'><h3 class='h2-heading-small'>" + $('.floor-plan-name', this).text() + "</h3><p class='mb0 mx-auto h4-heading t1'>" + $('.t1', this).text() + "</p><div class='mt-40 mb-40'><img src='https://uploads-ssl.webflow.com/6469c80d14f61c2d0623ed1e/6472eebbc6b654ee8608858b_fp-greendiv.png' alt='' /></div><p class='h4-heading mb0 mx-auto t2'>" + $('.t2', this).text() + "</p><p class='h4-heading mx-auto t3 mb-56'>" + $('.t3', this).text() + "</p><p class='pdfD mb-0'><a target='_blank' class='fp_pdf-download w-inline-block' href=" + $('.floor-plan-pdf', this).attr('href') + ">Download Floor Plan <br><img src='https://uploads-ssl.webflow.com/6469c80d14f61c2d0623ed1e/6472f15c63040bdcf06f66bc_dl-pdf.png' alt='' /></a></p></div></div><div class='floor-plans__right'><img src=" + $('.floor-plan-image', this).attr('src') +"></div></div></li>"		
    );
  
    if($(this).find('.w-condition-invisible').length == 0){
      $( ".cottage-carousel-slider" ).append( 
        "<li class='reserved'>" + "<div class=reserved-status>Fully Reserved</div><div class=thumbText><h4 class='title2 reserved-text'>" + $('.floor-plan-name', this).text() + "</h4><p class='thumb-txt mb-0 reserved-text'>" + $('.t2', this).text() + "</p><p class='thumb-txt mb-0 reserved-text'>" + $('.t3', this).text() + "</p></div>" + "<!-- img src=" + $('.floor-plan-thumb', this).attr('src') +" -->" + "</li>"
      );
    }else{
      $( ".cottage-carousel-slider" ).append( 
        "<li>" + "<div class=thumbText><h4 class=title2>" + $('.floor-plan-name', this).text() + "</h4><p class='thumb-txt mb-0 reserved-text'>" + $('.t2', this).text() + "</p><p class='thumb-txt mb-0 reserved-text'>" + $('.t3', this).text() + "</p></div>" + "<!-- img src=" + $('.floor-plan-thumb', this).attr('src') +" -->" + "</li>"
      );
    }
});

});

