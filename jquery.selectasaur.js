/*
 * Selectasaur - Customize the target for a <select> tag

 * Copyright (c) 2012 Kyle Truscott
 *
 * http://keighl.github.com/selectasaur
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function ($) {

  // ----------------------------------

  "use strict";

  var methods = {

    init : function (options) {

      return $(this).each(function () {

        var $this  = $(this),
        settings   = {
          enabled_class        : "selectasaur-enabled",
          wrapper_class        : "selectasaur-wrapper",
          wrapper_active_class : "selectasaur-wrapper-active",
          wrapper_focus_class  : "selectasaur-wrapper-focus",
          wrapper_hover_class  : "selectasaur-wrapper-hover",
          label_class          : "selectasaur-label"
        };

        if (options) {
          $.extend(settings, options);
        }

        /*
        * Store all this stuff as data
        */

        $this.data('selectasaur', settings);

        $this.addClass(settings.enabled_class);

        var wrapper  = $('<div />').addClass(settings.wrapper_class),
            label    = $('<span />').addClass(settings.label_class),
            selected = $this.find(":selected:first");

        if (selected.length == 0) {
          selected = $this.find("option:first");
        }

        label.html(selected.html());

        $this.wrap(wrapper);
        $this.before(label);

        wrapper = $this.parent("div");
        label   = $this.siblings("span");

        $this.bind({
          "change.selectasaur": function() {
            label.text($this.find(":selected").html());
            wrapper.removeClass(settings.wrapper_focus_class);
            wrapper.removeClass(settings.wrapper_hover_class);
            wrapper.removeClass(settings.wrapper_active_class);
          },
          "focus.selectasaur": function() {
            wrapper.addClass(settings.wrapper_focus_class);
          },
          "blur.selectasaur": function() {
            wrapper.removeClass(settings.wrapper_focus_class);
            wrapper.removeClass(settings.wrapper_active_class);
          },
          "mousedown.selectasaur touchbegin.selectasaur": function() {
            wrapper.addClass(settings.wrapper_active_class);
          },
          "mouseup.selectasaur touchend.selectasaur": function() {
            wrapper.removeClass(settings.wrapper_active_class);
          },
          "click.selectasaur touchend.selectasaur": function(){
            wrapper.removeClass(settings.wrapper_active_class);
          },
          "mouseenter.selectasaur": function() {
            wrapper.addClass(settings.wrapper_hover_class);
          },
          "mouseleave.selectasaur": function() {
            wrapper.removeClass(settings.wrapper_hover_class);
          },
          "keyup.selectasaur": function() {
            label.text($this.find(":selected").html());
          }
        });

      });

    },

    // --------------------------------

    destroy : function () {

      return $(this).each(function () {

        var $this   = $(this),
            wrapper = $this.parent("div");

        var settings = $this.data("selectasaur");

        if (!settings) {
          return false;
        }

        $this.data('selectasaur', null);
        $this.unbind(".selectasaur");
        $this.css("opacity", 1);

        wrapper.after($this);
        wrapper.remove();

        $this.removeClass(settings.enabled_class);

      });

    }

  };

  // ----------------------------------

  $.fn.selectasaur = function (method) {

    if (methods[method]) {

      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

    } else if (typeof method === 'object' || !method) {

      return methods.init.apply(this, arguments);

    } else {

      $.error('Method ' +  method + ' does not exist on jQuery.selectasaur!');

    }

  };

}(jQuery));