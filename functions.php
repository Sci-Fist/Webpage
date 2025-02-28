<?php
function enqueue_dark_mode_scripts() {
    wp_enqueue_style( 'dark-mode-style', get_stylesheet_directory_uri() . '/style.css' );
    wp_enqueue_script( 'dark-mode-script', get_stylesheet_directory_uri() . '/script.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_dark_mode_scripts' );
?>
