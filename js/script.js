// Code goes here

setTimeout(function(){
  $('.code_tab2, .code-tab3, #terminal').hide();
  
  $('.tab1').on('click', function(){
    $(this).removeClass('transp');
    $('.code_tab1').fadeIn();
    $('.tab1, .tab2, .tab3').removeClass('active');
    $('.tab1').addClass('active');
    $('.code_tab2, .code_tab3').hide();
  });
  $('.tab2').on('click', function(){
    $(this).removeClass('transp');
    $('.code_tab2').fadeIn();
    $('.tab1, .tab2, .tab3').removeClass('active');
    $('.tab2').addClass('active');
    $('.code_tab1, .code_tab3').hide();
  });
  $('.tab3').on('click', function(){
    $(this).removeClass('transp');
    $('.code_tab3').fadeIn();
    $('.tab1, .tab2, .tab3').removeClass('active');
    $('.tab3').addClass('active');
    $('.code_tab1, .code_tab2').hide();
  });
  
  $('#terminal .terminal__btn').on('click', function(){
     $('#terminal').fadeOut();
     $('#terminal-footer').fadeIn();
  });
  $('#terminal-footer .terminal__btn').on('click', function(){
     $('#terminal').fadeOut();
     $('#terminal-footer').fadeOut();
  });
  $('.model__tools li').on('click', function(){
     var service = $('.tip',this).text();
     $('#terminal').fadeIn();
     $('.terminal__header .tspan').text(service);
  });
  
  window.setTimeout(function(){
     $('.code_tab1, .code_tab2, .code-tab3, #terminal').removeClass('hide');
  },2000);
  
  
  $('.model__header i').each(function(i){
    $(this).on('click', function(){
      $(this).addClass('hide');
      $('.model__tab').eq(i).addClass('hide');
      $('.tab1, .tab2, .tab3').removeClass('active');
      $('.code_tab1, .code_tab2, .code_tab3').hide();
    });
  });
  
  
  $('.model__file').each(function(i){
    $(this).on('click', function(){
      $('.model__tab').eq(i).removeClass('hide');
      $('.model__header i').eq(i).removeClass('hide');
      
    });
  });
  
  $('#login .terminal__btn').on('click', function(){
     $('#login').fadeOut();
  });
  
  $('.ide__header').on('click', function(){
    $('#login').fadeIn();
  });
  
  $('.folder').on('click', function(){
    $('.model__files ul').slideToggle();
  });
  
  var checkEmail = function(){
    $('#login, #terminal-footer').fadeOut();
    $('#terminal').fadeIn();
    
    $('.error').text('Error. Please contact the adminstrator: leoneloliver@gmail.com');
    $('.terminal__header .tspan').text('Login Error');
    return false;
  }
  
  $( "#news__form" ).submit(function( event ) {
    checkEmail();
    return false;
  });

},3000)

