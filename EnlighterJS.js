<script type="text/javascript">
(function($) {
    $(function() {
        $( '#page-container' ).on( 'click', '.et_toggle_fullscreen_menu', function() {
                toggle_fullscreen_menu_opened_class();
            });

        function toggle_fullscreen_menu_opened_class() {

            var $main_header = $( '#main-header' ),
                $et_main_area = $( '#et-main-area' );

            $main_header.toggleClass( 'fullscreen_menu_opened' );
            $et_main_area.toggleClass( 'fullscreen_menu_opened' );
        }
    })
})(jQuery);
</script>