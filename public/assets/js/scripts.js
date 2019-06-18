/*!
 * Sprocket
 * A modern UI library for Parker Hannifin
 * #
 * @author Joe Reynolds
 * @version 0.1
 * Copyright 2019. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

//  Product Image gallery 
  $.fn.simplegallery = function(options) {

    var defaults = {
        'galltime': 300,
        'gallcontent': '.content',
        'gallthumbnail': '.thumbnail',
        'gallthumb': '.thumb'
    };

    var settings = $.extend({}, defaults, options);

    return this.each(function() {

        $(settings.gallthumb).click(function() {

            $(settings.gallcontent).find('img').stop(true,true).fadeOut(settings.galltime).hide();

            var imgAttr = $(this).find('img').attr('id'),
                imageId = imgAttr.replace('thumb_', '');

            $('.image_' + imageId + '').stop(true,true).fadeIn(settings.galltime);
            return false;

        });

    });

};

// Accordions

var $title = $('.js-accordion-title');
var content   = '.js-accordion-content';
// var collapsed = '.collapsed';

$title.click(function () {
  $(this).next(content).slideToggle();
  $(this).toggleClass('collapsed');
  $(this).parent().siblings().children(); // To open one at a time add .next().slideUp() after children()
  return false;
});







})(jQuery, window, document);