setTimeout(function(){
  $('.code_tab1').html('<div class="google-codelab-step-0"><pre><code language="" class=""><span class="tag">&lt;body</span><span class="pln"> </span><span class="atn">unresolved</span><span class="tag">&gt;</span><br>&nbsp;&nbsp;<span class="pln"></span><span class="tag">&lt;template</span><span class="pln"> </span><span class="atn">is</span><span class="pun">=</span><span class="atv">"dom-bind"</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"app"</span><span class="tag">&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;form</span><span class="pln"> </span><span class="atn">on-submit</span><span class="pun">=</span><span class="atv">"addItem"</span><span class="tag">&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;paper-input</span><span class="pln"> </span><span class="atn">value</span><span class="pun">=</span><span class="atv">"{{newItemValue}}"</span><span class="pln"> </span><span class="atn">placeholder</span><span class="pun">=</span><span class="atv">"Yor home city..."</span><span class="tag">&gt;&lt;/paper-input&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;paper-button</span><span class="pln"> </span><span class="atn">on-click</span><span class="pun">=</span><span class="atv">"addItem"</span><span class="tag">&gt;</span><span class="pln">List your home</span><span class="tag">&lt;/paper-button&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/form&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;template</span><span class="pln"> </span><span class="atn">is</span><span class="pun">=</span><span class="atv">"dom-repeat"</span><span class="pln"> </span><span class="atn">items</span><span class="pun">=</span><span class="atv">"{{items}}"</span><span class="tag">&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;div&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;paper-icon-button</span><span class="pln"> </span><span class="atn">icon</span><span class="pun">=</span><span class="atv">"delete"</span><span class="pln"> </span><span class="atn">on-click</span><span class="pun">=</span><span class="atv">"deleteItem"</span><span class="tag">&gt;&lt;/paper-icon-button&gt;&nbsp;&nbsp;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;paper-checkbox</span><span class="pln"> </span><span class="atn">on-change</span><span class="pun">=</span><span class="atv">"toggleItem"</span><span class="pln"> </span><span class="atn">checked</span><span class="pun">=</span><span class="atv">"{{item.done}}"</span><span class="tag">&gt;</span><span class="pln"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[[item.title]]</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/paper-checkbox&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/div&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/template&gt;</span><span class="pln"></span><br>&nbsp;&nbsp;<span class="tag">&lt;/template&gt;</span><code language="" class=""><br><span class="tag">&lt;/body&gt;</span></code></div> ');
$('.code_tab2').html('<div class="google-codelab-step-0"><pre><code language="" class=""><span class="atn">body{</span><span class="pln"> </span><br>&nbsp;&nbsp;<span class="tag">background:</span> <span class="atv">"#efefef";</span><br><span class="atn">}</span></pre><pre><code language="" class=""><span class="atn">.header{</span><span class="pln"> </span><br>&nbsp;&nbsp;<span class="tag">background:</span> <span class="atv">"#efefef";</span><span class="pln"> </span><br>&nbsp;&nbsp;<span class="tag">color:</span> <span class="atv">"#000";</span><br><span class="atn">}</span></pre><pre><code language="" class=""><span class="atn">.footer{</span><span class="pln"> </span><br>&nbsp;&nbsp;<span class="tag">background:</span> <span class="atv">"#efefef";</span><span class="pln"> </span><br>&nbsp;&nbsp;<span class="tag">color:</span> <span class="atv">"#000";</span><span class="pln"> </span><br>&nbsp;&nbsp;<span class="tag">font-size:</span> <span class="atv">1.2em;</span><span class="pln"> </span><span class="tag">padding:</span> <span class="atv">1em;</span><br><span class="atn">}</span></pre></div>');
$('.code_tab3').html('<div class="google-codelab-step-0"><pre><span class="tag">var</span> <span class="atn">createUser</span> = <span class="atv">function()</span>{<br>&nbsp:&nbsp;<span class="tag">var</span> <span class="atn">id</span> = 0;<br>&nbsp:&nbsp;<span class="tag">var</span> <span class="atn">newUser</span> = <span class="atv">function(<span class="tag">name</span>)</span>{<br>&nbsp:&nbsp;&nbsp:&nbsp;<span>id++;</span><br>&nbsp:&nbsp;&nbsp:&nbsp;<span class="tag">return</span> {<br>&nbsp:&nbsp;<span class="atn">id:</span> id,<br>&nbsp:&nbsp;<span class="atn">name:</span> name}}<br>&nbsp:&nbsp;<span class="tag">return</span> <span class="atn">newUser</span>;}<span class="tag">var</span> <span class="atn">createNew</span> = <span class="atv">createUser();</span><span class="tag">var</span> <span class="atn">leonel</span> = <span class="atv">createNew("<span class="tag">Leonel</span>");</span><span class="tag">console.log</span><span class="atv">(<span class="atn">leonel.id</span>+'-'+<span class="atn">leonel.name</span>);</span></pre></div>  ');
},3000)

