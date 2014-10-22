/* Gen.js - 
 *   Ryan Hartje - http://github.com/ryanhartje
 *   
 *   Requirements
 *     - Should be able to import current websites (can we scrape the elements and xfer it to bootstrap optionally as well?)
 *     - Need to export to html/css
 *     - Need to be able to host instantly
 *     - Should be able to sell addon (domains, hosting, ssl, cloud, vps)
 *     - Be well branded
 *
 *
 *   PreAlpha - 
 *     Features:
 *       - UI Overlay for Editor
 *       - Make element editing 1 at a time
 *       - Add selector logic to identify what it's editing
 *           and provide a suitable container (h1 -> input, p -> textarea, image -> uploadModal)
 *       - Get a Save Function working (API Save route?)
 *       - Add navbar toggling (switch between navbar types)
 *       - Some sort of text formating or rich editing
 */
  var lastElem = {}; //holds variables of the last element to be used through the code

// If an editable element is clicked, 
//   allow the user to change it
//
// If editable elements are clicked, present the editor
$(document).on('click','a,h1,h2,h3,h4,h5,p',(function(){
  edit($(this));
}));


// If the user wants to save, save
$('#save').click(function(){
  $('.editor').remove();
  $('.target').removeClass('target');
  console.log($('html').html());
});

$(document).on('click','.save',function(){
  $('.target').html($('input.editor').val());
  $('.editor').remove();
});

$(document).on('click','.cancel',function(){
  //destroy the editor ui
  $('.editor').remove();
});

// FUNCTIONS

var edit = function(obj){
  // if the object isn't a part of the editor ui, isn't a list item, isn't a text area, isn't and isn't an image,
  //    let's give them the inline editor
  if( ! obj.hasClass('editor') && obj.not('li') && ! obj.hasClass('ui')){
    // Let's close up any straggling edit boxes by reverting them
    $('.editor').remove();
    $('.target').removeClass("target");

    // assign last element so that it can be called later 
    lastElem.obj = obj;
    lastElem.text = obj.text();

    obj.addClass('target');
    lastElem.test = obj.after(" \
      <div class='editor row'> \
        <span class='input-group'> \
          <span class='cancel input-group-addon editor'><i class='glyphicon glyphicon-remove-circle cancel editor'></i></span> \
          <input type='text' class='form-control editor' id='editor'> \
          <span class='editor input-group-addon save'><i class='editor save glyphicon glyphicon-ok-circle'></i></span> \
        </span> \
      </div> \
      <div class='editor col-md-4 input-group'> \
          <a href='#' class='editor add_image btn btn-primary'><i class='editor add_image glyphicon glyphicon-film'></i></a> \
      </div><!-- end row -- > \
    ");
    //obj.addClass('editor');
    $('#editor').val(lastElem.text);
    $('input.editor').focus();
  };
};


// OBJECTS

var jumbotron = '<div class="container"> \
                   <div class="jumbotron"> \
                     <h1>Hello, world!</h1> \
                     <p>...</p> \
                     <a class="btn btn-primary btn-lg" role="button">Learn more</a> \
                   </div> \
                 </div>';

var image = '<img src="#">';

var bgblock = "<div class='banner'> \
        <div class='container'> \
            <div class='row'> \
                <div class='col-lg-6'> \
                    <h2>Connect to Start Bootstrap:</h2> \
                </div> \
                <div class='col-lg-6'> \
                    <ul class='list-inline banner-social-buttons'> \
                        <li> \
                            <a href='#' class='btn btn-default btn-lg'><i class='fa fa-twitter fa-fw'></i> <span class='network-name'>Twitter</span></a> \
                        </li> \
                        <li> \
                            <a href='#' class='btn btn-default btn-lg'><i class='fa fa-github fa-fw'></i> <span class='network-name'>Github</span></a> \
                        </li> \
                        <li> \
                            <a href='#' class='btn btn-default btn-lg'><i class='fa fa-linkedin fa-fw'></i> <span class='network-name'>Linkedin</span></a> \
                        </li> \
                    </ul> \
                </div> \
            </div> \
        </div> \
        <!-- /.container --> \
    </div>";

var contentblock = '<section class="container-fluid" id="section4"> \
    <h2 class="text-center">Change this Content. Change the world.</h2> \
    <div class="row"> \
      <div class="col-sm-8 col-sm-offset-2"> \
      <img src="http://www.clker.com/cliparts/2/c/d/d/12296938041410771281rg1024_isometric_tower.svg.hi.png" class="img-responsive center-block "> \
      <p class="text-center">Images will scale down proportionately as browser width narrows.</p> \
      </div> \
    </div> \
    </section>';

var footer='<footer id="footer"> \
  <div class="container"> \
    <div class="row">     \
      <div class="col-xs-6 col-sm-6 col-md-3 column">           \
          <h4>Information</h4> \
          <ul class="nav"> \
            <li><a href="about-us.html">Products</a></li> \
            <li><a href="about-us.html">Services</a></li> \
            <li><a href="about-us.html">Benefits</a></li> \
            <li><a href="elements.html">Developers</a></li> \
          </ul>  \
        </div> \
      <div class="col-xs-6 col-md-3 column">           \
          <h4>Follow Us</h4> \
          <ul class="nav"> \
            <li><a href="#">Twitter</a></li> \
            <li><a href="#">Facebook</a></li> \
            <li><a href="#">Google+</a></li> \
            <li><a href="#">Pinterest</a></li> \
          </ul>  \
      </div> \
      <div class="col-xs-6 col-md-3 column">           \
          <h4>Contact Us</h4> \
          <ul class="nav"> \
            <li><a href="#">Email</a></li> \
            <li><a href="#">Headquarters</a></li> \
            <li><a href="#">Management</a></li> \
            <li><a href="#">Support</a></li> \
          </ul>  \
      </div> \
      <div class="col-xs-6 col-md-3 column">           \
          <h4>Customer Service</h4> \
          <ul class="nav"> \
            <li><a href="#">About Us</a></li> \
            <li><a href="#">Delivery Information</a></li> \
            <li><a href="#">Privacy Policy</a></li> \
            <li><a href="#">Terms &amp; Conditions</a></li> \
          </ul>  \
      </div> \
    </div><!--/row--> \
  </div> \
</footer> \
';

//############################################################################################
// UI Elements 
$(document).on('click','.add_jumbotron',function(){
  $('body').append(jumbotron);
});

$(document).on('click','.add_bgblock',function(){
  $('body').append(bgblock);
});

$(document).on('click','.add_contentblock',function(){
  $('body').append(contentblock);
});

$(document).on('click','.add_footer',function(){
  $('body').append(footer);
});
